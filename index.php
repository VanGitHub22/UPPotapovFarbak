<?php
    include('./connection/connection.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <?php
    if(!isset($_GET['page'])){
    ?>
        <title>Главная</title>
    <?php
    } else if($_GET['page'] == "depa"){
    ?>
        <title>Отделения</title>
    <?php
    }
    ?>
</head>
<body>
    <header>
        <div class="container">
            <div class="header_inner">
                <div class="logo"><img src="./img/logo.png" alt=""></div>
                <div class="user">
                    <div class="name_role">
                        <h3>Фарбак Дана Игоревна</h3>
                        <p>Администратор</p>
                    </div>
                    <div class="user_photo"></div>
                </div>
                <div class="menu">
                    <div class="palka"></div>
                    <div class="palka"></div>
                    <div class="palka"></div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <?php
        if(!isset($_GET['page'])){
        ?>
        <h1>Студенты</h1>
        <?php
        } else if ($_GET['page'] == "depa") {
        ?>
        <h1>Отделения</h1>
        <?php
        }
        ?>
        <div class="main_inner">
            <?php
            include('./includes/nav.php');
            ?>
            <div class="main_table">
                <div class="main_nav">
                    <div class="search">
                        <input type="text">
                        <a href="#"><img src="./img/lupa.png" alt=""></a>
                    </div>
                    <p>*Фильтрация по клику колонки</p>
                </div>
                <div class="line"></div>
                <?php
                if(!isset($_GET['page'])){
                    include('./includes/students.php');
                } else if ($_GET['page'] == "depa"){                    
                    include('./includes/depa.php');
                } else if($_GET['page'] == "dorm"){
                    include('./includes/dorm.php');
                }
                ?>
            </div>
        </div>
    </main>
</body>
<script src="./js/index.js"></script>
</html>