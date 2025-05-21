<?php

class SPPP{
    public $Id;
    public $Student_id;
    public $OrderNum
    public $DateSppp;
    public $Reason;
    public $AttendedStaff;
    public $AttendedRepres;
    public $Decision;
    public $Notes;
    
    public __construct($params){
        if(isset($params->id)) $this->Id = $params->id;
        if(isset($params->student_id)) $this->Student_id = $params->student_id;
        else $this->Student_id = NULL;
        if(isset($params->orderNum)) $this->OrderNum = $params->orderNum;
        else $this->OrderNum = NULL;
        if(issetS($params->dateSppp)) $this->DateSppp = $params->dateSppp;
        else $this->DateSppp = NULL;
        if(isset($params->reason)) $this->Reason = $params->reason;
        else $this->Reason = NULL;
        if(isset($params->attendedStaff)) $this->AttendedStaff = $params->attendedStaff;
        else $this->AttendedStaff = NULL;
        if(isset($params->attendedRepres)) $this->AttendedRepres = $params->attendedRepres;
        else $this->AttendedRepres = NULL;
        if(isset($params->decision)) $this->Decision = $params->decision;
        else $this->Decision = NULL;
        if(isset($params->notes)) $this->Notes = $params->notes;
        else $this->Notes = NULL;
    }
    
    public static function Get(){
        global $mysqli;
        $sppp = [];
        
        $query = "SELECT * FROM `SPPP`";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
            $newSppp = new SPPP((object)$row);
            array_push($sppp, $newSppp);
        }
        
    }
    
    public function Update(){
        global $mysqli;
        $query = "UPDATE `SPPP` SET `student_id`='$this->Student_id', `dateSppp`=$this->DateSppp, `reason`='$this->Reason', `attendedStaff`='$this->AttendedStaff', `attendedRepres`='$this->AttendedRepres', `decision`='$this->Decision', `notes`='$this->Notes' WHERE `id`=$this->Id";
        $mysqli->query($query);
    } 
    
    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `SPPP` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
    
    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `Errors`(`student_id`, `dateSppp`, `reason`, `attendedStaff`, `attendedRepres`, `decision`, `notes`) VALUES('$this->Student_id', '$this->DateSppp', '$this->Reason', '$this->AttendedStaff', '$this->AttendedRepres', '$this->Decision', '$this->Notes')";
        $mysqli->query($query);
    }
    
}

?>