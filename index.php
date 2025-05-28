<?php
    include('./connection/connection.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.3.js"></script>
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
        <div class="h1"></div>
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
                    <div class="export"></div>
                    <p>*Фильтрация по клику колонки</p>
                </div>
                <div class="line"></div>
                <div class="data"></div>
            </div>
        </div>
    </main>
</body>
<script type="module" src="./js/get_addSt.js"></script> 
<script type="module" src="./js/get_dorm.js"></script> 
<script type="module" src="./js/get_depa.js"></script> 
<script type="module" src="./js/get_student.js"></script> 
<script type="module" src="./js/get_all.js"></script> 
</html>
