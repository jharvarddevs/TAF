<?php
header('Content-Type: application/json');

// Security key check
$secretKey = "CHANGE_ME_TO_A_LONG_SECURE_KEY"; // To be updated by USER
if ($_GET['key'] !== $secretKey) {
    die(json_encode(['status' => 'error', 'message' => 'Unauthorized']));
}

// Database Connection
$host = 'localhost';
$db   = 'taf_db';
$user = 'taf_user';
$pass = 'your_strong_password';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    $stmt = $pdo->query("SELECT * FROM email_signups ORDER BY created_at DESC");
    $rows = $stmt->fetchAll();

    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="email_signups_' . date('Y-m-d') . '.csv"');

    $output = fopen('php://output', 'w');
    fputcsv($output, ['ID', 'First Name', 'Email', 'Opt-In', 'Source', 'Date']);
    foreach ($rows as $row) {
        fputcsv($output, $row);
    }
    fclose($output);
    exit();
} catch (\PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database error']);
}
?>
