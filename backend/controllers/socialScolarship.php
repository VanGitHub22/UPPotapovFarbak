<?php
    include '../../connection/connection.php';
    include('../classes/socialScolarship.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(SocialScolarship::Get($id));
    } else if ($action == "insert") {
        $scol = new SocialScolarship((object)$_POST);
        $result = $scol->Insert();
        echo json_encode($result);
    } else if ($action == "delete"){
        $scol = new SocialScolarship((object)$_POST);
        $result = $scol->Delete();
        echo json_encode($result);
    }else if($action == "edit"){
        $scol = new SocialScolarship((object)$_POST);
        $result = $scol->Update();
        echo json_encode($result);
    }
?>