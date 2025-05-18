<div class="table">
    <table>
        <thead>
            <tr>
                <td>Id<br>студента</td>
                <td>Номер<br>комнаты</td>
                <td>Документ</td>
                <td>Дата<br>заселения</td>
                <td>Дата<br> выселения</td>
                <td>Дополнительно</td>
            </tr>
        </thead>
        <tbody>
        <?php
        $query = "SELECT `Dormitory`.`id` as `DId`, `Dormitory`.`student_id`, `Dormitory`.`room_id` as `DRId`, `Dormitory`.`orderNum`, `Dormitory`.`checkInDate`, `Dormitory`.`checkOutDate`, `Dormitory`.`notes`, `Rooms`.`id`, `Rooms`.`name` as `Rid`  FROM `Dormitory`, `Rooms` WHERE `Dormitory`.`room_id`=`Rooms`.`id` ORDER BY `Dormitory`.`id`";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
        ?>
            <tr>
                <td><input type="text" value="<?=$row['DId']?>"></td>
                <td><input type="text" value="<?=$row['Rid']?>"></td>
                <td><input type="text" value="<?=$row['orderNum']?>"></td>
                <td><input type="text" value="<?=$row['checkInDate']?>"></td>
                <td><input type="text" value="<?=$row['checkOutDate']?>"></td>
                <td><input type="text" value="<?=$row['notes']?>"></td>
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