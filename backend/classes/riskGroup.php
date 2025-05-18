<?php
Class RiskGroup{
    public Id;
    public Student_Id;
    public Type;
    public RegistrationDate;
    public RemovalDate;
    public Reason;
    public RemovalReason;
    public Notes;
    
    public _construct($params){
        if(isset($params->id)) $this->Id = $params->id 
        else $this ->Id = NULL;
        if(isset($params->student_id)) $this->Student_Id = $params->student_id 
        else $this ->Student_Id = NULL;
        if(isset($params->type)) $this->Type = $params->type 
        else $this ->Type = NULL;
        if(isset($params->registrationDate)) $this->RegistrationDate = $params->registrationDate 
        else $this ->RegistrationDate = NULL;
        if(isset($params->removalDate)) $this-> RemovalDate = $params->removalDate 
        else $this ->RemovalDate = NULL;
        if(isset($params->reason)) $this-> Reason = $params->reason 
        else $this ->Reason = NULL;
        if(isset($params->removalReason)) $this-> RemovalReason = $params->removalReason 
        else $this ->RemovalReason = NULL;
        if(isset($params->notes)) $this-> Notes = $params->notes 
        else $this ->Notes = NULL;
    }

    public static function Get(){
        global $mysqli;
        $risks = [];

        $query = "SELECT * FROM `RiskGroup`";
        $res = $mysqli ->query($query);
        while($row = mysqli_fetch_array($res)){
            $newRisk = new RiskGroup((object) $row);
            array_push($risks, $newRIsk);
        }
    }

    public static function Update(){
        global $mysqli;
        $query = "UPDATE `RiskGroup` SET `student_id`='$this->Student_Id', `type`='$this->Type', `registrationDate`='$this->RegistrationDate',`removalDate`='$this->RemovalDate',`reason`='$this->Reason', `removalReason`='$this->RemovalReason', `notes`='$this->Notes'";
        $mysqli->query($query);
    }

    public static function Delete(){
        global $mysqli;
        $query = "DELETE FROM `RiskGroup` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public static function Insert(){
        global $mysqli;
        $query = "INSERT INTO `RiskGroup`(`student_id`,`type`,`registrationDate`,`removalDate`,`reason`, `removalReason`,`notes`) VALUES('$this->Student_Id','$this->Type','$this->RegistrationDate','$this->RemovalDate','$this->Reason', '$this->RemovalReason', '$this->Notes') WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
}
?>