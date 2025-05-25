<?php
    include '../../connection/connection.php';
    include('../classes/riskGroup.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(RiskGroup::Get($id));
    } else if ($action == "insert") {
        $risk = new RiskGroup((object)$_POST);
        $result = $risk->Insert();
        echo json_encode($result);
    } else if ($action == "delete"){
        $risk = new RiskGroup((object)$_POST);
        $result = $risk->Delete();
        echo json_encode($result);
    }else if($action == "edit"){
        $risk = new RiskGroup((object)$_POST);
        $result = $risk->Update();
        echo json_encode($result);
    }
?>