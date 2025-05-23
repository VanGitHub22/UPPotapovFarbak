<?php
    include '../../connection/connection.php';
    include('../classes/dormitory.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Dormitory::Get());
    } else if ($action == "getById") {
        $id = $_POST['id'];
        echo json_encode(Dormitory::GetById($id));
    }else if ($action == "add") {

        $dorm = new Dormitory((object)$_POST);

        $result = $dorm->Insert();
    } else if ($action == "edit"){

        $dorm = new Dormitory((object)$_POST);

        $result = $dorm->Update();
        echo json_encode($result);
        
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $dorm = new Dormitory((object)$_POST);
        
        $result = $dorm->Delete();
        echo json_encode($result);
    }
?>