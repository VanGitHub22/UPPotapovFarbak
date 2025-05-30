<?php
class Student{
    public $Id;
    public $LastName;
    public $FirstName;
    public $MiddleName;
    public $BirthDate;
    public $Gender;
    public $Phone;
    public $Education;
    public $Department_Id;
    public $Group;
    public $Funding;
    public $AdmissinYear;
    public $GraduationYear;
    public $IsExpelled;
    public $ExpulsionDate;
    public $Parent_info;
    public $Penalties;
    public $Notes;
    
    function __construct($params) {
        if(isset($params->id) && $params->id != '') $this->Id = $params->id;
        if(isset($params->lastName) && $params->lastName != '') $this->LastName = $params->lastName;
        else $this->LastName = NULL;
        if(isset($params->firstName) && $params->firstName != '') $this->FirstName = $params->firstName;
        else $this->FirstName = NULL;
        if(isset($params->middleName) && $params->middleName != '') $this->MiddleName = $params->middleName;
        else $this->MiddleName = NULL;
        if(isset($params->birthDate) && $params->birthDate != '') $this->BirthDate = $params->birthDate;
        else $this->BirthDate = NULL;
        if(isset($params->gender) && $params->gender != '') $this->Gender = $params->gender;
        else $this->Gender = NULL;
        if(isset($params->phone) && $params->phone != '') $this->Phone = $params->phone;
        else $this->Phone = NULL;
        if(isset($params->education) && $params->education != '') $this->Education = $params->education;
        else $this->Education = NULL;
        if(isset($params->department_Id) && $params->department_Id != '') $this->Department_Id = $params->department_Id;
        else $this->Department_Id = NULL;
        if(isset($params->group) && $params->group != '') $this->Group = $params->group;
        else $this->Group = NULL;
        if(isset($params->funding) && $params->funding != '') $this->Funding = $params->funding;
        else $this->Funding = NULL;
        if(isset($params->admissionYear) && $params->admissionYear != '') $this->AdmissionYear = $params->admissionYear;
        else $this->AdmissionYear = NULL;
        if(isset($params->graduationYear) && $params->graduationYear != '') $this->GraduationYear = $params->graduationYear;
        else $this->GraduationYear = NULL;
        if(isset($params->isExpelled) && $params->isExpelled != '') $this->IsExpelled = $params->isExpelled;
        else $this->IsExpelled = NULL;
        if(isset($params->expulsionDate) && $params->expulsionDate != '') $this->ExpulsionDate = $params->expulsionDate;
        else $this->ExpulsionDate = NULL;
        if(isset($params->parent_info) && $params->parent_info != '') $this->Parent_info = $params->parent_info;
        else $this->Parent_info = NULL;
        if(isset($params->penalties) && $params->penalties != '') $this->Penalties = $params->penalties;
        else $this->Penalties = NULL;
        if(isset($params->notes) && $params->notes != '') $this->Notes = $params->notes;
        else $this->Notes = NULL;
    }
    
    public static function Get() {
        global $mysqli;
        $students = [];

        $query = "SELECT * FROM `Students`";
        $res = $mysqli->query($query);
        while ($row = $res->fetch_assoc()) {
            $students[] = new Student((object)$row);
        }
        return $students;
    }

    public static function GetById($id){
        global $mysqli;
        $students = [];
        $query = "SELECT * FROM `Students` WHERE `id`='$id'";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
            $newStudent = new Student((object)$row);
            array_push($students, $newStudent);
        }
        return $students;  
    }

    public function Update(){
        global $mysqli;

        $query = "UPDATE `Students` 
            SET `lastName`='$this->LastName', 
            `firstName`='$this->FirstName',
            `middleName`='$this->MiddleName', 
            `birthDate`='$this->BirthDate', 
            `gender`='$this->Gender', 
            `phone`='$this->Phone', 
            `education`='$this->Education', 
            `department_Id`=$this->Department_Id, 
            `group`='$this->Group', 
            `funding`='$this->Funding', 
            `admissionYear`='$this->AdmissionYear', 
            `graduationYear`='$this->GraduationYear', 
            `isExpelled`='$this->IsExpelled', 
            `expulsionDate`='$this->ExpulsionDate', 
            `parent_Info`='$this->Parent_info', 
            `penalties`='$this->Penalties', 
            `notes`='$this->Notes' 
            WHERE `id`=$this->Id";

        echo $query;
        $mysqli->query($query);
    } 
    
    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `Students` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
    
    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `Students`(`lastName`, `firstName`, `middleName`, `birthDate`, `gender`, `phone`, `education`, `department_id`, `group`, `funding`, `admissionYear`, `graduationYear`, `isExpelled`, `expulsionDate`, `parent_Info`, `penalties`, `notes`) VALUES('$this->LastName', '$this->FirstName', '$this->MiddleName', '$this->BirthDate', '$this->Gender', '$this->Phone', '$this->Education', '$this->Department_Id', '$this->Group', '$this->Funding', '$this->AdmissionYear', $this->GraduationYear, '$this->IsExpelled', $this->ExpulsionDate, '$this->Parent_info', '$this->Penalties', '$this->Notes')";
        $mysqli->query($query);
    }
}
?>