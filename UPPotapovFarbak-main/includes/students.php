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
        $query = "SELECT * FROM `Students`";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
        ?>
            <tr>
                <td><input type="text" value="<?=$row['lastName']?> <?=$row['firstName']?> <?=$row['middleName']?>"></td>
                <td><input type="text" value="<?=$row['birthDate']?>"></td>
                <td><input type="text" value="<?=$row['gender']?>"></td>
                <td><input type="text" value="<?=$row['phone']?>"></td>
                <td><input type="text" value="<?=$row['education']?>"></td>
                <td><input type="text" value="<?=$row['department_Id']?>"></td>
                <td><input type="text" value="<?=$row['group']?>"></td>
                <td><input type="text" value="<?=$row['funding']?>"></td>
                <td><input type="text" value="<?=$row['admissionYear']?>"></td>
                <td><input type="text" value="<?=$row['graduationYear']?>"></td>
                <td><input type="text" value="<?=$row['isExpelled']?>"></td>
                <td><input type="text" value="<?=$row['expulsionDate']?>"></td>
                <td><input type="text" value="<?=$row['parent_Info']?>"></td>
                <td><input type="text" value="<?=$row['penalties']?>"></td>
                <td><div onclick="edit(this.id)" id="<?=$row['id']?>" class="vert_dots">
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