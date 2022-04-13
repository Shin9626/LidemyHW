<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'live_alone';

    $conn = new mysqli($servername, $username, $password, $database);
    if($conn->connect_error) die('連線錯誤');

    $conn->query('SET NAMES UTF8');
    $conn->query('SET time_zone = "+8:00"');
?>