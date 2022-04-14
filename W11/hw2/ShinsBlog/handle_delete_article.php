<?php
    session_start();
    require_once('conn.php');
    
    $id = $_GET['id'];

    $stmt = $conn->prepare("DELETE FROM articles WHERE id=?");
    $stmt->bind_param("s", $id);
    $result = $stmt->execute();

    header("location: ./dashboard.php");
?>