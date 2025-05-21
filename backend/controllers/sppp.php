<?php
    include '../../connection/connection.php';
    include('../classes/sppp.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(SPPP::Get());
    } else if ($action == "add") {
        $id = $_POST['id'];
        $student_id = $_POST['student_id'];
        $orderNum = $_POST['orderNum'];
        $dateSppp = $_POST['dateSppp'];
        $reason = $_POST['reason'];
        $attendedStaff = $_POST['attendedStaff'];
        $attendedRepres = $_POST['attendedRepres'];
        $decision = $_POST['decision'];
        $notes = $_POST['notes'];

        $sppp = new SPPP($id, $student_id, $orderNum, $dateSppp, $reason, $attendedStaff, $attendedRepres, $decision, $notes);

        $result = $sppp->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $sppp = new SPPP($id);
        $result = $sppp->Delete();
    }
?>