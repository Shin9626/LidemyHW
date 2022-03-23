<?php
    $sever_name = "localhost";
    $username = 'root';
    $password = '';
    $db_name = 'jobs';

    $connect = new mysqli($sever_name, $username, $password, $db_name); 

    if($connect->connect_error){
        die('連線錯誤<br>');
    }

    $connect->query('SET NAMES UTF8');
    $connect->query('SET time_zone = "+8:00"');
?>