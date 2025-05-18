<div class="table">
    <table>
        <thead>
            <tr>
                <td>Название</td>
            </tr>
        </thead>
        <tbody>
        <?php
        $query = "SELECT * FROM `Departments`";
        $res = $mysqli->query($query);
        while($row = mysqli_fetch_array($res)){
        ?>
            <tr>
                <td><input type="text" value="<?=$row['Name']?>" readonly></td>
            </tr>
        <?php
        }
        ?>
            
        </tbody>
    </table>

</div>