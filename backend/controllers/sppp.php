<?php
    include '../../connection/connection.php';
    include('../classes/sppp.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(SPPP::Get($id));
    } else if ($action == "add") {

        $sppp = new SPPP((object)$_POST);

        $result = $sppp->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $sppp = new SPPP($id);
        $result = $sppp->Delete();
        echo json_encode($result);
    }else if($action == "edit"){
        $sppp = new SPPP((object)$_POST);
        $result = $sppp->Update();
        echo json_encode($result);
    }
?>