<?php
Class OVZS{
    public $Id;
    public $Student_Id;
    public $OrderNum;
    public $StartDate;
    public $EndDate;
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
        if(isset($params->endDate)) $this->EndDate = $params->endDate;
        else $this->EndDate = NULL;
        if(isset($params->notes)) $this->Notes = $params->notes;
        else $this->Notes = NULL;
    }

    public static function Get($st_id){
        global $mysqli;
        $ovzs = [];

        $query = "SELECT * FROM `OVZS` WHERE `student_id`=$st_id";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
            $newOvz = new OVZS((object)$row);
            array_push($ovzs, $newOvz);
        }

        return $ovzs;
    }

    public function Update(){
        global $mysqli;
        $query = "UPDATE `OVZS` SET `orderNum`='$this->OrderNum', `startDate`='$this->StartDate',`endDate`='$this->EndDate',`notes`='$this->Notes' WHERE `id`=$this->Id";
        $mysqli->query($query);
}

    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `OVZS` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `OVZS`(`student_id`,`orderNum`,`startDate`,`endDate`,`notes`) VALUES('$this->Student_Id','$this->OrderNum','$this->StartDate','$this->EndDate','$this->Notes')";
        $mysqli->query($query);
    }
}
?>