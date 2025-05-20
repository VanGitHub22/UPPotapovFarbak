<?php
    include '../../connection/connection.php';
    include('../classes/dormitory.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Dormitory::Get());
    } else if ($action == "add") {
        $id = $_POST['id'];
        $student_id = $_POST['student_id'];
        $room_id = $_POST['room_id'];
        $orderNum = $_POST['orderNum'];
        $checkInDate = $_POST['checkInDate'];
        $checkOutDate = $_POST['checkOutDate'];
        $notes = $_POST['notes'];

        $dorm = new Dormitory($id, $student_id, $room_id, $orderNum, $checkInDate, $checkOutDate, $notes);

        $result = $dorm->Insert();
    } else if ($action == "edit"){
        $id = $_POST['id'];
        $student_id = $_POST['student_id'];
        $room_id = $_POST['room_id'];
        $orderNum = $_POST['orderNum'];
        $checkInDate = $_POST['checkInDate'];
        $checkOutDate = $_POST['checkOutDate'];
        $notes = $_POST['notes'];

        $dorm = new Dormitory($id, $student_id, $room_id, $orderNum, $checkInDate, $checkOutDate, $notes);

        $result = $dorm->Update();
        
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $dorm = new Dormitory($id);
        $result = $dorm->Delete();
    }
?>