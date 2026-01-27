<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) { die(json_encode(['status' => 'error'])); }

$name = filter_var($input['name'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$message = filter_var($input['message'], FILTER_SANITIZE_STRING);

if (!$email) { die(json_encode(['status' => 'error', 'message' => 'Invalid email'])); }

$to = "theactsfoundationtech@gmail.com";
$subject = "New Website Contact: $name";
$headers = "From: $email";
$fullMessage = "Name: $name\nEmail: $email\n\nMessage:\n$message";

if (mail($to, $subject, $fullMessage, $headers)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
