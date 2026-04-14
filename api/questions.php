<?php
/**
 * Questions API Endpoint
 * 
 * Returns custom questions for the game to fetch
 * 
 * GET /api/questions.php - Returns all custom questions
 * GET /api/questions.php?mode=thach-nang - Returns questions for specific mode
 */

require_once __DIR__ . '/config.php';

// CORS headers
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS) || in_array('*', ALLOWED_ORIGINS)) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Load questions
$questions = loadQuestions();

// Filter by mode if requested
$mode = $_GET['mode'] ?? null;

if ($mode) {
    if (!isset(GAME_MODES[$mode])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid mode', 'validModes' => array_keys(GAME_MODES)]);
        exit;
    }
    
    echo json_encode([
        'success' => true,
        'mode' => $mode,
        'data' => $questions[$mode] ?? ['questions' => [], 'tasks' => [], 'special' => []]
    ], JSON_UNESCAPED_UNICODE);
} else {
    // Return all
    echo json_encode([
        'success' => true,
        'data' => $questions
    ], JSON_UNESCAPED_UNICODE);
}
