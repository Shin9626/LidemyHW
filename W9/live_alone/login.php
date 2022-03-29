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
            Sign In
        </div>
        <div><?php if(!empty($_GET['err'])){
            switch($_GET['err']){
                case '1011':  { echo "帳號或密碼有誤";break;}
                case '1234':  { echo "請填妥空格";break;}
                default: break;
            }}?></div>
        <form method="POST" action="./handle_login.php" class="board__form">
            <div class="board__username">
                帳號： <input type="text" name="username" class="board__input">
            </div>
            <div class="board__password">
                密碼： <input type="password" name="password" class="board__input">
            </div>
            <div class="board__submit-box">
                <input type="submit" value="登入" class="board__submit-btn">
            </div>
        </form>
        <div class="board__hr"></div>
    </main>
</body>

</html>