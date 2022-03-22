<?php
require_once('conn.php');

$id = $_GET['id'];
$sql = sprintf(
    "DELETE FROM users WHERE id = %d",
    $id
);
$result = $connect->query($sql);
if (!$result) {
    die();
}

header("Location: index.php")
?>