<?php  
    require_once('conn.php');
    require_once('utils.php');

    $username = NULL;
    if(!empty($_SESSION['username'])){
        // set username
        $user = GetUserFromUsername($_SESSION['username']);
        $username = $user['username'];      
    }

    // get comments
    $stmt = $conn->prepare(
        'SELECT '. 
            'C.id as id, '.
            'C.content as content, '.
            'C.created_at as created_at, '.
            'U.nickname as nickname, '.
            'C.username as username '.
        'FROM comments as C '. 
        'LEFT JOIN users AS U ON C.username = U.username '.
        'ORDER BY C.created_at DESC'
    );
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
            Comments
            <?php if(!$username) { ?>
                <div class="board__btn board__login ">
                    <a href="./register.php">登入/註冊</a>
                </div>
            <?php } else {?>
            <?php ?>
                <div class="board__btn board__login">
                    <a href="./logout.php">登出</a>
                </div>
            <?php } ?>
        </div>
        <?php if($username) {echo " 嗨，". $user['nickname'] . "，今天想說些什麼呢？";} ?>
            <div class="form__box">
                <form method="POST" action="./handle_edit_nickname.php" class="board__form">
                    <div><input type="text" class="board__edit hide"  name="nickname"></div>    
                    <div><input type="submit" value="編輯暱稱" class="board__btn edit-btn hide"></div>   
                </form>
            </div>    
            <form method="POST" action="./handle_add_comment.php" class="board__form" name="comment"> 
            <?php if($username) { ?>
                <div>
                    <textarea id="board__text" rows="10" name="content"></textarea>
                </div>
                <div class="board__submit-box">
                    <input type="submit" value="送出" class="board__btn board__submit-btn">
                </div>
            </form>
        <?php } else {?>
            <div class="board__default">
                登入後即可發布留言
            </div>
        <?php } ?>
        
        <div class="board__hr"></div>
        
        <section>
            <?php while ($row = $result->fetch_assoc()) {?>
                <div class="card">
                    <div class="card__img"></div>
                    <div class="card__body">
                        <div class="card__info">
                            <span class="card__author"><?php echo Escape($row['nickname'] . '(@' . $row['username'] . ')'); ?></span>
                            <span class="card__time"><?php echo Escape($row['created_at']); ?></span>
                            <?php if($row['username'] == $_SESSION['username']) {?>
                                <a href="./edit_comment.php?id=<?php echo $row['id']?>">編輯</a>
                            <?php }?>
                        </div>
                        <div class="card__content"><?php echo Escape($row['content']); ?></div>
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

        } else document.querySelector('.board__form[name=comment]').submit();
    })

    while(document.querySelector('textarea') && document.querySelector('.hide')){
        document.querySelector('.hide').classList.remove('hide');
    }
</script>

</html>