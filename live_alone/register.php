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
        <div class="board__title">
            Sign up
        </div>
        <div><?php if(!empty($_GET['err'])){
            switch($_GET['err']){
                case '1062':  { echo "該帳號已註冊";}
                case '1234':  { echo "請填妥空格";}
                default: break;
            }}?></div>
        <form method="POST" action="./handle_register.php" class="board__form">
            <div>
                暱稱： <input type="text" name="nickname" class="board__input">
            </div>
            <div class="board__username">
                帳號： <input type="text" name="username" class="board__input">
            </div>
            <div class="board__password">
                密碼： <input type="password" name="password" class="board__input">
            </div>
            <div class="board__submit-box">
                如果您已經有會員帳號，請<a href="./login.php">按此登入</a>
                <input type="submit" value="註冊" class="board__submit-btn">
            </div>
        </form>
        <div class="board__hr"></div>
    </main>
</body>
<script>
    /*document.querySelector('.board__submit-btn').addEventListener('click', (e) => {
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
    })*/
</script>

</html>