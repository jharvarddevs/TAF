<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

require_once __DIR__ . '/../config.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit();
}

$name = $data['name'] ?? 'Anonymous';
$isAnonymous = $data['isAnonymous'] ?? false;
$city = $data['city'] ?? '';
$badgeLevel = $data['badgeLevel'] ?? 'supporter';
$message = $data['message'] ?? '';
$honeypot = $data['website'] ?? '';

if ($honeypot !== '') {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you for joining']);
    exit();
}

if ($isAnonymous) {
    $name = 'Anonymous';
}

if (empty($name) || empty($badgeLevel)) {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing']);
    exit();
}

$validBadgeLevels = ['supporter', 'family-sponsor', 'community-builder', 'philadelphia-champion'];
if (!in_array($badgeLevel, $validBadgeLevels)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid badge level']);
    exit();
}

try {
    $stmt = $pdo->prepare("INSERT INTO donors (name, is_anonymous, city, badge_level, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->execute([$name, $isAnonymous ? 1 : 0, $city, $badgeLevel, $message]);

    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you for joining the Acts 20:35 Circle']);
} catch (Exception $e) {
    error_log("Donor creation error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'An error occurred']);
}
?>
