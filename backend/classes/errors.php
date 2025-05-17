<?php

class Errors{
    public Id;
    public ErrorMessage;
    public TimeError;
    public Details;
    
    public __construct($params){
        if(isset($params->id)) this->Id = $params->id;
        if(isset($params->errorMessage)) this->ErrorMessage = $params->errorMessage;
        else $this->ErrorMessage = NULL;
        if(isset($params->timeError)) this->TimeError = $params->timeError;
        else $this->TimeError = NULL;
        if(isset($params->details)) this->Details = $params->details;
        else $this->Details = NULL;
    }
    
    public static function Get(){
        global $mysqli;
        $errors = [];
        
        $query = "SELECT * FROM `Errors`";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
            $newError = new Errors((object)$row);
            array_push($errors, $newError);
        }
        
    }
    
    public static function Update(){
        global $mysqli;
        $query = "UPDATE `Errors` SET `errorMessage`='$this->ErrorMessage', `timeError`=$this->TimeError, `details`='$this->Details' WHERE `id`=$this->Id";
        $mysqli->query($query);
    } 
    
    public static function Delete(){
        global $mysqli;
        $query = "DELETE FROM `Errors` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
    
    public static function Insert(){
        global $mysqli;
        $query = "INSERT INTO `Errors`(`errorMessage`, `timeError`, `details`) VALUES('$this->ErrorMessage', '$this->TimeError', '$this->Details')";
        $mysqli->query($query);
    }
    
}

?>