<?php
    require_once('conn.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    if( empty($username) || empty($password)){
        header("Location: login.php?err=1234");
        die();
    }

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";

    $result = $conn->query($sql);

    if(!$result) die($conn->error);

    if($result->num_rows != '0'){
        setcookie("username", $username, time()+3600);
        header("Location: index.php");
    }
    else{
        header("Location: login.php?err=1011");die();}
?>
