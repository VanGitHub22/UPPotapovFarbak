<?php
Class SocialScolarship{
    public $Id;
    public $Student_id;
    public $OrderNum;
    public $StartDate;
    public $EndDate;
    
    function __construct($params){
        if(isset($params->id)) $this->Id = $params->id; 
        else $this->Id = NULL;
        if(isset($params->student_id)) $this->Student_id = $params->student_id; 
        else $this->$Student_id = NULL;
        if(isset($params->orderNum)) $this->OrderNum = $params->orderNum; 
        else $this->OrderNum = NULL;
        if(isset($params->startDate)) $this->StartDate = $params->startDate; 
        else $this->StartDate = NULL;
        if(isset($params->endDate)) $this->EndDate = $params->endDate; 
        else $this->EndDate = NULL;
    }

    public static function Get($id){
        global $mysqli;
        $ships = [];

        $query = "SELECT * FROM `SocialScolarship` WHERE `student_id`=$id";
        $res = $mysqli ->query($query);
        while($row = mysqli_fetch_array($res)){
            $newships = new SocialScolarship((object) $row);
            array_push($ships, $newships);
        }
        return $ships;
    }

    public function Update(){
        global $mysqli;
        $query = "UPDATE `SocialScolarship` SET `id`='$this->Id', `student_id`='$this->Student_Id', `orderNum`='$this->OrderNum', `startDate`='$this->StartDate',`endDate`='$this->EndDate'";
        $mysqli->query($query);
    }

    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `SocialScolarship` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `SocialScolarship`(`student_id`,`orderNum`,`startDate`,`endDate`) VALUES('$this->Student_Id','$this->OrderNum','$this->StartDate','$this->EndDate') WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
}
?>