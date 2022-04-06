<?php
    require_once('conn.php');

    function GenerateToken(){
        $s = '';
        for($i=0 ; $i<15; $i++) $s .= chr(rand(65,90));
        return $s;
    }

    function GetUserFromToken($token){
        global $conn;
        
        $result = $conn->query("SELECT username FROM tokens WHERE token='$token'");
        $row = $result->fetch_assoc();
        $username = $row['username'];

        $result = $conn->query("SELECT * FROM users WHERE username='$username'");
        $row = $result->fetch_assoc();
        return $row;
    }
?>