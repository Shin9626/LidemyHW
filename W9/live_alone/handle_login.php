<?php
    require_once('conn.php');
    require_once('utils.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    if( empty($username) || empty($password)){
        header("Location: login.php?err=1234");
        die();
    }

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";

    $result = $conn->query($sql);

    if(!$result) die($conn->error);

    if($result->num_rows){
        // give token
        $token = GenerateToken();

        // send token SQL
        $sql = sprintf(
            "INSERT INTO tokens(token, username) VALUES('%s', '%s')",
            $token,
            $username
        );

        $result = $conn->query($sql);

        setcookie("token", $token, time()+3600);
        header("Location: index.php");
    }
    else{
        header("Location: login.php?err=1011");die();
    }
?>
