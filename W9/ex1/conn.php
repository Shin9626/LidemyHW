<?php
    $sever_name = "localhost";
    $username = "shin";
    $password = "shin";
    $db_name = "shin";

    $connect = new mysqli($sever_name, $username, $password, $db_name); 

    if($connect->connect_error){
        die('資料庫連線錯誤<br>');
    }

    $connect->query('SET NAMES UTF8');
    $connect->query('SET time_zone = "+8:00"');
?>