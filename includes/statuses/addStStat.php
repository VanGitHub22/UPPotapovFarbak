<div class="addStStat">
    <?php
    include('./nav.php');
    if(!isset($_GET['status'])){
        include('./svoForm.php');
    } else if ($_GET['status'] == "dormitory") {
        include('./dormitoryForm.php');
    } else if ($_GET['status'] == "ovz") {
        include('./ovzForm.php');
    } else if ($_GET['status'] == "riskGroup") {
        include('./riskGroupForm.php');
    } else if ($_GET['status'] == "socialScolar") {
        include('./socialScolarForm.php');
    } else if ($_GET['status'] == "sppp") {
        include('./spppForm.php');
    } else if ($_GET['status'] == "disabled") {
        include('./disabilitiesForm.php');
    } 
    ?>
</div>