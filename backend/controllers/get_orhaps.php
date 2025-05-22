<?php
    include '../../connection/connection.php';
    include('../classes/orhaps.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(Orhaps::Get($id));
    } else if ($action == "add") {

        $svos = new Orhaps((object)$_POST);

        $result = $svos->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $svos = new Orhapso($id);
        $result = $svos->Delete();
    }
?>