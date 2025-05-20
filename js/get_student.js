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
            Students.forEach((Student) => {
                $("tbody").append(`
                    <tr>
                        <td><input type='text' value='${Student.LastName} ${Student.FirstName} ${Student.MiddleName}' readonly></td>
                        <td><input type='text' value='${Student.BirthDate}' readonly></td>
                        <td><input type="text" value='${Student.Gender}' readonly></td>
                        <td><input type="text" value='${Student.Phone}' readonly></td>
                        <td><input type="text" value='${Student.Education}' readonly></td>
                        <td><input type="text" value='${Student.Department_Id}' readonly></td>
                        <td><input type="text" value='${Student.Group}' readonly></td>
                        <td><input type="text" value='${Student.Funding}' readonly></td>
                        <td><input type="text" value='${Student.AdmissionYear}' readonly></td>
                        <td><input type="text" value='${Student.GraduationYear}' readonly></td>
                        <td><input type="text" value='${Student.IsExpelled}' readonly></td>
                        <td><input type="text" value='${Student.ExpulsionDate}' readonly></td>
                        <td><input type="text" value='${Student.Parent_info}' readonly></td>
                        <td><input type="text" value='${Student.Penalties}' readonly></td>
                        <td><div onclick="edit(this.id)" id='${Studnet.Id}' class="vert_dots">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div></td>
                    </tr>
                `);
            });
        },
        error: function(error) {
            console.log("Ошибка запроса");
        }

    });
}

export default LoadStudents