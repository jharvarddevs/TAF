<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Honeypot spam field check
if (!empty($_POST['honeypot'])) {
    die(json_encode(['status' => 'error', 'message' => 'Spam detected']));
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    die(json_encode(['status' => 'error', 'message' => 'No input provided']));
}

$firstName = filter_var($input['firstName'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$optIn = isset($input['opted_in_updates']) ? (int)$input['opted_in_updates'] : 0;
$source = filter_var($input['source_page'], FILTER_SANITIZE_STRING) ?? 'unknown';

if (!$email) {
    die(json_encode(['status' => 'error', 'message' => 'Invalid email']));
}

// Database Connection
$host = 'localhost';
$db   = 'taf_db';
$user = 'taf_user';
$pass = 'your_strong_password'; // To be updated by USER in cPanel
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    
    $stmt = $pdo->prepare("INSERT INTO email_signups (first_name, email, opted_in_updates, source_page) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE opted_in_updates = ?");
    $stmt->execute([$firstName, $email, $optIn, $source, $optIn]);

    // Send notification email
    $to = "theactsfoundationtech@gmail.com";
    $subject = "New Lead Magnet Signup: $firstName";
    $message = "Name: $firstName\nEmail: $email\nOpted In: " . ($optIn ? 'Yes' : 'No') . "\nSource: $source";
    $headers = "From: noreply@theactsfoundation.org";
    
    mail($to, $subject, $message, $headers);

    echo json_encode(['status' => 'success', 'message' => 'Successfully signed up']);
} catch (\PDOException $e) {
    // Log error and return generic failure for security
    file_put_contents('php_errors.log', $e->getMessage(), FILE_APPEND);
    echo json_encode(['status' => 'error', 'message' => 'Database error']);
}
?>
