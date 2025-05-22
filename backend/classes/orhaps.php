<?php

class Orhaps{
    public $Id;
    public $Student_id;
    public $OrderNum;
    public $StartDate;
    public $EndDate;
    public $Notes;
    
    function __construct($params){
        if(isset($params->id)) $this->Id = $params->id;
        if(isset($params->student_id)) $this->Student_id = $params->student_id;
        else $this->Student_id = NULL;
        if(isset($params->orderNum)) $this->OrderNum = $params->orderNum;
        else $this->OrderNum = NULL;
        if(isset($params->startDate)) $this->StartDate = $params->startDate;
        else $this->StartDate = NULL;
        if(isset($params->endDate)) $this->EndDate = $params->endDate;
        else $this->EndDate = NULL;
        if(isset($params->notes)) $this->Notes = $params->notes;
        else $this->Notes = NULL;
    }
    
    public static function Get($st_id){
        global $mysqli;
        $orhaps = [];
        
        $query = "SELECT * FROM `Orhaps` WHERE `student_id`=$st_id";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
            $newOrhaps = new Orhaps((object)$row);
            array_push($orhaps, $newOrhaps);
        }
        return $orhaps;
    }
    
    public function Update(){
        global $mysqli;
        $query = "UPDATE `SVO` SET `student_id`='$this->Student_id', `orderNum`=$this->OrderNum, `startDate`='$this->StartDate', `endDate`='$this->EndDate' WHERE `id`=$this->Id";
        $mysqli->query($query);
    } 
    
    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `SVO` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
    
    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `SVO`(`student_id`, `orderNum`, `startDate`, `endDate`) VALUES('$this->Student_id', $this->OrderNum', '$this->StartDate', '$this->EndDate')";
        $mysqli->query($query);
    }
    
}

?>