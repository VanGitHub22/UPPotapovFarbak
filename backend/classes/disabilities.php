<?php
Class DisabledSt{
    public $Id;
    public $Student_Id;
    public $OrderNum;
    public $StartDate;
    public $EndDate;
    public $DisabilityType;
    public $Notes;
    
    function __construct($params){
        if(isset($params->id)) $this->Id = $params->id; 
        else $this->Id = NULL;
        if(isset($params->student_id)) $this->Student_Id = $params->student_id; 
        else $this->Student_Id = NULL;
        if(isset($params->orderNum)) $this->OrderNum = $params->orderNum; 
        else $this->OrderNum = NULL;
        if(isset($params->startDate)) $this->StartDate = $params->startDate; 
        else $this->StartDate = NULL;
        if(isset($params->endDate)) $this-> EndDate = $params->endDate; 
        else $this->EndDate = NULL;
        if(isset($params->disabilityType)) $this-> DisabilityType = $params->disabilityType; 
        else $this->DisabilityType = NULL;
        if(isset($params->notes)) $this-> Notes = $params->notes; 
        else $this->Notes = NULL;
    }

    public static function Get($id){
        global $mysqli;
        $disables = [];

        $query = "SELECT * FROM `DisabledSt` WHERE `student_id`='$id'";
        $res = $mysqli ->query($query);
        while($row = mysqli_fetch_array($res)){
            $newDisability = new DisabledST((object)$row);
            array_push($disables, $newDisability);
        }
        return $disables;
    }

    public function Update(){
        global $mysqli;
        $query = "UPDATE `DisabledSt` SET `orderNum`='$this->OrderNum', `startDate`='$this->StartDate',`endDate`='$this->EndDate',`disabilityType`='$this->DisabilityType', `notes`='$this->Notes' WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `DisabledSt` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `DisabledSt`(`student_id`,`orderNum`,`startDate`,`endDate`,`disabilityType`, `notes`) VALUES ('$this->Student_Id','$this->OrderNum','$this->StartDate','$this->EndDate','$this->DisabilityType','$this->Notes')";
        $mysqli->query($query);
    }
}
?>