<?php
/**
 * Configuration file for Telegram Bot
 * 
 * IMPORTANT: Update these values before deploying!
 */

// Telegram Bot Token (get from @BotFather)
define('TELEGRAM_BOT_TOKEN', '8094784663:AAFkDY8KgCdgd7uWS1eVKmwHFntR5utNnb8');

// Admin Telegram User IDs (only these users can manage questions)
// Get your ID by messaging @userinfobot on Telegram
define('ADMIN_USER_IDS', [
    1176968735,  // Replace with your Telegram user ID
]);

// Data file path
define('DATA_FILE', __DIR__ . '/../data/custom-questions.json');

// Game modes
define('GAME_MODES', [
    'thach-nang' => '😈 Thách Nặng',
    'tre-em' => '👶 Trẻ Em',
    'team-building' => '🏢 Team Building',
    'cap-doi' => '💘 Cặp Đôi'
]);

// Question types
define('QUESTION_TYPES', [
    'questions' => '❓ Câu Hỏi (Thật)',
    'tasks' => '🎭 Nhiệm Vụ (Thách)',
    'special' => '⭐ Đặc Biệt'
]);

// CORS settings (update with your domain)
define('ALLOWED_ORIGINS', [
    'http://localhost:8080',
    'https://game.mienbacnd.online/'  // Replace with your actual domain
]);

/**
 * Check if user is admin
 */
function isAdmin($userId) {
    return in_array($userId, ADMIN_USER_IDS);
}

/**
 * Send Telegram message
 */
function sendTelegramMessage($chatId, $text, $parseMode = 'HTML') {
    $url = "https://api.telegram.org/bot" . TELEGRAM_BOT_TOKEN . "/sendMessage";
    
    $data = [
        'chat_id' => $chatId,
        'text' => $text,
        'parse_mode' => $parseMode
    ];
    
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    return file_get_contents($url, false, $context);
}

/**
 * Load questions from file
 */
function loadQuestions() {
    if (!file_exists(DATA_FILE)) {
        return [
            'thach-nang' => ['questions' => [], 'tasks' => [], 'special' => []],
            'tre-em' => ['questions' => [], 'tasks' => [], 'special' => []],
            'team-building' => ['questions' => [], 'tasks' => [], 'special' => []],
            'cap-doi' => ['questions' => [], 'tasks' => [], 'special' => []]
        ];
    }
    return json_decode(file_get_contents(DATA_FILE), true);
}

/**
 * Save questions to file
 */
function saveQuestions($questions) {
    $dir = dirname(DATA_FILE);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
    return file_put_contents(DATA_FILE, json_encode($questions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}
