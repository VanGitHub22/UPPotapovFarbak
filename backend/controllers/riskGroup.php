<?php
    include '../../connection/connection.php';
    include('../classes/riskGroup.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(RiskGroup::Get($id));
    } else if ($action == "add") {

        $risk = new RiskGroup((object)$_POST);

        $result = $risk->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $risk = new RiskGroup($id);
        $result = $risk->Delete();
    }
?>