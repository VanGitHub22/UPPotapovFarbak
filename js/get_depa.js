function LoadDepa(){
    let params = new FormData();
    params.append("action", "get");

    $.ajax({
        url: "./backend/controllers/department.php",
        type: "POST",
        data: params,
        cache : false,
        processData: false,
        contentType: false,
        success: function(_data){
            document.title = "Отделения";
            let Department = JSON.parse(_data);
            $(".h1").append(`<h1>Отделения</h1>`)
            $(".data").append(`
                <table>
                    <thead>
                        <tr>
                            <td>Наимонование</td>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            `)
            Department.forEach((Depa)=>{
                $("tbody").append(`
                    <tr>
                        <td><input type='text' value='${Depa.Name}'></td>
                        <td>
                            <a class='edit_pencil' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `);
                $(".edit_pencil").on("click", function() { EditDepa(Depa.Id); });
                $(".trash_backet").on("click", function() { DeleteDepa(Depa.Id); });
            });
        },
        error: function(error){
            console.log(`Ошибка запроса ${error}`);
        }
    });
}

function EditDepa(id){
    let name = document.getElementsByName('name')[0].value;
    let params = new FormData();

    params.append("action","edit");
    params.append("id",id);
    params.append("name", name);

    $.ajax({
        url: "./backend/controllers/department.php",
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

function DeleteDepa(id){
    let params = new FormData();
    params.append("action","delete");
    params.append("id", id)

    $.ajax({
        url: "./backend/controllers/department.php",
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
    LoadDepa();
} 

export default LoadDepa;