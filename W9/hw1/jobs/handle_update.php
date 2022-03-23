<?php

require_once('conn.php');

$id = $_GET['id'];

$title = $_POST['title'];
$description = $_POST['description'];
$salary = $_POST['salary'];
$link = $_POST['link'];

if (empty($title) || empty($description) || empty($salary) || empty($link)) {
    die("請檢查是否有未填資料");
}

$sql = "UPDATE jobs SET title='$title', description='$description', salary='$salary', link='$link' WHERE id='$id'";

$result = $connect->query($sql);

if ($result) {
    header("Location: ./admin.php");
} else {
    echo "failed, " . $connect->error;
}

?>