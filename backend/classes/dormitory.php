<?php
Class Dormitory{
    public $Id;
    public $Student_Id;
    public $Room_Id;
    public $OrderNum;
    public $CheckInDate;
    public $CheckOutDate;
    public $Notes;
    
    function __construct($params){
        if(isset($params->id)) $this->Id = $params->id; 
        else $this->Id = NULL;
        if(isset($params->student_id)) $this->Student_Id = $params->student_id; 
        else $this->Student_Id = NULL;
        if(isset($params->room_id)) $this->Room_Id = $params->room_id; 
        else $this->Room_Id = NULL;
        if(isset($params->orderNum)) $this->OrderNum = $params->orderNum; 
        else $this->OrderNum = NULL;
        if(isset($params->checkInDate)) $this->CheckInDate = $params->checkInDate; 
        else $this->CheckInDate = NULL;
        if(isset($params->checkOutDate)) $this->CheckOutDate = $params->checkOutDate; 
        else $this->CheckOutDate = NULL;
        if(isset($params->notes)) $this->Notes = $params->notes; 
        else $this->Notes = NULL;
    }

    public static function Get(){
        global $mysqli;
        $dorms = [];

        $query = "SELECT * FROM `Dormitory`";
        $res = $mysqli ->query($query);
        while($row = mysqli_fetch_array($res)){
            $newDorms = new Dormitory((object) $row);
            array_push($dorms, $newDorms);
        }

        return $dorms;
    }

    public static function GetById($id){
        global $mysqli;
        $dormsById = [];

        $query = "SELECT * FROM `Dormitory` WHERE `student_id`=$id";
        $res = $mysqli ->query($query);
        while($row = mysqli_fetch_array($res)){
            $newDorms = new Dormitory((object) $row);
            array_push($dormsById, $newDorms);
        }

        return $dormsById;
    }

    public function Update(){
        global $mysqli;
        $query = "UPDATE `Dormitory` SET `student_id`='$this->Student_Id', `room_id`='$this->Room_Id', `orderNum`='$this->OrderNum', `checkInDate`='$this->CheckInDate',`checkOutDate`='$this->CheckOutDate', `notes`='$this->Notes' WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `Dormitory` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `Dormitory`(`student_id`,`room_id`,`orderNum`,`checkInDate`,`checkOutDate`, `notes`) VALUES('$this->Student_Id','$this->Room_Id','$this->OrderNum','$this->CheckInDate','$this->CheckOutDate','$this->Notes')";
        $mysqli->query($query);
    }
}
?>