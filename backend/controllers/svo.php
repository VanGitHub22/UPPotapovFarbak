<?php
    include '../../connection/connection.php';
    include('../classes/svo.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Svo::Get());
    } else if ($action == "add") {

        $svos = new Svo((object)$_POST);

        $result = $svos->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $svos = new Svo($id);
        $result = $svos->Delete();
    }
?>