<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Главная</title>
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
        <h1>Файлы</h1>
        <div class="main_inner">
            <nav>
                <a href="./index.php" class="nav_link">C</a>
                <a href="./socialScolarship.php" class="nav_link"><img src="./img/coin_white.png" alt=""></a>
                <a href="./socialScolarship.php" class="nav_link active"><img src="./img/file_blue.png" alt=""></a>
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
            <div class="selection">
                <div class="text_select">
                    <h3>Выборка</h3>
                    <a href="#" class="back"><div class="back_arrow"></div></a>
                </div>
                <div class="student">Потапов И.А</div>
                <div class="student">Потапов И.А</div>
                <div class="student">Потапов И.А</div>
                <div class="student">Потапов И.А</div>
                <div class="student">Потапов И.А</div>
                <div class="student">Потапов И.А</div>
                <div class="dots">...</div>
                <h3>Доступ к списку</h3>
                <div class="main_user">
                    <div class="name_role">
                        <h3>Фарбак Д.И.</h3>
                        <p>Администратор</p>
                    </div>
                    <div class="user_photo"></div>
                </div>
                <div class="main_user sotr">
                    <div class="name_role">
                        <h3>Фарбак Д.И.</h3>
                        <p>Сотрудник</p>
                    </div>
                    <div class="user_photo"></div>
                </div>
            </div>
            <div class="main_table">
                <div class="main_nav">
                    <div class="search">
                        <input type="text">
                        <a href="#"><img src="./img/lupa.png" alt=""></a>
                    </div>
                    <a href="./files.php">Перейти ко всем файлам</a>
                    <p>*Фильтрация по клику колонки</p>
                </div>
                <div class="line"></div>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <td>Id студента</td>
                                <td>Id файла</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text"></td>
                                <td><input type="text"></td>
                                <td><a href="#" onclick="edit(this.id)" id="1">Управление</a></td>
                            </tr>
                            <tr>
                                <td><input type="text"></td>
                                <td><input type="text"></td>
                                <td><a href="#" onclick="edit(this.id)" id="1">Управление</a></td>
                            </tr>
                            <tr>
                                <td><input type="text"></td>
                                <td><input type="text"></td>
                                <td><a href="#" onclick="edit(this.id)" id="1">Управление</a></td>
                            </tr>
                            <tr>
                                <td><input type="text"></td>
                                <td><input type="text"></td>
                                <td><a href="#" onclick="edit(this.id)" id="1">Управление</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </main>
</body>
<script src="./js/index.js"></script>
</html>