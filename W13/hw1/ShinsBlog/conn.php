<?php
    $server = "localhost";
    $username ="root";
    $password ="";
    $db = "shin";

    $conn = new mysqli($server, $username, $password, $db);

    if($conn->connect_error) die("連線錯誤");

    $conn->query('SET NAMES UTF8');
    $conn->query('SET time_zone = "+8:00"');
?>