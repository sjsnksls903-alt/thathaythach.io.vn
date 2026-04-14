<?php
/**
 * Telegram Webhook Handler
 * 
 * Receives updates from Telegram and processes bot commands
 * 
 * Commands:
 * /start - Help
 * /add <mode> <type> <content> - Add question
 * /list <mode> - List questions  
 * /delete <mode> <type> <index> - Delete question
 * /modes - Show available modes
 */

require_once __DIR__ . '/config.php';

// Get update from Telegram
$content = file_get_contents("php://input");
$update = json_decode($content, true);

// Log for debugging (remove in production)
file_put_contents(__DIR__ . '/../data/webhook.log', date('Y-m-d H:i:s') . " - " . $content . "\n", FILE_APPEND);

if (!$update || !isset($update['message'])) {
    http_response_code(200);
    exit;
}

$message = $update['message'];
$chatId = $message['chat']['id'];
$userId = $message['from']['id'];
$text = $message['text'] ?? '';

// Check admin
if (!isAdmin($userId)) {
    sendTelegramMessage($chatId, "⛔ Bạn không có quyền sử dụng bot này.\n\nUser ID của bạn: <code>$userId</code>");
    exit;
}

// Parse command
$parts = explode(' ', $text, 4);
$command = strtolower($parts[0]);

switch ($command) {
    case '/start':
    case '/help':
        handleStart($chatId);
        break;
        
    case '/modes':
        handleModes($chatId);
        break;
        
    case '/add':
        handleAdd($chatId, $parts);
        break;
        
    case '/list':
        handleList($chatId, $parts);
        break;
        
    case '/delete':
        handleDelete($chatId, $parts);
        break;
        
    default:
        sendTelegramMessage($chatId, "❓ Lệnh không hợp lệ. Gõ /help để xem hướng dẫn.");
}

/**
 * Handle /start command
 */
function handleStart($chatId) {
    $text = "🎮 <b>Thật Hay Thách - Bot Quản Lý</b>\n\n";
    $text .= "📝 <b>Các lệnh có sẵn:</b>\n\n";
    $text .= "▪️ <code>/modes</code> - Xem danh sách modes\n";
    $text .= "▪️ <code>/add [mode] [type] [nội dung]</code> - Thêm câu hỏi\n";
    $text .= "▪️ <code>/list [mode]</code> - Xem danh sách\n";
    $text .= "▪️ <code>/delete [mode] [type] [số thứ tự]</code> - Xóa câu hỏi\n\n";
    $text .= "📌 <b>Ví dụ:</b>\n";
    $text .= "<code>/add thach-nang questions Bạn đã nói dối bao nhiêu lần?</code>\n\n";
    $text .= "📌 <b>Types:</b>\n";
    $text .= "• <code>questions</code> - Câu hỏi Thật\n";
    $text .= "• <code>tasks</code> - Nhiệm vụ Thách\n";
    $text .= "• <code>special</code> - Đặc biệt";
    
    sendTelegramMessage($chatId, $text);
}

/**
 * Handle /modes command
 */
function handleModes($chatId) {
    $text = "🎯 <b>Các Mode Game:</b>\n\n";
    foreach (GAME_MODES as $key => $name) {
        $text .= "• <code>$key</code> - $name\n";
    }
    $text .= "\n📌 <b>Types cho mỗi mode:</b>\n";
    foreach (QUESTION_TYPES as $key => $name) {
        $text .= "• <code>$key</code> - $name\n";
    }
    
    sendTelegramMessage($chatId, $text);
}

/**
 * Handle /add command
 */
function handleAdd($chatId, $parts) {
    if (count($parts) < 4) {
        sendTelegramMessage($chatId, "❌ Cú pháp sai!\n\n<code>/add [mode] [type] [nội dung]</code>\n\nVí dụ:\n<code>/add thach-nang questions Câu hỏi của bạn</code>");
        return;
    }
    
    $mode = strtolower($parts[1]);
    $type = strtolower($parts[2]);
    $content = $parts[3];
    
    // Validate mode
    if (!isset(GAME_MODES[$mode])) {
        sendTelegramMessage($chatId, "❌ Mode không hợp lệ!\n\nGõ /modes để xem danh sách.");
        return;
    }
    
    // Validate type
    if (!isset(QUESTION_TYPES[$type])) {
        sendTelegramMessage($chatId, "❌ Type không hợp lệ!\n\nTypes: <code>questions</code>, <code>tasks</code>, <code>special</code>");
        return;
    }
    
    // Load and update
    $questions = loadQuestions();
    
    if (!isset($questions[$mode])) {
        $questions[$mode] = ['questions' => [], 'tasks' => [], 'special' => []];
    }
    if (!isset($questions[$mode][$type])) {
        $questions[$mode][$type] = [];
    }
    
    $questions[$mode][$type][] = $content;
    saveQuestions($questions);
    
    $count = count($questions[$mode][$type]);
    $modeName = GAME_MODES[$mode];
    $typeName = QUESTION_TYPES[$type];
    
    sendTelegramMessage($chatId, "✅ <b>Đã thêm thành công!</b>\n\n📁 Mode: $modeName\n📝 Type: $typeName\n💬 Nội dung: $content\n\n📊 Tổng số: $count câu");
}

/**
 * Handle /list command
 */
function handleList($chatId, $parts) {
    $questions = loadQuestions();
    
    if (count($parts) < 2) {
        // Show summary
        $text = "📊 <b>Tổng quan câu hỏi tùy chỉnh:</b>\n\n";
        foreach (GAME_MODES as $mode => $name) {
            $q = count($questions[$mode]['questions'] ?? []);
            $t = count($questions[$mode]['tasks'] ?? []);
            $s = count($questions[$mode]['special'] ?? []);
            $total = $q + $t + $s;
            $text .= "$name: <b>$total</b> (Q:$q, T:$t, S:$s)\n";
        }
        $text .= "\n📌 Gõ <code>/list [mode]</code> để xem chi tiết";
        sendTelegramMessage($chatId, $text);
        return;
    }
    
    $mode = strtolower($parts[1]);
    
    if (!isset(GAME_MODES[$mode])) {
        sendTelegramMessage($chatId, "❌ Mode không hợp lệ!\n\nGõ /modes để xem danh sách.");
        return;
    }
    
    $modeName = GAME_MODES[$mode];
    $text = "📋 <b>$modeName</b>\n\n";
    
    foreach (QUESTION_TYPES as $type => $typeName) {
        $items = $questions[$mode][$type] ?? [];
        $text .= "<b>$typeName:</b>\n";
        if (empty($items)) {
            $text .= "   (trống)\n";
        } else {
            foreach ($items as $i => $item) {
                $num = $i + 1;
                $short = mb_substr($item, 0, 40);
                if (mb_strlen($item) > 40) $short .= '...';
                $text .= "   $num. $short\n";
            }
        }
        $text .= "\n";
    }
    
    sendTelegramMessage($chatId, $text);
}

/**
 * Handle /delete command  
 */
function handleDelete($chatId, $parts) {
    if (count($parts) < 4) {
        sendTelegramMessage($chatId, "❌ Cú pháp sai!\n\n<code>/delete [mode] [type] [số thứ tự]</code>\n\nVí dụ:\n<code>/delete thach-nang questions 1</code>");
        return;
    }
    
    $mode = strtolower($parts[1]);
    $type = strtolower($parts[2]);
    $index = intval($parts[3]) - 1; // Convert to 0-based
    
    // Validate
    if (!isset(GAME_MODES[$mode])) {
        sendTelegramMessage($chatId, "❌ Mode không hợp lệ!");
        return;
    }
    
    if (!isset(QUESTION_TYPES[$type])) {
        sendTelegramMessage($chatId, "❌ Type không hợp lệ!");
        return;
    }
    
    $questions = loadQuestions();
    $items = $questions[$mode][$type] ?? [];
    
    if ($index < 0 || $index >= count($items)) {
        sendTelegramMessage($chatId, "❌ Số thứ tự không hợp lệ!\n\nGõ <code>/list $mode</code> để xem danh sách.");
        return;
    }
    
    $deleted = $items[$index];
    array_splice($questions[$mode][$type], $index, 1);
    saveQuestions($questions);
    
    sendTelegramMessage($chatId, "🗑️ <b>Đã xóa:</b>\n\n$deleted");
}

http_response_code(200);
