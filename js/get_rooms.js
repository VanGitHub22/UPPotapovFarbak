function LoadRooms() {
  let params = new FormData()
  params.append('action', 'get')

  $.ajax({
    url: './backend/controllers/get_rooms.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      $('.h1').empty();
      document.title = 'Комнаты'
      let Rooms = JSON.parse(_data)
      $('.h1').append(`<h1>Комнаты</h1>`)
      $('.data').append(`
                <table>
                    <thead>
                        <tr>
                            <td>Наименование</td>
                            <td>Вместимость</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type='text' name='name' value='' placeholder='название'></td>
                        <td><input type='text' name='capacity' value='' placeholder='вместимость'></td>
                        <td>
                            <a class='plus addRoom_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                      </tr>
                    </tbody>
                </table>
            `)
      $(`.plus.addRoom_p`).on('click', function () {
        AddRoom()
      })
      Rooms.forEach((Room) => {
        $('tbody').append(`
                    <tr>
                        <td style="width: 300px;"><input type='text' name='name${Room.Id}' value='${Room.Name}' placeholder='название'></td>
                        <td style="width: 300px;"><input type='text' name='capacity${Room.Id}' value='${Room.Capacity}' placeholder='Вместимость'></td>
                        <td>
                            <a class='edit_pencil room_p${Room.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet room_t${Room.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.room_p${Room.Id}`).on('click', function () {
          EditRoom(Room.Id)
        })
        $(`.trash_backet.room_t${Room.Id}`).on('click', function () {
          DeleteRoom(Room.Id)
        })
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function EditRoom(id) {
  let name = document.getElementsByName(`name${id}`)[0].value
  let capacity = document.getElementsByName(`capacity${id}`)[0].value
  let params = new FormData()

  params.append('action', 'edit')
  params.append('id', id)
  params.append('name', name)
  params.append('capacity', capacity)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/get_rooms.php',
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

function DeleteRoom(id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/get_rooms.php',
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
  $('.h1').empty()
  LoadRooms()
}

export default LoadRooms

function AddRoom() {
  let name = document.getElementsByName(`name`)[0].value
  let capacity = document.getElementsByName(`capacity`)[0].value
  let params = new FormData()

  params.append('action', 'insert')
  params.append('name', name)
  params.append('capacity', capacity)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/get_rooms.php',
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
  LoadRooms()
}