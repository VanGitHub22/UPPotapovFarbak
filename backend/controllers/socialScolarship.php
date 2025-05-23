<?php
    include '../../connection/connection.php';
    include('../classes/socialScolarship.php');

    $action = $_POST["action"];

    if($action == "get"){
        $id = $_POST['id'];
        echo json_encode(SocialScolarship::Get($id));
    } else if ($action == "add") {

        $scolar = new SocialScolarship((object)$_POST);

        $result = $scolar->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $scolar = new SocialScolarship($id);
        $result = $scolar->Delete();
    }
?>