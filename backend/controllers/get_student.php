<?php
    include '../../connection/connection.php';
    include('../classes/student.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Student::Get());
    } else if ($action == "add") {
        //$NewStudent = new Student((object)$_POST[])
    }
?>