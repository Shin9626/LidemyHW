<?php 
    session_start();
    require_once("conn.php");

    if(empty($_SESSION['username'])) {
        header("location: ./login.html");
        exit();
    }

    $username = $_SESSION['username'];
    $id = $_GET['id'];

    $stmt = $conn->prepare("SELECT * FROM articles WHERE id=? AND username=? ");
    $stmt->bind_param("ss", $id, $username);
    $result = $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
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
                <div class="nav__item"><a href="">文章管理</a></div>
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
            <form action="./handle_edit_article.php?id=<?php echo $id;?>" method="POST">
                <div class="article__creater">
                    <h2>寫點文章吧！</h2>
                    <input type="text" name="title" placeholder="文章標題" value="<?php echo $row['title'];?>">
                    <textarea name="content" id="" cols="30" rows="10" placeholder="文章內容"><?php echo $row['content'];?></textarea>
                    <button type="submit">送出文章</button>
                </div>
            </form>
            <hr>
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