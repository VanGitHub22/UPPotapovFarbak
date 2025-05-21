<nav>
    <div class="nav_link_text">
        <a href="./index.php" class="nav_link <?php if(!isset($_GET['page'])){ ?> active <?php } ?>">C</a> 
        <p>Студенты</p>
    </div>
    <div class="nav_link_text">
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
        <p>Отделения</p>
    </div>
    <div class="nav_link_text">
        <a href="./index.php?page=dorm" class="nav_link <?php if(isset($_GET['page']) && $_GET['page'] == "dorm"){ ?> active <?php }; ?>">
            <?php 
            if(isset($_GET['page']) && $_GET['page'] == "dorm"){ 
            ?>
                <img src="./img/house_blue.png" alt=""> 
            <?php 
            } else {
            ?> 
                <img src="./img/house_white.png" alt="">
            <?php
            }
            ?>
        </a>
        <p>Общежитие</p>
    </div>
    <div class="nav_link_text">
        <a href="./index.php?page=addSt" class="nav_link <?php if(isset($_GET['page']) && ($_GET['page'] == "addSt" || $_GET['page'] == "addStStat")){ ?> active <?php }; ?>">
            <?php 
            if(isset($_GET['page']) && ($_GET['page'] == "addSt" || $_GET['page'] == "addStStat")){ 
            ?>
                <img src="./img/plus_blue.png" alt=""> 
            <?php 
            } else {
            ?> 
                <img src="./img/plus_white.png" alt="">
            <?php
            }
            ?>
        </a>
        <p>Добавить<br> студента</p>
    </div>

    <a href="./addSt.php" class="nav_link"><img src="./img/department_white.png" alt=""></a>

    <a href="./sppp.php" class="nav_link">П</a>

</nav>