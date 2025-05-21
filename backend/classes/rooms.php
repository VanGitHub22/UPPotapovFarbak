<?php

class Rooms{
    public $Id;
    public $Name;
    public $Capacity;
    
    public __construct($params){
        if(isset($params->id)) $this->Id = $params->id;
        if(isset($params->Name)) $this->Name = $params->Name;
        else $this->Name = NULL;
        if(isset($params->Capacity)) $this->Capacity = $params->Capacity;
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
        
    }
    
    public static function Update(){
        global $mysqli;
        $query = "UPDATE `Rooms` SET `Name`='$this->Name', `Capacity`='$this->Capacity' WHERE `id`=$this->Id";
        $mysqli->query($query);
    } 
    
    public static function Delete(){
        global $mysqli;
        $query = "DELETE FROM `Rooms` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
    
    public static function Insert(){
        global $mysqli;
        $query = "INSERT INTO `Rooms`(`Name`, `Capacity`) VALUES('$this->Name', '$this->Capacity')";
        $mysqli->query($query);
    }
    
}

?>