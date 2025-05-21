<?php
    include '../../connection/connection.php';
    include('../classes/sppp.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(SPPP::Get());
    } else if ($action == "add") {

        $sppp = new SPPP((object)$_POST);

        $result = $sppp->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $sppp = new SPPP($id);
        $result = $sppp->Delete();
    }
?>