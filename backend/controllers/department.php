<?php
    include '../../connection/connection.php';
    include('../classes/department.php');

    $action = $_POST["action"];

    $Response = array();

    if($action == "get"){
        $Response["Departments"] = Department::Get();
    } else if ($action == "add") {
        $id = $_POST['id'];
        $name = $_POST['name'];

        $department = new Department($id, $name);

        $result = $department->Insert();
    } else if ($action == "edit"){
        $id = $_POST['id'];
        $name = $_POST['name'];

        $department = new Department($id, $name);

        $result = $department->Update();
        
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $department = new Department($id);
        $result = $department->Delete();
    }else{
        $response["error"] = "не указан action для контроллера";
    }

    echo json_encode($Response);
?>