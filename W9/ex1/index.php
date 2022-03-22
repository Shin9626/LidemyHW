<?php
require_once('conn.php');

$result = $connect->query("select * from users;");
if (!$result) {
    die($connect->error);
}

while ($row = $result->fetch_assoc()) {
    echo "id: " . $row['id'];
    echo "<a href='delete.php?id=" . $row['id'] . "'>刪除</a><br>";
    echo "username: " . $row['username'] . "<br>";
}
?>

<h2>新增user</h2>
<form method="POST" action="add.php">
    username : <input type="text" name="username"> <input type="submit" value="送出">
</form>

<h2>編輯user</h2>
<form method="POST" action="update.php">
    id : <input type="text" name="id"> username : <input type="text" name="username"> <input type="submit" value="送出">
</form>