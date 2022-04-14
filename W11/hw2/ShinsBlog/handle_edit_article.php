<?php
    session_start();
    require_once('conn.php');
    
    $id = $_GET['id'];
    $title = $_POST['title'];
    $content = $_POST['content'];

    $stmt = $conn->prepare("UPDATE articles SET title=?, content=? WHERE id=?");
    $stmt->bind_param("sss", $title, $content, $id);
    $result = $stmt->execute();

    echo "更改成功";
    header("location: ./dashboard.php");
?>