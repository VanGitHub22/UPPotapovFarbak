<?php

class Rooms{
    public $Id;
    public $Name;
    public $Capacity;
    
    function __construct($params){
        if(isset($params->id)) $this->Id = $params->id;
        if(isset($params->name)) $this->Name = $params->name;
        else $this->Name = NULL;
        if(isset($params->capacity)) $this->Capacity = $params->capacity;
        else $this->Capacity = NULL;
    }
    
    public static function Get(){
        global $mysqli;
        $rooms = [];
        
        $query = "SELECT * FROM `Rooms`";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
            $newRoom = new Rooms((object)$row);
            array_push($rooms, $newRoom);
        }
        return $rooms;
    }
    
    public function Update(){
        global $mysqli;
        $query = "UPDATE `Rooms` SET `Name`='$this->Name', `Capacity`='$this->Capacity' WHERE `id`=$this->Id";
        $mysqli->query($query);
    } 
    
    public function Delete(){
        global $mysqli;
        $query = "DELETE FROM `Rooms` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
    
    public function Insert(){
        global $mysqli;
        $query = "INSERT INTO `Rooms`(`Name`, `Capacity`) VALUES($this->Name, $this->Capacity)";
        $mysqli->query($query);
    }
    
}

?>