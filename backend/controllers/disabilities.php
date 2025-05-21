<?php
    include '../../connection/connection.php';
    include('../classes/disabilities.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(DisabledSt::Get());
    } else if ($action == "add") {
        $id = $_POST['id'];
        $student_id = $_POST['student_id'];
        $orderNum = $_POST['orderNum'];
        $startDate = $_POST['startDate'];
        $endDate = $_POST['endDate'];
        $disabilityType = $_POST['disabilityType'];
        $notes = $_POST['notes'];

        $dis = new DisabledSt($id, $student_id, $orderNum, $startDate, $endDate, $disabilityType, $notes);

        $result = $dis->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $dis = new DisabledSt($id);
        $result = $dis->Delete();
    }
?>