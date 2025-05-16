<div class="table">
    <table>
        <thead>
            <tr>
                <td><form action=""><input type="submit" value="Id студента"></form></td>
                <td>Номер документа</td>
                <td>Дата начала</td>
                <td>Дата конца</td>
            </tr>
        </thead>
        <tbody>
            <?php
            $query = "SELECT * FROM `SocialScolarship`";
            $res = $mysqli->query($query);
            while($row = mysqli_fetch_array($res)){
            ?>
            <tr>
                <td><input type="text" value="<?=$row['student_id']?>"></td>
                <td><input type="text" value="<?=$row['orderNum']?>"></td>
                <td><input type="text" value="<?=$row['startDate']?>"></td>
                <td><input type="text" value="<?=$row['endDate']?>"></td>
                <td><a href="#" onclick="edit(this.id)" id="<?=$row['Id']?>">Управление</a></td>
            </tr>
            <?php
            }
            ?>
        </tbody>
    </table>

</div>