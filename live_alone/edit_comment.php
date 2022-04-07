<?php  
    require_once('conn.php');
    require_once('utils.php');

    $id = $_GET['id'];
    
    $stmt = $conn->prepare("SELECT * FROM comments WHERE id=?");
    $stmt->bind_param('s', $id);
    $result = $stmt->execute();
    $row = $stmt->get_result()->fetch_assoc();
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
            編輯留言
        </div>  
        <form method="POST" action="./handle_update_comment.php" class="board__form" name="content"> 
                <div>
                    <textarea id="board__text" rows="10" name="content"><?php echo $row['content']; ?></textarea>
                    <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                </div>
                <div class="board__submit-box">
                    <input type="submit" value="送出" class="board__btn board__submit-btn">
                </div>
        </form>
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

        } else document.querySelector('.board__form[name=content]').submit();
    })
</script>

</html>