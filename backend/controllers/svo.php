<?php
    include '../../connection/connection.php';
    include('../classes/svo.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Svo::Get());
    } else if ($action == "add") {
        $id = $_POST['id'];
        $student_id = $_POST['student_id'];
        $orderNum = $_POST['orderNum'];
        $startDate = $_POST['startDate'];
        $endDate = $_POST['endDate'];

        $svos = new Svo($id, $student_id, $orderNum, $startDate, $endDate);

        $result = $svos->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $svos = new Svo($id);
        $result = $svos->Delete();
    }
?>