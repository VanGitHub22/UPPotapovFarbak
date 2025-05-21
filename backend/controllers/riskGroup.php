<?php
    include '../../connection/connection.php';
    include('../classes/riskGroup.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(RiskGroup::Get());
    } else if ($action == "add") {

        $risk = new RiskGroup((object)$_POST);

        $result = $risk->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $risk = new RiskGroup($id);
        $result = $risk->Delete();
    }
?>