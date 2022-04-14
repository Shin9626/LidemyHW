<?php
    session_start();
    require_once('conn.php');
    
    $title = $_POST['title'];
    $content = $_POST['content'];

    $stmt = $conn->prepare("INSERT INTO articles(title, content) VALUES(?, ?)");
    $stmt->bind_param("ss", $title, $content);
    $result = $stmt->execute();

    header("location: ./dashboard.php");
?>