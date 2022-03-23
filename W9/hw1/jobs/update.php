<?php
require_once('./conn.php');
$id = $_GET['id'];
$sql = 'SELECT * FROM jobs WHERE id =' . $id;
$result = $connect->query($sql);
if (!$result) die('連線錯誤，請稍後再試');

$row = $result->fetch_assoc();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>All Day Jobs 天天上工</title>
</head>

<body>
    <h2>All Day Jobs 天天上工</h2>
    <a href="admin.php" class="job__link">回到職缺管理頁面</a>

    <div class="container">
        <div class="job__form">
            <form method="POST" action="handle_update.php?id=<?php echo $row['id']; ?>">
                <div>職缺名稱：<input type="text" name="title" value="<?php echo $row['title']; ?>"></div>
                <div>職缺描述：<textarea name="description" cols="21" rows="10"><?php echo $row['description']; ?></textarea></div>
                <div>薪資範圍：<input type="text" name="salary" value="<?php echo $row['salary']; ?>"></div>
                <div>職缺連結：<input type="text" name="link" value="<?php echo $row['link']; ?>"></div>
                <div><input type="submit" value="送出"></div>
            </form>
        </div>
    </div>
</body>

</html>