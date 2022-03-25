<?php
    require_once('conn.php');

    function shutdown($conn){
        if($conn->errno == '1062')
            header("Location: ./register.php?err=1062");
    }
    
    register_shutdown_function('shutdown', $conn);

    $nickname = $_POST['nickname'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users(nickname, username, password)
                VALUES('$nickname', '$username', '$password')";

    $result = $conn->query($sql);
    
    if($result) echo "註冊成功！" . '<a href="./index.php">回到首頁</a>';
?>
