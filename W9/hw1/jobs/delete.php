<?php

require_once('conn.php');

$id = $_GET['id'];

$sql = "DELETE FROM jobs WHERE id =" . $id;
if($connect->query($sql)){
    header('Location: ./admin.php');
} else {
    echo 'failed: ' . $connect->error;
}

?>