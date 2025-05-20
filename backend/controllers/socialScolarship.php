<?php
    include '../../connection/connection.php';
    include('../classes/socialScolarship.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(SocialScolarship::Get());
    } else if ($action == "add") {
        $id = $_POST['id'];
        $student_id = $_POST['student_id'];
        $orderNum = $_POST['orderNum'];
        $startDate = $_POST['startDate'];
        $endDate = $_POST['endDate'];

        $scolar = new SocialScolarship($id, $student_id, $orderNum, $type, $startDate, $endDate);

        $result = $scolar->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $scolar = new SocialScolarship($id);
        $result = $scolar->Delete();
    }
?>