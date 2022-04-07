<?php
    session_start();
    require_once('conn.php');
    require_once('utils.php');

    $content = $_POST['content'];
    $id = $_POST['id'];

    $sql = "UPDATE comments SET content=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $content, $id);

    $result = $stmt->execute();

    if ($result) header("Location: ./index.php"); 
    else echo "failed, " . $conn->error;
?>