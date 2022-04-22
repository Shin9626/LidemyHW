<?php
    session_start();
    require_once('conn.php');
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username=?");
    $stmt->bind_param("s", $username);
    $result = $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if($row['password'] == $password) {
        $_SESSION['username'] = $username;
        header("location: ./dashboard.php");
    } else {
        die("輸入有誤或連線錯誤");
    }
?>