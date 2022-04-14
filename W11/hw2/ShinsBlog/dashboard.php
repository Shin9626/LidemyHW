<?php 
    session_start();
    require_once("conn.php");

    if(empty($_SESSION['username'])) {
        header("location: ./login.html");
        exit();
    }

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
                <div class="nav__item"><a href="">文章列表</a></div>
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
    <main>
        <div class="article__container">
            <form action="./handle_add_article.php" method="POST">
                <div class="article__creater">
                    <h2>寫點文章吧！</h2>
                    <input type="text" name="title" placeholder="文章標題">
                    <textarea name="content" id="" cols="30" rows="10" placeholder="文章內容"></textarea>
                    <button type="submit">新增文章</button>
                </div>
            </form>
            <hr>
            <h2>文章列表</h2>
            <div class="article__box">
                <?php while($row = $result->fetch_assoc()){?>
                    <div class="article__card">
                        <div class="article__card-info">
                            <h3><?php echo $row['title'];?></h3>
                            <span><?php echo $row['created_at'];?></span>
                        </div>
                        <hr>
                        <p class="article__card-content"><?php echo $row['content'];?></p>
                        <div class="article__controller">
                            <button><a href="./edit_article.php?id=<?php echo $row['id'];?>">編輯文章</a></button>
                            <button><a href="./handle_delete_article.php?id=<?php echo $row['id'];?>">刪除文章</a></button>
                        </div>
                    </div>
                <?php }?>
            </div>
        </div>
    </main>
</body>
<link rel="stylesheet" href="./styles/style.css">
<script>
    document.querySelector('.article__creater button').addEventListener('click', (e)=>{
        console.log("clicked!");
    })
</script>
</html>