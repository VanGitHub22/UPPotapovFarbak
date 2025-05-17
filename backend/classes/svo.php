<?php

class Svo{
    public Id;
    public Student_id;
    public OrderNum;
    public StartDate;
    public EndDate;
    
    public __construct($params){
        if(isset($params->id)) this->Id = $params->id;
        if(isset($params->student_id)) this->Student_id = $params->student_id;
        else $this->Student_id = NULL;
        if(isset($params->orderNum)) this->OrderNum = $params->orderNum;
        else $this->OrderNum = NULL;
        if(isset($params->startDate)) this->StartDate = $params->startDate;
        else $this->StartDate = NULL;
        if(isset($params->endDate)) this->EndDate = $params->endDate;
        else $this->EndDate = NULL;
    }
    
    public static function Get(){
        global $mysqli;
        $svo = [];
        
        $query = "SELECT * FROM `SVO`";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
            $newSvo = new Svo((object)$row);
            array_push($svo, $newSvo);
        }
        
    }
    
    public static function Update(){
        global $mysqli;
        $query = "UPDATE `SVO` SET `student_id`='$this->Student_id', `orderNum`=$this->OrderNum, `startDate`='$this->StartDate', `endDate`='$this->$EndDate' WHERE `id`=$this->Id";
        $mysqli->query($query);
    } 
    
    public static function Delete(){
        global $mysqli;
        $query = "DELETE FROM `SVO` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
    
    public static function Insert(){
        global $mysqli;
        $query = "INSERT INTO `SVO`(`student_id`, `orderNum`, `startDate`, `endDate`) VALUES('$this->Student_id', '$this->OrderNum', '$this->StartDate', '$this->EndDate')";
        $mysqli->query($query);
    }
    
}

?>