<?php

require_once('conn.php');

$title = $_POST['title'];
$description = $_POST['description'];
$salary = $_POST['salary'];
$link = $_POST['link'];

if (empty($title) || empty($description) || empty($salary) || empty($link)) {
    die("請檢查是否有未填資料");
}

$sql = "INSERT INTO jobs(title, description, salary, link)
        VALUES('$title', '$description' ,'$salary' ,'$link')";

$result = $connect->query($sql);

if ($result) {
    header("Location: ./admin.php");
} else {
    echo "failed, " . $connect->error;
}
