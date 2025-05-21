<?php
    include '../../connection/connection.php';
    include('../classes/socialScolarship.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(SocialScolarship::Get());
    } else if ($action == "add") {

        $scolar = new SocialScolarship((object)$_POST);

        $result = $scolar->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $scolar = new SocialScolarship($id);
        $result = $scolar->Delete();
    }
?>