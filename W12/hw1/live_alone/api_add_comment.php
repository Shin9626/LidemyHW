<?php
    header('Content-Type: application/json; charset=UTF-8'); 
    header('Access-Control-Allow-Origin: *');

    require_once('conn.php');
    require_once('utils.php');

    $content = $_POST['content'];
    $username = $_POST['nickname'];

    $sql = "INSERT INTO comments(username, content) VALUES(?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $username, $content);

    $result = $stmt->execute();
?>