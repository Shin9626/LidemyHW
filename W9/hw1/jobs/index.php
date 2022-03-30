<?php require_once('./conn.php'); ?>

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
    <div class="container">
        <?php
            $sql = 'SELECT * FROM jobs ORDER BY create_at DESC';
            $result = $connect->query($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()){
                    echo '<div class="job__box">';
                    echo    '<div class="job">';
                    echo        '<h3 class="job__title">' . $row['title'] . '</h3>';
                    echo        '<p class="job__desc ">' . $row['description'] . '</p>';
                    echo        '<p class="job__salary">薪資範圍： ' . $row['salary'] . '</p>';
                    echo        '<a href="' . $row['link'] . '"class="job__link ">詳細資訊</a>';
                    echo    "</div> ";
                    echo "</div>";
                }
            }
        ?>
</body>

</html>