<?php
    require_once('conn.php');

    $nickname = $_POST['nickname'];
    $content = $_POST['content'];

    $sql = "INSERT INTO comments(nickname, content)
            VALUES('$nickname', '$content')";

    $result = $conn->query($sql);

    if ($result) header("Location: ./index.php"); 
    else echo "failed, " . $conn->error;
?>