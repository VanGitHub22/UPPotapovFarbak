function LoadDorm(){
    let params = new FormData();
    params.append("action", "get");

    $.ajax({
        url: "./backend/controllers/dormitory.php",
        type: "POST",
        data: params,
        cache : false,
        processData: false,
        contentType: false,
        success: function(_data){
            document.title ="Общежитие";
            let Dorm = JSON.parse(_data);
            $(".h1").append(`<h1>Общежитие</h1>`)
            $(".data").append(`
                    <table>
                    <thead>
                        <tr>
                            <td>Студент</td>
                            <td>Комната</td>
                            <td>Документ</td>
                            <td>Дата заселения</td>
                            <td>Дата выселения</td>
                            <td>Дополнительно</td>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            `)
            Dorm.forEach((dorm) => {
                $("tbody").append(`
                    <tr>
                        <td><input type='text' value='${dorm.Student_id}'></td>
                        <td><input type='text' value='${dorm.Room_id}'></td>
                        <td><input type='text' value='${dorm.OrderNum}'></td>
                        <td><input type='text' value='${dorm.CheckInDate}'></td>
                        <td><input type='text' value='${dorm.CheckOutDate}'></td>
                        <td><input type='text' value='${dorm.Notes}'></td>
                        <td>
                            <a class='edit_pencil' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `);
                $(".edit_pencil").on("click", function() { EditDorm(dorm.Id); });
                $(".trash_backet").on("click", function() { DeleteDorm(dorm.Id); });
            });
        }, 
        error: function(error){
            console.log(`Ошибка запроса ${error}`);
        }
    });
}

function EditDorm(id){
    let stud = document.getElementsByName('student_id')[0].value;
    let rum = document.getElementsByName('room_id')[0].value;
    let order = document.getElementsByName('orderNum')[0].value;
    let inDate = document.getElementsByName('checkInDate')[0].value;
    let outDate = document.getElementsByName('checkOutDate')[0].value;
    let notes = document.getElementsByName('notes')[0].value;

    let params = new FormData();
    params.append("action", "edit");
    params.append("id", id);
    params.append("student_id", stud);
    params.append("room_id", rum);
    params.append("orderNum", order);
    params.append("checkInDate", inDate);
    params.append("checkOutDate", outDate);
    params.append("notes", notes);

    $.ajax({
         url: "./backend/controllers/dormitory.php",
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

function DeleteDorm(id){
    let params = new FormData();
    params.append("action", "delete");
    params.append("id", id);

    $.ajax({
        url: "./backend/controllers/dormitory.php",
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
        LoadDorm();
}

export default LoadDorm;