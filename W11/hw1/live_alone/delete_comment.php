<?php
    session_start();
    require_once('conn.php');
    require_once('utils.php');

    $id = $_GET['id'];
    $username = $_SESSION['username'];

    $sql = "UPDATE comments SET is_deleted=1 WHERE id=? AND username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $id, $username);

    $result = $stmt->execute();

    if ($result) header("Location: ./index.php"); 
    else echo "failed, " . $conn->error;
?>