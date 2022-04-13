<?php
    session_start();
    require_once('conn.php');

    $nickname = $_POST['nickname'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    if(empty($nickname) || empty($username) || empty($password)){
        header("Location: register.php?err=1234");
        exit();
    }

    register_shutdown_function('shutdown', $conn);
    function shutdown($conn){
        if($conn->errno == '1062') header("Location: register.php?err=1062");
        die();
    }

    $sql = "INSERT INTO users(nickname, username, password) VALUES(?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sss', $nickname, $username, $password);
    $result = $stmt->execute();
    
    if($result){
        $_SESSION['username'] = $username;
        echo "註冊成功！" . '<a href="./index.php">回到首頁</a>';
    }
?>
