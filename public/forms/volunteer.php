<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) { die(json_encode(['status' => 'error'])); }

$name = filter_var($input['name'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$role = filter_var($input['role'], FILTER_SANITIZE_STRING);
$experience = filter_var($input['experience'], FILTER_SANITIZE_STRING);

$to = "theactsfoundationtech@gmail.com";
$subject = "New Volunteer Application: $name";
$headers = "From: $email";
$fullMessage = "Name: $name\nEmail: $email\nRole Interest: $role\nExperience: $experience";

if (mail($to, $subject, $fullMessage, $headers)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
