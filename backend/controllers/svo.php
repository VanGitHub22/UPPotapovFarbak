<?php
    include '../../connection/connection.php';
    include('../classes/svo.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(Svo::Get($id));
    } else if ($action == "insert") {
        $svos = new Svo((object)$_POST);
        $result = $svos->Insert();
        echo json_encode($result);
    } else if ($action == "delete"){
        $svos = new Svo((object)$_POST);
        $result = $svos->Delete();
        echo json_encode($result);
    } else if ($action == "edit"){
        $svos = new Svo((object)$_POST);
        $result = $svos->Update();
        echo json_encode($result);
    }
?>