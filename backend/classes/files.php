<?php
Class Files{
    public Id;
    public Student_Id;
    public File_Path;
    public Description;
    public Status_type;
    
    public _construct($params){
        if(isset($params->id)) this->Id = $params->id 
        else $this ->Id = NULL;
        if(isset($params->student_id)) this->Student_Id = $params->student_id 
        else $this ->Student_Id = NULL;
        if(isset($params->file_path)) this->File_Path = $params->file_path 
        else $this ->File_Path = NULL;
        if(isset($params->description)) this->Description = $params->description 
        else $this ->Description = NULL;
        if(isset($params->status_type)) this-> Status_type = $params->status_type 
        else $this ->Status_type = NULL;
    }

    public static function Get(){
        global $mysqli;
        $files = [];

        $query = "SELECT * FROM `Files`";
        $res = $mysqli ->query($query);
        while($row = mysqli_fetch_array($res)){
            $newFiles = new Files((object) $row);
            array_push($files, $newFiles);
        }
    }

    public static function Update(){
        global $mysqli;
        $query = "UPDATE `Files` SET `student_id`='$this->Student_Id', `file_path`='$this->File_Path', `description`='$this->Description',`status_type`='$this->Status_type'";
        $mysqli->query($query);
    }

    public static function Delete(){
        global $mysqli;
        $query = "DELETE FROM `Files` WHERE `id`=$this->Id";
        $mysqli->query($query);
    }

    public static function Insert(){
        global $mysqli;
        $query = "INSERT INTO `Files`(`student_id`,`file_path`,`description`,`status_type`) VALUES('$this->Student_Id','$this->File_Path','$this->Description','$this->Status_type') WHERE `id`=$this->Id";
        $mysqli->query($query);
    }
}
?>