<?php

if(!isset($_GET['id'])){
?>
    <h1>Регистрация</h1>
    <div class="block_reg">
        <p>Процесс только для сотрудников техникума</p>
        <div class="line"></div>
        <form action="" method="POST">
            <input type="text" placeholder="ФИО">
            <input type="text" placeholder="Логин">
            <input type="text" placeholder="Пароль">
            <div class="checkbox">
                <input type="checkbox">
                <p>Вы соглашаетесь на ожидание подтверждения вашей учётной записи администратором</p>      
            </div>
            <input type="submit" value="Зарегистрироваться">
        </form>
    </div>
    <p>Уже есть учетная запись? <a href="reg.php?id=auth">Войти</a></p>
<?php
} else if($_GET['id']=='auth'){
?>
    <h1>Авторизация</h1>
    <div class="block_reg">
        <p>Процесс только для сотрудников техникума</p>
        <div class="line"></div>
        <form action="" method="POST">
            <input type="text" placeholder="Логин">
            <input type="text" placeholder="Пароль">
            <input type="submit" value="Войти">
        </form>
    </div>
    <p>Нет учётной записи? <a href="reg.php">Зарегистрироваться</a></p>
<?php
}

?>

