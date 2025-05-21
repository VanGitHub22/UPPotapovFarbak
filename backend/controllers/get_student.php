<?php
    include '../../connection/connection.php';
    include('../classes/student.php');
    
    //header('Content-Type: application/json');
    //$data = json_decode(file_get_contents("php://input"),true);

    $action = $_POST["action"];
    if($action == "get"){
        echo json_encode(Student::Get());
    } else if ($action == "getEdit"){
        $id = $_POST['id'];
        $student = Student::GetById($id);
        echo json_encode($student);
        /*$student = new Student($id);
        echo json_encode($student->GetById());*/
    } else if ($action == "add") {
        $student = new Student((object)$_POST);
        $result = $student->Insert();

    } else if ($action == "edit"){
        $student = new Student((object)$_POST);
        $result = $student->Update();
        echo json_encode($result);
        
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $student = new Student((object)$_POST);
        $result = $student->Delete();
        echo json_encode($result);
        
    }
?>