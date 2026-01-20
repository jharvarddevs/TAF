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

require_once __DIR__ . '/config.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit();
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';
$answers = json_encode($data['answers'] ?? []);
$honeypot = $data['website'] ?? '';

if ($honeypot !== '') {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you for volunteering']);
    exit();
}

if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

try {
    $stmt = $pdo->prepare("INSERT INTO volunteers (name, email, phone, message, quiz_answers, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->execute([$name, $email, $phone, $message, $answers]);

    $to = 'theactsfoundationtech@gmail.com';
    $emailSubject = "New Volunteer Application: $name";
    $emailBody = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n\nQuiz Answers:\n$answers";
    $headers = "From: noreply@theactsfoundation.org\r\nReply-To: $email\r\n";

    @mail($to, $emailSubject, $emailBody, $headers);

    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you for volunteering']);
} catch (Exception $e) {
    error_log("Volunteer form error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'An error occurred']);
}
?>
