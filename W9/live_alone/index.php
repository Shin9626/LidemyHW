<?php
    require_once('conn.php');
    $result = $conn->query('SELECT * FROM comments ORDER BY created_at DESC');
    $username = NULL;
    
    // catch cookie
    if(!empty($_COOKIE)) $username = $_COOKIE['username'];
    // set nickname
    $user = $conn->query("SELECT nickname FROM users WHERE username='$username'")->fetch_assoc();
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
        <form method="POST" action="./handle_add_comment.php" class="board__form">
            <div class="board__title">
                Comments
                <?php if(!$username) { ?>
                    <div class="board__login">
                        <a href="./register.php">登入/註冊</a>
                    </div>
                <?php } else {?>
                <?php ?>
                    <div class="board__login">
                        <a href="./logout.php">登出</a>
                    </div>
                <?php } ?>
            </div>
            <div>
                <?php if($username) {echo " 嗨，". $user['nickname'] . "，今天想說些什麼呢";} ?>
            </div>
            <?php if($username) { ?>
                <div>
                    <textarea id="board__text" rows="10" name="content"></textarea>
                </div>
                <div class="board__submit-box">
                    <input type="submit" value="送出" class="board__submit-btn">
                </div>
            <?php } else {?>
                <div class="board__default">
                    登入後即可發布留言
                </div>
            <?php } ?>
        </form>
        <div class="board__hr"></div>
        <section>
            <?php while ($row = $result->fetch_assoc()) { ?>
                <div class="card">
                    <div class="card__img"></div>
                    <div class="card__body">
                        <div class="card__info">
                            <span class="card__author"><?php echo $row['nickname']; ?></span>
                            <span class="card__time"><?php echo $row['created_at']; ?></span>
                        </div>
                        <div class="card__content"><?php echo $row['content']; ?></div>
                    </div>
                </div>
            <?php } ?>
        </section>
    </main>
</body>
<script>
    document.querySelector('.board__submit-btn').addEventListener('click', (e) => {
        e.preventDefault();
        let content = document.querySelector('textarea[name=content]').value;
        console.log(content);

        if (content == "") {
            let warning = document.createElement('span');
            warning.innerText = '留言內容不可為空白';
            warning.classList.add('warning');

            if (!document.querySelector('.warning')) {
                document.querySelector('.board__submit-box').insertBefore(warning, document.querySelector('.board__submit-btn'));
            }

        } else document.querySelector('.board__form').submit();
    })
</script>

</html>