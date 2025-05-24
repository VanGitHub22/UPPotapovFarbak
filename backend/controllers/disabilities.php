<?php
    include '../../connection/connection.php';
    include('../classes/disabilities.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(DisabledSt::Get($id));
    } else if ($action == "insert") {
        $disabledSt = new DisabledSt((object)$_POST);
        $result = $disabledSt->Insert();
        echo json_encode($result);
    } else if ($action == "delete"){
        $disabledSt = new DisabledSt((object)$_POST);
        $result = $disabledSt->Delete();
        echo json_encode($result);
    }else if($action == "edit"){
        $disabledSt = new DisabledSt((object)$_POST);
        $result = $disabledSt->Update();
        echo json_encode($result);
    }
?>