<?php
    include '../../connection/connection.php';
    include('../classes/ovzs.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(OVZS::Get($id));
    } else if ($action == "add") {

        $ovz = new OVZS((object)$_POST);

        $result = $ovz->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $ovz = new OVZS($id);
        $result = $ovz->Delete();
    }
?>