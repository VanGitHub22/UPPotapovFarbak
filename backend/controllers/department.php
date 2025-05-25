<?php
    include '../../connection/connection.php';
    include('../classes/department.php');



    
    $action = $_POST["action"];
    if($action == "get"){
        echo json_encode(Department::Get());
    } else if ($action == "insert") {
        $department = new Department((object)$_POST);
        $result = $department->Insert();
    } else if ($action == "edit"){
        $department = new Department((object)$_POST);
        $result = $department->Update();
        echo json_encode($result);
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $department = new Department((object)$_POST);
        
        $result = $department->Delete();
        echo json_encode($result);
    }
?>