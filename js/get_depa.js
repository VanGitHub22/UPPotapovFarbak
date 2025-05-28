function LoadDepa() {
  let params = new FormData()
  params.append('action', 'get')

  $.ajax({
    url: './backend/controllers/department.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      $('.h1').empty();
      document.title = 'Отделения'
      let Department = JSON.parse(_data)
      $('.h1').append(`<h1>Отделения</h1>`)
      $('.data').append(`
                <table>
                    <thead>
                        <tr>
                            <td>Наименование</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type='text' name='name' value='' placeholder='название'></td>
                        <td>
                            <a class='plus addSt_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                      </tr>
                    </tbody>
                </table>
            `)
      $(`.plus.addSt_p`).on('click', function () {
        AddDepa()
      })
      Department.forEach((Depa) => {
        $('tbody').append(`
                    <tr>
                        <td style="width: 300px;"><input type='text' name='name${Depa.Id}' value='${Depa.Name}' placeholder='название'></td>
                        <td>
                            <a class='edit_pencil depa_p${Depa.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet depa_t${Depa.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.depa_p${Depa.Id}`).on('click', function () {
          EditDepa(Depa.Id)
        })
        $(`.trash_backet.depa_t${Depa.Id}`).on('click', function () {
          DeleteDepa(Depa.Id)
        })
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function EditDepa(id) {
  let name = document.getElementsByName(`name${id}`)[0].value
  let params = new FormData()

  params.append('action', 'edit')
  params.append('id', id)
  params.append('name', name)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/department.php',
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

function DeleteDepa(id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/department.php',
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
  LoadDepa()
}

export default LoadDepa

function AddDepa() {
  let name = document.getElementsByName(`name`)[0].value
  let params = new FormData()

  params.append('action', 'insert')
  params.append('name', name)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/department.php',
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
  LoadDepa()
}
