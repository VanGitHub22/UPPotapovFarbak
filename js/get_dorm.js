function LoadDorm() {
  let params = new FormData()
  params.append('action', 'get')

  $.ajax({
    url: './backend/controllers/dormitory.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
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
                        <td><input type='text' name='student_id' value='' placeholder='id студента'></td>
                        <td><input type='text' name='room_id' value='' placeholder='id комнаты'></td>
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
      Dorm.forEach((dorm) => {
        $('tbody').append(`
                    <tr>
                        <td><input type='text' name='student_id${dorm.Id}' value='${dorm.Student_Id}' placeholder='id студента'></td>
                        <td><input type='text' name='room_id${dorm.Id}' value='${dorm.Room_Id}' placeholder='id комнаты'></td>
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
