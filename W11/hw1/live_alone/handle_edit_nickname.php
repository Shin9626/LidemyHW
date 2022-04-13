<?php
    session_start();
    require_once('conn.php');
    require_once('utils.php');

    $nickname = $_POST['nickname'];
    $username = $_SESSION['username'];

    $sql = "UPDATE users SET nickname=? WHERE username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $nickname, $username);

    $result = $stmt->execute();

    if ($result) header("Location: ./index.php"); 
    else echo "failed, " . $conn->error;
?>