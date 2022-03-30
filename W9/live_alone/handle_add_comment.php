<?php
    require_once('conn.php');
    require_once('utils.php');

    $content = $_POST['content'];

    $user = GetUserFromToken($_COOKIE['token']);
    $nickname = $user['nickname'];

    $sql = "INSERT INTO comments(nickname, content)
            VALUES('$nickname', '$content')";

    $result = $conn->query($sql);

    if ($result) header("Location: ./index.php"); 
    else echo "failed, " . $conn->error;
?>