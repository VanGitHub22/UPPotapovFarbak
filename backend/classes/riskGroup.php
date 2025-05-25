<?php
Class RiskGroup{
    public $Id;
    public $Student_Id;
    public $OrderNum;
    public $Type;
    public $RegistrationDate;
    public $RemovalDate;
    public $Reason;
    public $RemovalReason;
    public $Notes;
    
    function __construct($params){
        if(isset($params->id)) $this->Id = $params->id; 
        else $this->Id = NULL;
        if(isset($params->student_id)) $this->Student_Id = $params->student_id; 
        else $this->Student_Id = NULL;
        if(isset($params->orderNum)) $this->OrderNum = $params->orderNum; 
        else $this->OrderNum = NULL;
        if(isset($params->type)) $this->Type = $params->type; 
        else $this->Type = NULL;
        if(isset($params->registrationDate)) $this->RegistrationDate = $params->registrationDate; 
        else $this->RegistrationDate = NULL;
        if(isset($params->removalDate)) $this->RemovalDate = $params->removalDate; 
        else $this->RemovalDate = NULL;
        if(isset($params->reason)) $this->Reason = $params->reason; 
        else $this->Reason = NULL;
        if(isset($params->removalReason)) $this->RemovalReason = $params->removalReason; 
        else $this->RemovalReason = NULL;
        if(isset($params->notes)) $this->Notes = $params->notes; 
        else $this->Notes = NULL;
    }

    public static function Get($id){
        global $mysqli;
        $risks = [];

        $query = "SELECT * FROM `RiskGroup` WHERE `student_id`=$id";
        $res = $mysqli ->query($query);
        while($row = mysqli_fetch_array($res)){
            $newRisk = new RiskGroup((object) $row);
            array_push($risks, $newRisk);
        }
        return $risks;
    }

    public function Update(){
        global $mysqli;
        $query = "UPDATE `RiskGroup` SET `orderNum`='$this->OrderNum', `type`='$this->Type', `registrationDate`='$this->RegistrationDate',`removalDate`='$this->RemovalDate',`reason`='$this->Reason', `removalReason`='$this->RemovalReason', `notes`='$this->Notes'  WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `RiskGroup` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `RiskGroup`(`student_id`,`orderNum`,`type`,`registrationDate`,`removalDate`,`reason`, `removalReason`,`notes`) VALUES('$this->Student_Id','$this->OrderNum','$this->Type','$this->RegistrationDate','$this->RemovalDate','$this->Reason', '$this->RemovalReason', '$this->Notes')";
        $mysqli->query($query);
    }
}
?>