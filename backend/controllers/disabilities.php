<?php
    include '../../connection/connection.php';
    include('../classes/disabilities.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(DisabledSt::Get());
    } else if ($action == "add") {

        $dis = new DisabledSt($_POST);

        $result = $dis->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $dis = new DisabledSt($id);
        $result = $dis->Delete();
    }
?>