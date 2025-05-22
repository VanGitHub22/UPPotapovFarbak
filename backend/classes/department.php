<?php

class Department{
    public $Id;
    public $Name;
    
    public __construct($params){
        if(isset($params->id)) $this->Id = $params->id;
        if(isset($params->name)) $this->Name = $params->name;
        else $this->$Name = NULL;
    }
    
    public static function Get(){
        global $mysqli;
        $departments = [];
        
        $query = "SELECT * FROM `Departments`";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
            $newDep = new Department((object)$row);
            array_push($departments, $newDep);
        }
    }
    
    public function Update(){
        global $mysqli;
        $query = "UPDATE `Departments` SET `Name`='$this->Name' WHERE `id`=$this->Id "; 
        $mysqli->query($query);
    } 
    
    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `Departments` WHERE `id`= $this->Id";
        $mysqli->query($query);
    }
    
    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `Departments`(`Name`) VALUES('$this->Name') WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
    
}

?>