<?php  
    require_once('conn.php');
    require_once('utils.php');

    if($_SESSION['rank'] != 0){
        echo "你是不是想瑟瑟？";
        echo '<a href="./index.php?page=1>">回到首頁</a>';
        exit();
    }

    $username = NULL;
    if(!empty($_SESSION['username'])){
        // set username
        $user = GetUserFromUsername($_SESSION['username']);
        $username = $user['username'];      
    }

    $stmt = $conn->prepare('SELECT * FROM users ');
    $result = $stmt->execute();
    
    if(!$result) die('Error');
    $result = $stmt->get_result();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LiveAlone 邊緣世界</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        Welcome to LiveAlone! 歡迎來到邊緣世界
    </header>
    <main class="board">
        <div class="board__title">
            使用者名單
        </div>
        <div class="board__hr"></div>
        <section>
            <?php while ($row = $result->fetch_assoc()) {?>
                <?php 
                    switch($row['rank']){
                        case 0: $rank = "管理員"; break;
                        case 1: $rank = "一般會員"; break;
                        case 2: $rank = "停權會員"; break;
                    }    
                ?>
                <div class="card">
                    <div class="card__img"></div>
                    <div class="card__body">
                        <span class="card__author"><?php echo Escape($row['nickname'] . '(@' . $row['username'] . ')'); ?></span>
                        <span class="card__rank"><?php echo $rank; ?></span>
                        <div class="card__content"><div><a href="">更改權限</a></div></div>
                    </div>
                </div>
            <?php } ?>
        </section>
    </main>
</body>
</html>