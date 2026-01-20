<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

require_once __DIR__ . '/../config.php';

$limit = isset($_GET['limit']) ? min((int)$_GET['limit'], 100) : 50;
$badgeLevel = $_GET['badgeLevel'] ?? null;

try {
    if ($badgeLevel) {
        $stmt = $pdo->prepare("SELECT id, name, is_anonymous, city, badge_level, message, created_at FROM donors WHERE badge_level = ? ORDER BY created_at DESC LIMIT ?");
        $stmt->execute([$badgeLevel, $limit]);
    } else {
        $stmt = $pdo->prepare("SELECT id, name, is_anonymous, city, badge_level, message, created_at FROM donors ORDER BY created_at DESC LIMIT ?");
        $stmt->execute([$limit]);
    }

    $donors = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $formattedDonors = array_map(function($donor) {
        return [
            'id' => (string)$donor['id'],
            'name' => $donor['name'],
            'isAnonymous' => (bool)$donor['is_anonymous'],
            'city' => $donor['city'],
            'badgeLevel' => $donor['badge_level'],
            'message' => $donor['message'],
            'createdAt' => $donor['created_at']
        ];
    }, $donors);

    http_response_code(200);
    echo json_encode(['donors' => $formattedDonors]);
} catch (Exception $e) {
    error_log("Donor list error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'An error occurred']);
}
?>
