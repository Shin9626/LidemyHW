<?php
    require_once('conn.php');

    header('Content-Type: application/x-www-form-urlencoded; charset=UTF-8'); 
    header('Access-Control-Allow-Origin: *');


    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(empty($_GET['id'])){
            $content = json_encode($_POST['data'], JSON_UNESCAPED_UNICODE);
        
            $stmt = $conn->prepare("INSERT INTO todos(content) VALUES(?)");
            $stmt->bind_param('s', $content);
            $result = $stmt->execute();

            $stmt = $conn->prepare("SELECT id FROM todos WHERE content=?");
            $stmt->bind_param('s', $content);
            $result = $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();
            echo $row['id'];
        } else {
            $id = $_GET['id'];

            $content = json_encode($_POST['data'], JSON_UNESCAPED_UNICODE);
        
            $stmt = $conn->prepare("UPDATE todos SET content=? WHERE id=?");
            $stmt->bind_param('si', $content, $id);
            $result = $stmt->execute();

            echo $id;
        }             
    }
    
    if($_SERVER['REQUEST_METHOD'] == 'GET' && !empty($_GET['id'])){
        $id = $_GET['id'];

        $stmt = $conn->prepare("SELECT content FROM todos WHERE id=?");
        $stmt->bind_param('s', $id);
        $result = $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        echo json_decode($row['content']);
    }
?>
