<?php
require_once('./backend/controllers/get_student.php');
?>
<div class="table">
    <table>
        <thead>
            <tr>
                <td>Фио</td>
                <td>Дата <br>рождения</td>
                <td>Пол</td>
                <td>Телефон</td>
                <td>Образование</td>
                <td>Отделение</td>
                <td>Группа</td>
                <td>Оплата</td>
                <td>Даты <br>Поступления</td>
                <td>Даты <br>Выпуска</td>
                <td>Исключен</td>
                <td>Дата</td>
                <td>Родитель</td>
                <td>Взыскания</td>
            </tr>
        </thead>
        <tbody>
        <?php
        
        $studentList = (array)get_student("get");
        foreach($studentList as $key => $value){
            $value1 = (array)$value
        ?>
            <tr>
                <td><input type="text" value="<?=(string)$value1['LastName']?> <?=(string)$value1['FirstName']?> <?=(string)$value1['MiddleName']?>"></td>
                <td><input type="text" value="<?=(string)$value1['BirthDate']?>"></td>
                <td><input type="text" value="<?=(string)$value1['Gender']?>"></td>
                <td><input type="text" value="<?=(string)$value1['Phone']?>"></td>
                <td><input type="text" value="<?=(string)$value1['Education']?>"></td>
                <td><input type="text" value="<?=(string)$value1['Department_Id']?>"></td>
                <td><input type="text" value="<?=(string)$value1['Group']?>"></td>
                <td><input type="text" value="<?=(string)$value1['Funding']?>"></td>
                <td><input type="text" value="<?=(string)$value1['AdmissionYear']?>"></td>
                <td><input type="text" value="<?=(string)$value1['GraduationYear']?>"></td>
                <td><input type="text" value="<?=(string)$value1['IsExpelled']?>"></td>
                <td><input type="text" value="<?=(string)$value1['ExpulsionDate']?>"></td>
                <td><input type="text" value="<?=(string)$value1['Parent_info']?>"></td>
                <td><input type="text" value="<?=(string)$value1['Penalties']?>"></td>
                <td><div onclick="edit(this.id)" id="<?=(string)$value1['Id']?>" class="vert_dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div></td>
            </tr>
        <?php
        }
        ?>
            
        </tbody>
    </table>

</div>