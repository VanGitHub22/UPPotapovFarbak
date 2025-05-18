<nav>
    <a href="./index.php" class="nav_link <?php if(!isset($_GET['page'])){ ?> active <?php } ?>">C</a>
    <a href="./index.php?page=depa" class="nav_link <?php if(isset($_GET['page']) && $_GET['page'] == "depa"){ ?> active <?php }; ?>">
        <?php 
        if(isset($_GET['page']) && $_GET['page'] == "depa"){ 
        ?>
            <img src="./img/department_blue.png" alt=""> 
        <?php 
        } else {
        ?> 
            <img src="./img/department_white.png" alt="">
        <?php
        }
        ?>
    </a>

    <a href="./index.php?page=studentFiles" class="nav_link <?php if(isset($_GET['page']) && $_GET['page'] == "studentFiles"){ ?> active <?php }; ?>">
        <?php 
        if(isset($_GET['page']) && $_GET['page'] == "studentFiles"){ 
        ?>
            <img src="./img/file_blue.png" alt=""> 
        <?php 
        } else {
        ?> 
            <img src="./img/file_white.png" alt="">
        <?php
        }
        ?>
    </a>
    <a href="./department.php" class="nav_link"><img src="./img/department_white.png" alt=""></a>
    <a href="./sppp.php" class="nav_link">П</a>
    <a href="#" class="nav_link">C</a>
    <a href="#" class="nav_link">C</a>
    <a href="#" class="nav_link">C</a>
    <a href="#" class="nav_link">C</a>
    <a href="#" class="nav_link">C</a>
    <a href="#" class="nav_link">C</a>
    <a href="#" class="nav_link">C</a>
    <a href="#" class="nav_link">C</a>
    <a href="#" class="nav_link">C</a>
</nav>