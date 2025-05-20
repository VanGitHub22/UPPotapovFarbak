<?php
    include '../../connection/connection.php';
    include('../classes/department.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Department::Get());
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
    }
?>