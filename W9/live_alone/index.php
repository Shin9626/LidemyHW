<?php
require_once('conn.php');
$result = $conn->query('SELECT * FROM comments ORDER BY created_at DESC');
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
                <div class="board__login">
                    <a href="./register.php">會員登入/註冊</a>
                </div>
            </div>
            <div>
                暱稱： <input type="text" name="nickname" class="board__input">
            </div>
            <div>
                <textarea id="board__content" rows="10" name="content"></textarea>
            </div>
            <div class="board__submit-box">
                <input type="submit" value="送出" class="board__submit-btn">
            </div>
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
        let nickname = document.querySelector('input[name=nickname]').value;
        let content = document.querySelector('textarea[name=content]').value;
        console.log(content);

        if (nickname == "" || content == "") {
            let warning = document.createElement('span');
            warning.innerText = '暱稱或留言內容不可為空白';
            warning.classList.add('warning');

            if (!document.querySelector('.warning')) {
                document.querySelector('.board__submit-box').insertBefore(warning, document.querySelector('.board__submit-btn'));
            }

        } else document.querySelector('.board__form').submit();
    })
</script>

</html>