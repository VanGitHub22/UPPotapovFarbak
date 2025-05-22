<?php
    include '../../connection/connection.php';
    include('../classes/dormitory.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Dormitory::Get());
    } else if ($action == "add") {

        $dorm = new Dormitory((object)$_POST);

        $result = $dorm->Insert();
    } else if ($action == "edit"){

        $dorm = new Dormitory((object)$_POST);

        $result = $dorm->Update();
        
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $dorm = new Dormitory($id);
        $result = $dorm->Delete();
    }
?>