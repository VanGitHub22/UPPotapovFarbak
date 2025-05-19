<div class="addStStat">
    <?php
    include('./includes/statuses/nav.php');
    if(!isset($_GET['status'])){
        include('./includes/statuses/svoForm.php');
    } else if ($_GET['status'] == "dormitory") {
        include('./includes/statuses/dormitoryForm.php');
    } else if ($_GET['status'] == "ovz") {
        include('./includes/statuses/ovzsForm.php');
    } else if ($_GET['status'] == "riskGroup") {
        include('./includes/statuses/riskGroup.php');
    } else if ($_GET['status'] == "socialScolar") {
        include('./includes/statuses/socialScolarForm.php');
    } else if ($_GET['status'] == "sppp") {
        include('./includes/statuses/spppForm.php');
    } else if ($_GET['status'] == "disabled") {
        include('./includes/statuses/disabilitiesForm.php');
    } 
    ?>
</div>