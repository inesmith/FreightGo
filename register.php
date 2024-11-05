<?php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$surname = $data['surname'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$role = $data['role'];
$contactNumber = $data['contactNumber'];

$sql = "INSERT INTO users (name, surname, email, password, role, contactNumber) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt->execute([$name, $surname, $email, $password, $role, $contactNumber])) {
    echo json_encode(['message' => 'User registered successfully']);
} else {
    echo json_encode(['error' => 'Registration failed']);
}
?>
