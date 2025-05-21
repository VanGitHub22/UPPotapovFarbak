LoadStudents();
function LoadStudents() {
    let params = new FormData();
    params.append("action", "get");

    $.ajax({
        url: "./backend/controllers/get_student.php",
        type: "POST",
        data: params,
        cache : false,
        processData: false,
        contentType: false,
        success: function(_data) {
            document.title = "Студенты"
            let Students = JSON.parse(_data);
            $(".h1").append(`
                <h1>Студенты</h1>    
            `)
            $(".data").append(`
                <table>
                    <thead>
                        <tr>
                            <td>Фио</td>
                            <td>Дата <br>рождения</td>
                            <td>Пол</td>
                            <td>Телефон</td>
                            <td>Образование</td>
                            <td>Отделение</td>
                            <td>Группа</td>
                            <td>Оплата</td>
                            <td>Даты <br>Поступления</td>
                            <td>Даты <br>Выпуска</td>
                            <td>Исключен</td>
                            <td>Дата</td>
                            <td>Родитель</td>
                            <td>Взыскания</td>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            `)
            Students.forEach((Studnet) => {
                $("tbody").append(`
                    <tr>
                        <td><input type='text' value='${Studnet.LastName} ${Studnet.FirstName} ${Studnet.MiddleName}' readonly></td>
                        <td><input type='text' value='${Studnet.BirthDate}' readonly></td>
                        <td><input type="text" value='${Studnet.Gender}' readonly></td>
                        <td><input type="text" value='${Studnet.Phone}' readonly></td>
                        <td><input type="text" value='${Studnet.Education}' readonly></td>
                        <td><input type="text" value='${Studnet.Department_Id}' readonly></td>
                        <td><input type="text" value='${Studnet.Group}' readonly></td>
                        <td><input type="text" value='${Studnet.Funding}' readonly></td>
                        <td><input type="text" value='${Studnet.AdmissionYear}' readonly></td>
                        <td><input type="text" value='${Studnet.GraduationYear}' readonly></td>
                        <td><input type="text" value='${Studnet.IsExpelled}' readonly></td>
                        <td><input type="text" value='${Studnet.ExpulsionDate}' readonly></td>
                        <td><input type="text" value='${Studnet.Parent_info}' readonly></td>
                        <td><input type="text" value='${Studnet.Penalties}' readonly></td>
                        <td><div id='${Studnet.Id}' class="vert_dots">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div></td>
                    </tr>
                `);

                $("tbody").children("tr:last()").find(".vert_dots").on("click", function() { LoadStudentById(Studnet.Id); });
            });
        },
        error: function(error) {
            console.log("Ошибка запроса", error);
        }

    });
}

function LoadStudentById(id) {
    $(".data").empty();
    $(".h1").empty();

    let params = new FormData();
    params.append("action", "getEdit");
    params.append("id", id);

    $.ajax({
        url: "./backend/controllers/get_student.php",
        type: "POST",
        data: params,
        cache : false,
        processData: false,
        contentType: false,
        success: function(_data) {
            document.title = "Изменить студента"
            let Students = JSON.parse(_data);
            $(".h1").append(`
                <h1>Изменить студента</h1>    
            `)
            $(".data").append(`
                <table>
                    <thead>
                        <tr>
                            <td>Фио</td>
                            <td>Дата <br>рождения</td>
                            <td>Пол</td>
                            <td>Телефон</td>
                            <td>Образование</td>
                            <td>Отделение</td>
                            <td>Группа</td>
                            <td>Оплата</td>
                            <td>Даты <br>Поступления</td>
                            <td>Даты <br>Выпуска</td>
                            <td>Исключен</td>
                            <td>Дата</td>
                            <td>Родитель</td>
                            <td>Взыскания</td>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            `)
            Students.forEach((Studnet) => {
                $("tbody").append(`
                    <tr>
                        <td><input type='text' value='${Studnet.LastName} ${Studnet.FirstName} ${Studnet.MiddleName}' readonly></td>
                        <td><input type='text' value='${Studnet.BirthDate}' readonly></td>
                        <td><input type="text" value='${Studnet.Gender}' readonly></td>
                        <td><input type="text" value='${Studnet.Phone}' readonly></td>
                        <td><input type="text" value='${Studnet.Education}' readonly></td>
                        <td><input type="text" value='${Studnet.Department_Id}' readonly></td>
                        <td><input type="text" value='${Studnet.Group}' readonly></td>
                        <td><input type="text" value='${Studnet.Funding}' readonly></td>
                        <td><input type="text" value='${Studnet.AdmissionYear}' readonly></td>
                        <td><input type="text" value='${Studnet.GraduationYear}' readonly></td>
                        <td><input type="text" value='${Studnet.IsExpelled}' readonly></td>
                        <td><input type="text" value='${Studnet.ExpulsionDate}' readonly></td>
                        <td><input type="text" value='${Studnet.Parent_info}' readonly></td>
                        <td><input type="text" value='${Studnet.Penalties}' readonly></td>
                        <td><a href='#'></a></td>
                    </tr>
                `);
            });
        },
        error: function(error) {
            console.log("Ошибка запроса");
        }

    });
}
