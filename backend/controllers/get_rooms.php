<?php
    include '../../connection/connection.php';
    include('../classes/rooms.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Rooms::Get());
    } else if ($action == "insert") {
        $orh = new Rooms((object)$_POST);
        $result = $orh->Insert();
        echo json_encode($result);
    } else if ($action == "delete"){
        $orh = new Rooms((object)$_POST);
        $result = $orh->Delete();
        echo json_encode($result);
    }else if($action == "edit"){
        $orh = new Rooms((object)$_POST);
        $result = $orh->Update();
        echo json_encode($result);
    }
?>