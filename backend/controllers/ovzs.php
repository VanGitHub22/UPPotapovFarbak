<?php
    include '../../connection/connection.php';
    include('../classes/ovzs.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(OVZS::Get($id));
    } else if ($action == "insert") {
        $ovz = new OVZS((object)$_POST);
        $result = $ovz->Insert();
        echo json_encode($result);
    } else if ($action == "delete"){
        $ovz = new OVZS((object)$_POST);
        $result = $ovz->Delete();
        echo json_encode($result);
    }else if($action == "edit"){
        $ovz = new OVZS((object)$_POST);
        $result = $ovz->Update();
        echo json_encode($result);
    }
?>