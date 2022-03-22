<?php
require_once('conn.php');

$id = $_POST['id'];
$username = $_POST['username'];

$sql = sprintf(
    "UPDATE users SET username='%s' WHERE id = %d",
    $username,
    $id
);

$result = $connect->query($sql);
if (!$result) {
    die();
}

header("Location: index.php")
?>