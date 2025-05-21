<?php
    include '../../connection/connection.php';
    include('../classes/riskGroup.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(RiskGroup::Get());
    } else if ($action == "add") {
        $id = $_POST['id'];
        $student_id = $_POST['student_id'];
        $orderNum = $_POST['orderNum'];
        $type = $_POST['type'];
        $registrationDate = $_POST['registrationDate'];
        $removalDate = $_POST['removalDate'];
        $reason = $_POST['reason'];
        $removalReason = $_POST['removalReason'];
        $notes = $_POST['notes'];

        $risk = new RiskGroup($id, $student_id, $orderNum, $type, $registrationDate, $removalDate, $reason, $removalReason, $notes);

        $result = $risk->Insert();
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $risk = new RiskGroup($id);
        $result = $risk->Delete();
    }
?>