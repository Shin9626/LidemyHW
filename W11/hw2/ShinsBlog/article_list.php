<?php
    session_start();
    require_once("conn.php");

    $stmt = $conn->prepare("SELECT * FROM articles ORDER BY created_at DESC");
    $result = $stmt->execute();
    $result = $stmt->get_result();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shin's Blog</title>
</head>
<body>
    <nav>
        <div class="nav__container">
            <div class="nav__title">
                <a href="./index.php">Shin's Blog</a>
            </div>
            <div class="nav__item-box">
                <div class="nav__item"><a href="">關於我</a></div>
                <div class="nav__item"><a href="./article_list.php">文章列表</a></div>
                <div class="nav__item">
                    <?php if(empty($_SESSION['username'])){?>
                        <a href="./login.html">登入後台</a>
                    <?php } else {?>
                        <a href="./logout.php">登出後台</a>
                    <?php } ?>
                </div>
            </div>
        </div>      
    </nav>
    <div class="jumbotron">
        SHIN'S BLOG
    </div>
    <main>   
        <div class="article__container">
            <div class="article__box">
                <?php while($row = $result->fetch_assoc()){?>
                    <div class="article__card">
                        <div class="article__card-info">
                            <h3><?php echo $row['title'];?></h3>
                            <span><?php echo $row['created_at'];?></span>
                        </div>
                        <hr>
                        <p><?php echo $row['content'];?></p>
                    </div>
                <?php $cursor = $row['id'];}?>
                <div class="article__load" style="display:none">
                    <button type="submit" class="article__load-btn">載入更多</button>
                </div>
            </div>
        </div>
    </main>
</body>
<link rel="stylesheet" href="./styles/style.css">
</html>