<?php
    require_once('conn.php');

    $token = $_COOKIE['token'];

    $conn->query("DELETE FROM tokens WHERE token='$token'");
    setcookie("token", "", time()-3600);
    header("Location: ./index.php");
?>
