function LoadDorm() {
  let params = new FormData()
  params.append('action', 'get')
  $('.export').empty()

  $.ajax({
    url: './backend/controllers/dormitory.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      $('.h1').empty();
      document.title = 'Общежитие'
      let Dorm = JSON.parse(_data)
      $('.h1').append(`<h1>Общежитие</h1>`)
      $('.data').append(`
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
                      <tr>
                        <td>
                          <select name="student_id" class="student_id">

                          </select>
                        </td>
                        <td>
                          <select name="room_id" class="room_id">

                          </select>
                        </td>
                        <td><input type='text' name='orderNum' value='' placeholder='документ'></td>
                        <td><input type='text' name='checkInDate' value='' placeholder='дата заселения'></td>
                        <td><input type='text' name='checkOutDate' value='' placeholder='дата выселения'></td>
                        <td><input type='text' name='notes' value='' placeholder='дополнительно'></td>
                        <td>
                            <a class='plus dorm_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            `)
      
      $(`.plus.dorm_p`).on('click', function () {
        AddDorm()
      })
      let params2 = new FormData()
      params2.append('action', 'get')
      $.ajax({
        url: './backend/controllers/get_student.php',
        type: 'POST',
        data: params2,
        cache: false,
        processData: false,
        contentType: false,
        success: function (_data2) {
          let students = JSON.parse(_data2);
          students.forEach((student) => {
            $(".student_id").append(`
              <option value="${student.Id}">${student.LastName} ${student.FirstName} ${student.MiddleName}</option>
            `)
          })
        },
        error: function (error) {
          alert(`Ошибка запроса ${error}`)
        },
      })
      let params3 = new FormData()
      params3.append('action', 'get')
      $.ajax({
        url: './backend/controllers/get_rooms.php',
        type: 'POST',
        data: params3,
        cache: false,
        processData: false,
        contentType: false,
        success: function (_data3) {
          let rooms = JSON.parse(_data3);
          rooms.forEach((room) => {
            $(".room_id").append(`
              <option value="${room.Id}">${room.Name}</option>
            `)
          })
        },
        error: function (error) {
          alert(`Ошибка запроса ${error}`)
        },
      })
      $('.export').append(`
        <a href="#" class="exportExcel">Экспортировать в Excel</a>
      `)
      $('.exportExcel').on('click', function () {
        window.location.href = 'exportDorm.php';
      })

      Dorm.forEach((dorm) => {
        $('tbody').append(`
                    <tr>
                        <td>
                          <select name="student_id${dorm.Id}" class="student_id${dorm.Id}">

                          </select>
                        </td>

                        <td>
                          <select name="room_id${dorm.Id}" class="room_id${dorm.Id}">

                          </select>
                        </td>

                        <td><input type='text' name='orderNum${dorm.Id}' value='${dorm.OrderNum}' placeholder='документ'></td>
                        <td><input type='text' name='checkInDate${dorm.Id}' value='${dorm.CheckInDate}' placeholder='дата заселения'></td>
                        <td><input type='text' name='checkOutDate${dorm.Id}' value='${dorm.CheckOutDate}' placeholder='дата выселения'></td>
                        <td><input type='text' name='notes${dorm.Id}' value='${dorm.Notes}' placeholder='дополнительно'></td>
                        <td>
                            <a class='edit_pencil dorm_p${dorm.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet dorm_t${dorm.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        let params4 = new FormData()
        params4.append('action', 'get')        
        $.ajax({
          url: './backend/controllers/get_rooms.php',
          type: 'POST',
          data: params4,
          cache: false,
          processData: false,
          contentType: false,
          success: function (_data3) {
          let rooms = JSON.parse(_data3);
          rooms.forEach((room) => {
            if(room.Id == dorm.Room_Id){
              $(`.room_id${dorm.Id}`).append(`
                <option value="${room.Id}">${room.Name}</option>
              `)
            }
          })
          rooms.forEach((room) => {
            if(room.Id != dorm.Room_Id){
              $(`.room_id${dorm.Id}`).append(`
                <option value="${room.Id}">${room.Name}</option>
              `)
            }
          })
          },
          error: function (error) {
            alert(`Ошибка запроса ${error}`)
          },
        })
        $.ajax({
          url: './backend/controllers/get_student.php',
          type: 'POST',
          data: params4,
          cache: false,
          processData: false,
          contentType: false,
          success: function (_data3) {
          let students = JSON.parse(_data3);
          students.forEach((student) => {
            if(student.Id == dorm.Student_Id){
              $(`.student_id${dorm.Id}`).append(`
                <option value="${student.Id}">${student.LastName} ${student.FirstName} ${student.MiddleName}</option>
              `)
            }
          })
          students.forEach((student) => {
            if(student.Id != dorm.Student_Id){
              $(`.student_id${dorm.Id}`).append(`
                <option value="${student.Id}">${student.LastName} ${student.FirstName} ${student.MiddleName}</option>
              `)
            }
          })
          },
          error: function (error) {
            alert(`Ошибка запроса ${error}`)
          },
        })
        $(`.room_id${dorm.Id}`).append(``)
        $(`.edit_pencil.dorm_p${dorm.Id}`).on('click', function () {
          EditDorm(dorm.Id)
        })
        $(`.trash_backet.dorm_t${dorm.Id}`).on('click', function () {
          DeleteDorm(dorm.Id)
        })
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function EditDorm(id) {
  let stud = document.getElementsByName(`student_id${id}`)[0].value
  let rum = document.getElementsByName(`room_id${id}`)[0].value
  let order = document.getElementsByName(`orderNum${id}`)[0].value
  let inDate = document.getElementsByName(`checkInDate${id}`)[0].value
  let outDate = document.getElementsByName(`checkOutDate${id}`)[0].value
  let notes = document.getElementsByName(`notes${id}`)[0].value

  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('student_id', stud)
  params.append('room_id', rum)
  params.append('orderNum', order)
  params.append('checkInDate', inDate)
  params.append('checkOutDate', outDate)
  params.append('notes', notes)

  $.ajax({
    url: './backend/controllers/dormitory.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      console.log(_data)
    },
    error: function (error) {
      alert(`Ошибка запроса ${error}`)
    },
  })
}

function DeleteDorm(id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/dormitory.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      const entries = Array.from(params.entries())
      console.log(_data)
      console.log(`${entries}`)
    },
    error: function (error) {
      alert(`Ошибка запроса ${error}`)
    },
  })
  $('.data').empty()
  $('.h1').empty()
  LoadDorm()
}

export default LoadDorm

function AddDorm() {
  let stud = document.getElementsByName(`student_id`)[0].value
  let rum = document.getElementsByName(`room_id`)[0].value
  let order = document.getElementsByName(`orderNum`)[0].value
  let inDate = document.getElementsByName(`checkInDate`)[0].value
  let outDate = document.getElementsByName(`checkOutDate`)[0].value
  let notes = document.getElementsByName(`notes`)[0].value

  let params = new FormData()
  params.append('action', 'insert')
  params.append('student_id', stud)
  params.append('room_id', rum)
  params.append('orderNum', order)
  params.append('checkInDate', inDate)
  params.append('checkOutDate', outDate)
  params.append('notes', notes)

  $.ajax({
    url: './backend/controllers/dormitory.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      console.log(_data)
    },
    error: function (error) {
      alert(`Ошибка запроса ${error}`)
    },
  })
  $('.data').empty()
  LoadDorm()
}
