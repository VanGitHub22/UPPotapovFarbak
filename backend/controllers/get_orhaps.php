<?php
    include '../../connection/connection.php';
    include('../classes/orhaps.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(Orhaps::Get($id));
    } else if ($action == "insert") {
        $orh = new Orhaps((object)$_POST);
        $result = $orh->Insert();
        echo json_encode($result);
    } else if ($action == "delete"){
        $orh = new Orhaps((object)$_POST);
        $result = $orh->Delete();
        echo json_encode($result);
    }else if($action == "edit"){
        $orh = new Orhaps((object)$_POST);
        $result = $orh->Update();
        echo json_encode($result);
    }
?>