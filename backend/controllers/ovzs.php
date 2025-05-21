<?php
    include '../../connection/connection.php';
    include('../classes/ovzs.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(OVZS::Get());
    } else if ($action == "add") {
        $id = $_POST['id'];
        $student_id = $_POST['student_id'];
        $orderNum = $_POST['orderNum'];
        $startDate = $_POST['startDate'];
        $endDate = $_POST['endDate'];
        $notes = $_POST['notes'];

        $ovz = new OVZS($id, $student_id, $orderNum, $startDate, $endDate, $notes);

        $result = $ovz->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $ovz = new OVZS($id);
        $result = $ovz->Delete();
    }
?>