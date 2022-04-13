<?php
    session_start();
    require_once('conn.php');
    require_once('utils.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    if( empty($username) || empty($password)){
        header("Location: login.php?err=1234");
        exit();
    }

    $sql = "SELECT * FROM users WHERE username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $result = $stmt->execute();

    if(!$result) die($conn->error);
    
    if($result->num_rows == '0'){
        header("Location: login.php?err=1011");
        exit();
    }

    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    if(password_verify($password, $row['password'])) {
        $_SESSION['username'] = $username;
        $_SESSION['rank'] = $row['rank'];
        header("Location: index.php");
    } else {
        header("Location: login.php?err=1011");
        exit();
    }
?>
