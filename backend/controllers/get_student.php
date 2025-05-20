<?php
    include '../../connection/connection.php';
    include('../classes/student.php');

    $action = $_POST["action"];

    if($action == "get"){
        echo json_encode(Student::Get());
    } else if ($action == "add") {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $lastName = $_POST['lastName'];
        $firstName = $_POST['firstName'];
        $middleName = $_POST['middleName'];
        $birthDay = $_POST['birthDay'];
        $gender = $_POST['gender'];
        $phone = $_POST['phone'];
        $education = $_POST['education'];
        $department_Id = $_POST['department_Id'];
        $group = $_POST['group'];
        $funding = $_POST['funding'];
        $admissionYear = $_POST['admissionYear'];
        $graduationYear = $_POST['graduationYear'];
        $isExpelled = $_POST['isExpelled'];
        $expulsionDate = $_POST['expulsionDate'];
        $parent_info = $_POST['parent_info'];
        $penalties = $_POST['penalties'];

        $student = new Student($id, $lastName, $firstName, $middleName, $birthDay, $gender, $phone, $education, $department_Id, $group, $funding, $admissionYear, $graduationYear, $isExpelled, $expulsionDate, $parent_info, $penalties);

        $result = $student->Insert();
    } else if ($action == "edit"){
        $id = $_POST['id'];
        $name = $_POST['name'];
        $lastName = $_POST['lastName'];
        $firstName = $_POST['firstName'];
        $middleName = $_POST['middleName'];
        $birthDay = $_POST['birthDay'];
        $gender = $_POST['Gender'];
        $phone = $_POST['Phone'];
        $education = $_POST['Education'];
        $department_Id = $_POST['Department_Id'];
        $group = $_POST['Group'];
        $funding = $_POST['Funding'];
        $admissionYear = $_POST['AdmissionYear'];
        $graduationYear = $_POST['GraduationYear'];
        $isExpelled = $_POST['IsExpelled'];
        $expulsionDate = $_POST['ExpulsionDate'];
        $parent_info = $_POST['Parent_info'];
        $penalties = $_POST['Penalties'];

        $student = new Student($id, $lastName, $firstName, $middleName, $birthDay, $gender, $phone, $education, $department_Id, $group, $funding, $admissionYear, $graduationYear, $isExpelled, $expulsionDate, $parent_info, $penalties);

        $result = $student->Edit();
        
    } else if ($action == "delete"){
        $id = $_POST['id'];
        $student = new Student($id);
        $result = $student->Delete();
    }
?>