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
                        <td><input type='text' name='FIO' value='${Studnet.LastName} ${Studnet.FirstName} ${Studnet.MiddleName}'></td>
                        <td><input type='text' name='birthDate' value='${Studnet.BirthDate}'></td>
                        <td><input type="text" name='gender' value='${Studnet.Gender}'></td>
                        <td><input type="text" name='phone' value='${Studnet.Phone}'></td>
                        <td><input type="text" name='education' value='${Studnet.Education}'></td>
                        <td><input type="text" name='department_id' value='${Studnet.Department_Id}'></td>
                        <td><input type="text" name='group' value='${Studnet.Group}'></td>
                        <td><input type="text" name='funding' value='${Studnet.Funding}'></td>
                        <td><input type="text" name='admissionYear' value='${Studnet.AdmissionYear}'></td>
                        <td><input type="text" name='graduationYear' value='${Studnet.GraduationYear}'></td>
                        <td><input type="text" name='isExpelled' value='${Studnet.IsExpelled}'></td>
                        <td><input type="text" name='expulsionDate' value='${Studnet.ExpulsionDate}'></td>
                        <td><input type="text" name='parent_info' value='${Studnet.Parent_info}'></td>
                        <td><input type="text" name='penalties' value='${Studnet.Penalties}'></td>
                        <td><a class='edit_pencil' href='#'><img src='./img/pencil.png'></a></td>
                        <td><a class='trash_backet' href='#'><img src='./img/trash.png'></a></td>
                    </tr>
                `);
                $(".edit_pencil").on("click", function() { EditStudent(Studnet.Id); });
                $(".trash_backet").on("click", function() { DeleteStudent(Studnet.Id); });
            });
        },
        error: function(error) {
            console.log("Ошибка запроса");
        }

    });
}

function EditStudent(id) {
    let FIO = document.getElementsByName('FIO')[0].value;
    let FIOMas = FIO.split(" ");

    let lastName = FIOMas[0];
    let firstName = FIOMas[1];
    let middleName = FIOMas[2];
    let birthDate = document.getElementsByName('birthDate')[0].value;
    let gender = document.getElementsByName('gender')[0].value;
    let phone = document.getElementsByName('phone')[0].value;
    let education = document.getElementsByName('education')[0].value;
    let department_id = document.getElementsByName('department_id')[0].value;
    let group = document.getElementsByName('group')[0].value;
    let funding = document.getElementsByName('funding')[0].value;
    let admissionYear = document.getElementsByName('admissionYear')[0].value;
    let graduationYear = document.getElementsByName('graduationYear')[0].value;
    let isExpelled = document.getElementsByName('isExpelled')[0].value;
    let expulsionDate = document.getElementsByName('expulsionDate')[0].value;
    let parent_info = document.getElementsByName('parent_info')[0].value;
    let penalties = document.getElementsByName('penalties')[0].value;

    let params = new FormData();
    params.append("action", "edit");
    params.append("id", id);
    params.append("lastName", lastName);
    params.append("firstName", firstName);
    params.append("middleName", middleName);
    params.append("birthDate", birthDate);
    params.append("gender", gender);
    params.append("phone", phone);
    params.append("education", education);
    params.append("department_Id", department_id);
    params.append("group", group);
    params.append("funding", funding);
    params.append("admissionYear", admissionYear);
    params.append("graduationYear", graduationYear);
    params.append("isExpelled", isExpelled);
    params.append("expulsionDate", expulsionDate);
    params.append("parent_info", parent_info);
    params.append("penalties", penalties);

    $.ajax({
        url: "./backend/controllers/get_student.php",
        type: "POST",
        data:   params,
        cache : false,
        processData: false,
        contentType: false,
        success: function(_data) {
            const entries = Array.from(params.entries());
            console.log(_data);
            console.log(`${entries}`);
        },
        error: function(error) {
            alert(`Ошибка запроса ${error}`);
        }
    })
}

function DeleteStudent(id){
    let params = new FormData();
    params.append("action", "delete");
    params.append("id", id);

    $.ajax({
        url: "./backend/controllers/get_student.php",
        type: "POST",
        data:   params,
        cache : false,
        processData: false,
        contentType: false,
        success: function(_data) {
            const entries = Array.from(params.entries());
            console.log(_data);
            console.log(`${entries}`);
        },
        error: function(error) {
            alert(`Ошибка запроса ${error}`);
        }
    })
    $(".data").empty();
    $(".h1").empty();
    LoadStudents();
}
