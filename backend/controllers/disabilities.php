<?php
    include '../../connection/connection.php';
    include('../classes/disabilities.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(DisabledSt::Get($id));
    } else if ($action == "add") {

        $dis = new DisabledSt((object)$_POST);

        $result = $dis->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $dis = new DisabledSt($id);
        $result = $dis->Delete();
    }
?>