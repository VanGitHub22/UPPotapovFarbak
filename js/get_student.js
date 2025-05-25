function LoadStudents() {
  let params = new FormData()
  params.append('action', 'get')

  $.ajax({
    url: './backend/controllers/get_student.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      document.title = 'Студенты'
      let Students = JSON.parse(_data)
      $('.h1').append(`
                <h1>Студенты</h1>    
            `)
      $('.data').append(`
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
        $('tbody').append(`
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
                `)

        $('tbody')
          .children('tr:last()')
          .find('.vert_dots')
          .on('click', function () {
            LoadStudentById(Studnet.Id)
          })
      })
    },
    error: function (error) {
      console.log('Ошибка запроса', error)
    },
  })
}

function LoadStudentById(id) {
  $('.data').empty()
  $('.h1').empty()

  let params = new FormData()
  params.append('action', 'getEdit')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/get_student.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      document.title = 'Изменить студента'
      let Students = JSON.parse(_data)
      $('.h1').append(`
                <h1>Изменить студента</h1>    
            `)
      $('.data').append(`
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
                <div class='statuses'>
                    <h2>Статусы</h2>
                    <div class='all_statuses'></div>
                </div>
            `)
      Students.forEach((Studnet) => {
        $('.data table tbody').append(`
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
                `)
        $('.edit_pencil').on('click', function () {
          EditStudent(Studnet.Id)
        })
        $('.trash_backet').on('click', function () {
          DeleteStudent(Studnet.Id)
        })
        getSPPPStatus(Studnet.Id)
        getSVOStatus(Studnet.Id)
        getOVZStatus(Studnet.Id)
        getDisStatus(Studnet.Id)
        getOrhapsStatus(Studnet.Id)
        getSocStatStatus(Studnet.Id)
        geRiskStatStatus(Studnet.Id)
        getDormStatus(Studnet.Id)
      })
    },
    error: function (error) {
      console.log('Ошибка запроса')
    },
  })
}

function EditStudent(id) {
  let FIO = document.getElementsByName('FIO')[0].value
  let FIOMas = FIO.split(' ')

  let lastName = FIOMas[0]
  let firstName = FIOMas[1]
  let middleName = FIOMas[2]
  let birthDate = document.getElementsByName('birthDate')[0].value
  let gender = document.getElementsByName('gender')[0].value
  let phone = document.getElementsByName('phone')[0].value
  let education = document.getElementsByName('education')[0].value
  let department_id = document.getElementsByName('department_id')[0].value
  let group = document.getElementsByName('group')[0].value
  let funding = document.getElementsByName('funding')[0].value
  let admissionYear = document.getElementsByName('admissionYear')[0].value
  let graduationYear = document.getElementsByName('graduationYear')[0].value
  let isExpelled = document.getElementsByName('isExpelled')[0].value
  let expulsionDate = document.getElementsByName('expulsionDate')[0].value
  let parent_info = document.getElementsByName('parent_info')[0].value
  let penalties = document.getElementsByName('penalties')[0].value

  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('lastName', lastName)
  params.append('firstName', firstName)
  params.append('middleName', middleName)
  params.append('birthDate', birthDate)
  params.append('gender', gender)
  params.append('phone', phone)
  params.append('education', education)
  params.append('department_Id', department_id)
  params.append('group', group)
  params.append('funding', funding)
  params.append('admissionYear', admissionYear)
  params.append('graduationYear', graduationYear)
  params.append('isExpelled', isExpelled)
  params.append('expulsionDate', expulsionDate)
  params.append('parent_info', parent_info)
  params.append('penalties', penalties)

  $.ajax({
    url: './backend/controllers/get_student.php',
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
}

function DeleteStudent(id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/get_student.php',
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
  LoadStudents()
}

export default LoadStudents

function getSPPPStatus(st_id) {
  let params = new FormData()
  params.append('action', 'get')
  params.append('id', st_id)

  $.ajax({
    url: './backend/controllers/sppp.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      //console.log(_data);
      let sppps = JSON.parse(_data)
      $('.all_statuses').append(`
                <h3>СППП</h3>
                <table class='sppp'>
                    <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Дата получения</td>
                            <td>Причина</td>
                            <td>Присутствовали<br>сотрудники</td>
                            <td>Присутствовали<br>преподаватели</td>
                            <td>Решение</td>
                            <td>Заметки</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type='text' name='orderNumSppp' value='' placeholder='документ'></td>
                        <td><input type='text' name='dateSppp' value='' placeholder='дата заседания'></td>
                        <td><input type="text" name='reasonSppp' value='' placeholder='причина'></td>
                        <td><input type="text" name='attendedStaffSppp' value='' placeholder='учавствовашвие сотрудники'></td>
                        <td><input type="text" name='attendedRepresSppp' value='' placeholder='участвовавшие представители'></td>
                        <td><input type="text" name='decisionSppp' value='' placeholder='решение'></td>
                        <td><input type="text" name='notesSppp' value='' placeholder='дополнительно'></td>
                        <td>
                            <a class='plus sppp_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr>
            `)
      $(`.plus.sppp_p`).on('click', function () {
        AddSppp(st_id)
      })
      sppps.forEach((sppp) => {
        $('.sppp tbody').append(`
                    <tr>
                        <td><input type='text' name='orderNumSppp${sppp.Id}' value='${sppp.OrderNum}' placeholder='документ'></td>
                        <td><input type='text' name='dateSppp${sppp.Id}' value='${sppp.DateSppp}' placeholder='дата заседания'></td>
                        <td><input type="text" name='reasonSppp${sppp.Id}' value='${sppp.Reason}' placeholder='причина'></td>
                        <td><input type="text" name='attendedStaffSppp${sppp.Id}' value='${sppp.AttendedStaff}' placeholder='учавствовашвие сотрудники'></td>
                        <td><input type="text" name='attendedRepresSppp${sppp.Id}' value='${sppp.AttendedRepres}' placeholder='участвовавшие представители'></td>
                        <td><input type="text" name='decisionSppp${sppp.Id}' value='${sppp.Decision}' placeholder='решение'></td>
                        <td><input type="text" name='notesSppp${sppp.Id}' value='${sppp.Notes}' placeholder='дополнительно'></td>
                        <td>
                            <a class='edit_pencil sppp_p${sppp.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet sppp_t${sppp.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.sppp_p${sppp.Id}`).on('click', function () {
          EditSppp(sppp.Id)
        })
        $(`.trash_backet.sppp_t${sppp.Id}`).on('click', function () {
          DeleteSppp(sppp.Id, st_id)
        })
      })
    },
    error: function (error) {
      console.log('Ошибка запроса')
    },
  })
}

function getSVOStatus(st_id) {
  let params = new FormData()
  params.append('action', 'get')
  params.append('id', st_id)

  $.ajax({
    url: './backend/controllers/svo.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      //console.log(_data);
      let sppps = JSON.parse(_data)
      //console.log(sppps);
      $('.all_statuses').append(`
                <h3>СВО</h3>
                <table class='svo'>
                    <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Дата получения</td>
                            <td>Дата завершения</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type='text' name='orderNumSvo' value='' placeholder='документ'></td>
                        <td><input type='text' name='startDateSvo' value='' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateSvo' value='' placeholder='дата конца'></td>
                        <td>
                            <a class='plus svo_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr>
            `)
      $(`.plus.svo_p`).on('click', function () {
        AddSvo(st_id)
      })
      sppps.forEach((sppp) => {
        $('.svo tbody').append(`
                    <tr>
                        <td><input type='text' name='orderNumSvo${sppp.Id}' value='${sppp.OrderNum}' placeholder='документ'></td>
                        <td><input type='text' name='startDateSvo${sppp.Id}' value='${sppp.StartDate}' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateSvo${sppp.Id}' value='${sppp.EndDate}' placeholder='дата конца'></td>
                        <td>
                            <a class='edit_pencil svo_p${sppp.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet svo_t${sppp.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.svo_p${sppp.Id}`).on('click', function () {
          EditSvo(sppp.Id)
        })
        $(`.trash_backet.svo_t${sppp.Id}`).on('click', function () {
          DeleteSvo(sppp.Id, st_id)
        })
      })
    },
    error: function (error) {
      console.log('Ошибка запроса')
    },
  })
}

function getOVZStatus(st_id) {
  let params = new FormData()
  params.append('action', 'get')
  params.append('id', st_id)

  $.ajax({
    url: './backend/controllers/ovzs.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      //console.log(_data);
      let sppps = JSON.parse(_data)
      $('.all_statuses').append(`
                <h3>ОВЗ</h3>
                <table class='ovz'>
                    <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Дата получения</td>
                            <td>Дата завершения</td>
                            <td>Заметки</td>
                        </tr>
                    </thead>
                    <tbody>
                      <td><input type='text' name='orderNumOvz' value='' placeholder='документ'></td>
                        <td><input type='text' name='startDateOvz' value='' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateOvz' value='' placeholder='дата конца'></td>
                        <td><input type="text" name='notesOvz' value='' placeholder='дополнительно'></td>
                        <td>
                            <a class='plus ovz_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                    </tbody>
                </table>
                <hr>
            `)
      $(`.plus.ovz_p`).on('click', function () {
        AddOvz(st_id)
      })
      sppps.forEach((sppp) => {
        $('.ovz tbody').append(`
                    <tr>
                        <td><input type='text' name='orderNumOvz${sppp.Id}' value='${sppp.OrderNum}' placeholder='документ'></td>
                        <td><input type='text' name='startDateOvz${sppp.Id}' value='${sppp.StartDate}' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateOvz${sppp.Id}' value='${sppp.EndDate}' placeholder='дата конца'></td>
                        <td><input type="text" name='notesOvz${sppp.Id}' value='${sppp.Notes}' placeholder='дополнительно'></td>
                        <td>
                            <a class='edit_pencil ovz_p${sppp.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet ovz_t${sppp.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.ovz_p${sppp.Id}`).on('click', function () {
          EditOvz(sppp.Id)
        })
        $(`.trash_backet.ovz_t${sppp.Id}`).on('click', function () {
          DeleteOvz(sppp.Id, st_id)
        })
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function getDisStatus(st_id) {
  let params = new FormData()
  params.append('action', 'get')
  params.append('id', st_id)

  $.ajax({
    url: './backend/controllers/disabilities.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      //console.log(_data);
      let sppps = JSON.parse(_data)
      $('.all_statuses').append(`
                <h3>Инвалидность</h3>
                <table class='disab'>
                    <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Дата получения</td>
                            <td>Дата завершения</td>
                            <td>Тип инвалидности</td>
                            <td>Заметки</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type='text' name='orderNumDis' value='' placeholder='документ'></td>
                        <td><input type='text' name='startDateDis' value='' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateDis' value='' placeholder='дата конца'></td>
                        <td><input type="text" name='disabilityTypeDis' value='' placeholder='тип инвалидности'></td>
                        <td><input type="text" name='notesDis' value='' placeholder='дополнительно'></td>
                        <td>
                            <a class='plus dis_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr>
            `)
      $(`.plus.dis_p`).on('click', function () {
        AddDis(st_id)
      })
      sppps.forEach((sppp) => {
        $('.disab tbody').append(`
                    <tr>
                        <td><input type='text' name='orderNumDis${sppp.Id}' value='${sppp.OrderNum}' placeholder='документ'></td>
                        <td><input type='text' name='startDateDis${sppp.Id}' value='${sppp.StartDate}' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateDis${sppp.Id}' value='${sppp.EndDate}' placeholder='дата конца'></td>
                        <td><input type="text" name='disabilityTypeDis${sppp.Id}' value='${sppp.DisabilityType}' placeholder='тип инвалидности'></td>
                        <td><input type="text" name='notesDis${sppp.Id}' value='${sppp.Notes}' placeholder='дополнительно'></td>
                        <td>
                            <a class='edit_pencil dis_p${sppp.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet dis_t${sppp.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.dis_p${sppp.Id}`).on('click', function () {
          EditDis(sppp.Id)
        })
        $(`.trash_backet.dis_t${sppp.Id}`).on('click', function () {
          DeleteDis(sppp.Id, st_id)
        })
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function getOrhapsStatus(st_id) {
  let params = new FormData()
  params.append('action', 'get')
  params.append('id', st_id)

  $.ajax({
    url: './backend/controllers/get_orhaps.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      //console.log(_data);
      let sppps = JSON.parse(_data)
      $('.all_statuses').append(`
                <h3>Сирота</h3>
                <table class='orh'>
                    <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Дата получения</td>
                            <td>Дата завершения</td>
                            <td>Заметки</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type='text' name='orderNumOrh' value='' placeholder='документ'></td>
                        <td><input type='text' name='startDateOrh' value='' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateOrh' value='' placeholder='дата конца'></td>
                        <td><input type="text" name='notesOrh' value='' placeholder='дополнительно' ></td>
                        <td>
                            <a class='plus orh_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr>
            `)
      $(`.plus.orh_p`).on('click', function () {
        AddOrh(st_id)
      })
      sppps.forEach((sppp) => {
        $('.orh tbody').append(`
                    <tr>
                        <td><input type='text' name='orderNumOrh${sppp.Id}' value='${sppp.OrderNum}' placeholder='документ'></td>
                        <td><input type='text' name='startDateOrh${sppp.Id}' value='${sppp.StartDate}' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateOrh${sppp.Id}' value='${sppp.EndDate}' placeholder='дата конца'></td>
                        <td><input type="text" name='notesOrh${sppp.Id}' value='${sppp.Notes}' placeholder='дополнительно'></td>
                        <td>
                            <a class='edit_pencil orh_p${sppp.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet orh_t${sppp.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.orh_p${sppp.Id}`).on('click', function () {
          EditOrh(sppp.Id)
        })
        $(`.trash_backet.orh_t${sppp.Id}`).on('click', function () {
          DeleteOrh(sppp.Id, st_id)
        })
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function getSocStatStatus(st_id) {
  let params = new FormData()
  params.append('action', 'get')
  params.append('id', st_id)

  $.ajax({
    url: './backend/controllers/socialScolarship.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      //console.log(_data);
      let sppps = JSON.parse(_data)
      $('.all_statuses').append(`
                <h3>Социальная стипендия</h3>
                <table class='scol'>
                    <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Дата получения</td>
                            <td>Дата завершения</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type='text' name='orderNumSoc' value='' placeholder='документ'></td>
                        <td><input type='text' name='startDateSoc' value='' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateSoc' value='' placeholder='дата конца'></td>
                        <td>
                          <a class='plus scol_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>
                      </tr>
                    </tbody>
                </table>
                <hr>
            `)
      $(`.plus.scol_p`).on('click', function () {
        AddScol(st_id)
      })
      sppps.forEach((sppp) => {
        $('.scol tbody').append(`
                    <tr>
                        <td><input type='text' name='orderNumSoc${sppp.Id}' value='${sppp.OrderNum}' placeholder='документ'></td>
                        <td><input type='text' name='startDateSoc${sppp.Id}' value='${sppp.StartDate}' placeholder='дата начала'></td>
                        <td><input type="text" name='endDateSoc${sppp.Id}' value='${sppp.EndDate}' placeholder='дата конца'></td>
                        <td>
                            <a class='edit_pencil scol_p${sppp.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet scol_t${sppp.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.scol_p${sppp.Id}`).on('click', function () {
          EditScol(sppp.Id)
        })
        $(`.trash_backet.scol_t${sppp.Id}`).on('click', function () {
          DeleteScol(sppp.Id, st_id)
        })
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function geRiskStatStatus(st_id) {
  let params = new FormData()
  params.append('action', 'get')
  params.append('id', st_id)

  $.ajax({
    url: './backend/controllers/riskGroup.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      //console.log(_data);
      let sppps = JSON.parse(_data)
      $('.all_statuses').append(`
                <h3>Группа риска</h3>
                <table class='risk'>
                    <thead>
                        <tr>
                            <td>Номер</td>
                            <td>Тип риска</td>
                            <td>Дата получения</td>
                            <td>Дата завершения</td>
                            <td>Причина получения</td>
                            <td>Причина снятия</td>
                            <td>Заметки</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td><input type='text' name='orderNumRisk' value='' placeholder='документ'></td>
                          <td><input type='text' name='typeRisk' value='' placeholder='группа риска'></td>
                          <td><input type='text' name='registrationDateRisk' value='' placeholder='дата регистраци статуса'></td>
                          <td><input type="text" name='removalDateRisk' value='' placeholder='дата снятия'></td>
                          <td><input type="text" name='reasonRisk' value='' placeholder='причина постановки'></td>
                          <td><input type="text" name='removalReasonRisk' value='' placeholder='дата снятия статуса'></td>
                          <td><input type="text" name='notesRisk' value='' placeholder='дополнительно'></td>
                          <td>
                            <a class='plus risk_p' href='#'><img src='./img/plus_white.png'></a>
                          </td>
                      </tr>
                    </tbody>
                </table>
                <hr>
            `)
      $(`.plus.risk_p`).on('click', function () {
        AddRisk(st_id)
      })
      sppps.forEach((sppp) => {
        $('.risk tbody').append(`
                    <tr>
                        <td><input type='text' name='orderNumRisk${sppp.Id}' value='${sppp.OrderNum}' placeholder='документ'></td>
                        <td><input type='text' name='typeRisk${sppp.Id}' value='${sppp.Type}' placeholder='группа риска'></td>
                        <td><input type='text' name='registrationDateRisk${sppp.Id}' value='${sppp.RegistrationDate}' placeholder='дата регистраци статуса'></td>
                        <td><input type="text" name='removalDateRisk${sppp.Id}' value='${sppp.RemovalDate}' placeholder='дата снятия'></td>
                        <td><input type="text" name='reasonRisk${sppp.Id}' value='${sppp.Reason}' placeholder='причина постановки'></td>
                        <td><input type="text" name='removalReasonRisk${sppp.Id}' value='${sppp.RemovalReason}' placeholder='дата снятия статуса'></td>
                        <td><input type="text" name='notesRisk${sppp.Id}' value='${sppp.Notes}' placeholder='дополнительно'></td>
                        <td>
                            <a class='edit_pencil risk_p${sppp.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet risk_t${sppp.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>
                    </tr>
                `)
        $(`.edit_pencil.risk_p${sppp.Id}`).on('click', function () {
          EditRisk(sppp.Id)
        })
        $(`.trash_backet.risk_t${sppp.Id}`).on('click', function () {
          DeleteRisk(sppp.Id, st_id)
        })
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function getDormStatus(st_id) {
  let params = new FormData()
  params.append('action', 'getById')
  params.append('id', st_id)

  $.ajax({
    url: './backend/controllers/dormitory.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      //console.log(_data);
      let sppps = JSON.parse(_data)
      $('.all_statuses').append(`
                <h3>Общежитие</h3>
                <table class='dorm'>
                    <thead>
                        <tr>
                            <td>Комната</td>
                            <td>Номер</td>
                            <td>Дата заселения</td>
                            <td>Дата выселения</td>
                            <td>Заметки</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type='text' name='dateDorm' value=''></td>
                        <td><input type='text' name='orderNumDorm' value=''></td>
                        <td><input type='text' name='dateDorm' value=''></td>
                        <td><input type="text" name='reasonDorm' value=''></td>
                        <td><input type="text" name='reasonDorm' value=''></td>
                        <!--<td>
                          <a class='plus dorm_p' href='#'><img src='./img/plus_white.png'></a>
                        </td>-->
                    </tr>
                    </tbody>
                </table>
                <hr>
            `)
      /*$(`.plus.dorm_p`).on('click', function () {  
          AddDorm(st_id)
      })*/
      sppps.forEach((sppp) => {
        $('.dorm tbody').append(`
                    <tr>
                        <td><input type='text' name='dateDorm${sppp.Id}' value='${sppp.Room_Id}'></td>
                        <td><input type='text' name='orderNumDorm${sppp.Id}' value='${sppp.OrderNum}'></td>
                        <td><input type='text' name='dateDorm${sppp.Id}' value='${sppp.CheckInDate}'></td>
                        <td><input type="text" name='reasonDorm${sppp.Id}' value='${sppp.CheckOutDate}'></td>
                        <td><input type="text" name='reasonDorm${sppp.Id}' value='${sppp.Notes}'></td>
                        <!--<td>
                            <a class='edit_pencil dorm_p${sppp.Id}' href='#'><img src='./img/pencil.png'></a>
                            <a class='trash_backet dorm_t${sppp.Id}' href='#'><img src='./img/trash.png'></a>
                        </td>-->
                    </tr>
                `)
        /*$(`.edit_pencil.dorm_p${sppp.Id}`).on('click', function () {
          EditDorm(sppp.Id)
        })
        $(`.trash_backet.dorm_t${sppp.Id}`).on('click', function () {
          DeleteDorm(sppp.Id, st_id)
        })*/
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

/*СПП*/

function EditSppp(id) {
  let orderNumSppp = document.getElementsByName(`orderNumSppp${id}`)[0].value
  let dateSppp = document.getElementsByName(`dateSppp${id}`)[0].value
  let reasonSppp = document.getElementsByName(`reasonSppp${id}`)[0].value
  let attendedStaffSppp = document.getElementsByName(
    `attendedStaffSppp${id}`
  )[0].value
  let attendedRepresSppp = document.getElementsByName(
    `attendedRepresSppp${id}`
  )[0].value
  let decisionSppp = document.getElementsByName(`decisionSppp${id}`)[0].value
  let notesSppp = document.getElementsByName(`notesSppp${id}`)[0].value
  console.log(id)
  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('orderNum', orderNumSppp)
  params.append('dateSppp', dateSppp)
  params.append('reason', reasonSppp)
  params.append('attendedStaff', attendedStaffSppp)
  params.append('attendedRepres', attendedRepresSppp)
  params.append('decision', decisionSppp)
  params.append('notes', notesSppp)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/sppp.php',
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

function DeleteSppp(id, st_id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/sppp.php',
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
  LoadStudentById(st_id)
}

function AddSppp(st_id) {
  let orderNumSppp = document.getElementsByName(`orderNumSppp`)[0].value
  let dateSppp = document.getElementsByName(`dateSppp`)[0].value
  let reasonSppp = document.getElementsByName(`reasonSppp`)[0].value
  let attendedStaffSppp =
    document.getElementsByName(`attendedStaffSppp`)[0].value
  let attendedRepresSppp =
    document.getElementsByName(`attendedRepresSppp`)[0].value
  let decisionSppp = document.getElementsByName(`decisionSppp`)[0].value
  let notesSppp = document.getElementsByName(`notesSppp`)[0].value
  let params = new FormData()
  params.append('action', 'insert')
  params.append('student_id', st_id)
  params.append('orderNum', orderNumSppp)
  params.append('dateSppp', dateSppp)
  params.append('reason', reasonSppp)
  params.append('attendedStaff', attendedStaffSppp)
  params.append('attendedRepres', attendedRepresSppp)
  params.append('decision', decisionSppp)
  params.append('notes', notesSppp)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/sppp.php',
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
  LoadStudentById(st_id)
}

/*СВО*/

function EditSvo(id) {
  let orderNumSvo = document.getElementsByName(`orderNumSvo${id}`)[0].value
  let startDateSvo = document.getElementsByName(`startDateSvo${id}`)[0].value
  let endDateSvo = document.getElementsByName(`endDateSvo${id}`)[0].value

  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('orderNum', orderNumSvo)
  params.append('startDate', startDateSvo)
  params.append('endDate', endDateSvo)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/svo.php',
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

function DeleteSvo(id, st_id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/svo.php',
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
  LoadStudentById(st_id)
}

function AddSvo(st_id) {
  let orderNumSvo = document.getElementsByName(`orderNumSvo`)[0].value
  let startDateSvo = document.getElementsByName(`startDateSvo`)[0].value
  let endDateSvo = document.getElementsByName(`endDateSvo`)[0].value

  let params = new FormData()
  params.append('action', 'insert')
  params.append('student_id', st_id)
  params.append('orderNum', orderNumSvo)
  params.append('startDate', startDateSvo)
  params.append('endDate', endDateSvo)
  /*const entries = Array.from(params.entries())
  console.log(`${entries}`)*/

  $.ajax({
    url: './backend/controllers/svo.php',
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
  LoadStudentById(st_id)
}

/*ОВЗ*/

function EditOvz(id) {
  let orderNumOvz = document.getElementsByName(`orderNumOvz${id}`)[0].value
  let startDateOvz = document.getElementsByName(`startDateOvz${id}`)[0].value
  let endDateOvz = document.getElementsByName(`endDateOvz${id}`)[0].value
  let notesOvz = document.getElementsByName(`notesOvz${id}`)[0].value

  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('orderNum', orderNumOvz)
  params.append('startDate', startDateOvz)
  params.append('endDate', endDateOvz)
  params.append('notes', notesOvz)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/ovzs.php',
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

function DeleteOvz(id, st_id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/ovzs.php',
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
  LoadStudentById(st_id)
}

function AddOvz(st_id) {
  let orderNumOvz = document.getElementsByName(`orderNumOvz`)[0].value
  let startDateOvz = document.getElementsByName(`startDateOvz`)[0].value
  let endDateOvz = document.getElementsByName(`endDateOvz`)[0].value
  let notesOvz = document.getElementsByName(`notesOvz`)[0].value

  let params = new FormData()
  params.append('action', 'insert')
  params.append('student_id', st_id)
  params.append('orderNum', orderNumOvz)
  params.append('startDate', startDateOvz)
  params.append('endDate', endDateOvz)
  params.append('notes', notesOvz)
  /*const entries = Array.from(params.entries())
  console.log(`${entries}`)*/

  $.ajax({
    url: './backend/controllers/ovzs.php',
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
  LoadStudentById(st_id)
}

/*Инвалидность*/

function EditDis(id) {
  let orderNumDis = document.getElementsByName(`orderNumDis${id}`)[0].value
  let startDateDis = document.getElementsByName(`startDateDis${id}`)[0].value
  let endDateDis = document.getElementsByName(`endDateDis${id}`)[0].value
  let disabilityTypeDis = document.getElementsByName(
    `disabilityTypeDis${id}`
  )[0].value
  let notesDis = document.getElementsByName(`notesDis${id}`)[0].value

  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('orderNum', orderNumDis)
  params.append('startDate', startDateDis)
  params.append('endDate', endDateDis)
  params.append('disabilityType', disabilityTypeDis)
  params.append('notes', notesDis)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/disabilities.php',
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

function DeleteDis(id, st_id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/disabilities.php',
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
  LoadStudentById(st_id)
}

function AddDis(st_id) {
  let orderNumDis = document.getElementsByName(`orderNumDis`)[0].value
  let startDateDis = document.getElementsByName(`startDateDis`)[0].value
  let endDateDis = document.getElementsByName(`endDateDis`)[0].value
  let disabilityTypeDis =
    document.getElementsByName(`disabilityTypeDis`)[0].value
  let notesDis = document.getElementsByName(`notesDis`)[0].value

  let params = new FormData()
  params.append('action', 'insert')
  params.append('student_id', st_id)
  params.append('orderNum', orderNumDis)
  params.append('startDate', startDateDis)
  params.append('endDate', endDateDis)
  params.append('disabilityType', disabilityTypeDis)
  params.append('notes', notesDis)
  /*const entries = Array.from(params.entries())
  console.log(`${entries}`)*/

  $.ajax({
    url: './backend/controllers/disabilities.php',
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
  LoadStudentById(st_id)
}

/*Сироты*/

function EditOrh(id) {
  let orderNumOrh = document.getElementsByName(`orderNumOrh${id}`)[0].value
  let startDateOrh = document.getElementsByName(`startDateOrh${id}`)[0].value
  let endDateOrh = document.getElementsByName(`endDateOrh${id}`)[0].value
  let notesOrh = document.getElementsByName(`notesOrh${id}`)[0].value

  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('orderNum', orderNumOrh)
  params.append('startDate', startDateOrh)
  params.append('endDate', endDateOrh)
  params.append('notes', notesOrh)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/get_orhaps.php',
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

function DeleteOrh(id, st_id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/get_orhaps.php',
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
  LoadStudentById(st_id)
}

function AddOrh(st_id) {
  let orderNumOrh = document.getElementsByName(`orderNumOrh`)[0].value
  let startDateOrh = document.getElementsByName(`startDateOrh`)[0].value
  let endDateOrh = document.getElementsByName(`endDateOrh`)[0].value
  let notesOrh = document.getElementsByName(`notesOrh`)[0].value

  let params = new FormData()
  params.append('action', 'insert')
  params.append('student_id', st_id)
  params.append('orderNum', orderNumOrh)
  params.append('startDate', startDateOrh)
  params.append('endDate', endDateOrh)
  params.append('notes', notesOrh)
  /*const entries = Array.from(params.entries())
  console.log(`${entries}`)*/

  $.ajax({
    url: './backend/controllers/get_orhaps.php',
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
  LoadStudentById(st_id)
}

/*Степуха*/

function EditScol(id) {
  let orderNumScol = document.getElementsByName(`orderNumSoc${id}`)[0].value
  let startDateScol = document.getElementsByName(`startDateSoc${id}`)[0].value
  let endDateScol = document.getElementsByName(`endDateSoc${id}`)[0].value

  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('orderNum', orderNumScol)
  params.append('startDate', startDateScol)
  params.append('endDate', endDateScol)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/socialScolarship.php',
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

function DeleteScol(id, st_id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/socialScolarship.php',
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
  LoadStudentById(st_id)
}

function AddScol(st_id) {
  let orderNumScol = document.getElementsByName(`orderNumSoc`)[0].value
  let startDateScol = document.getElementsByName(`startDateSoc`)[0].value
  let endDateScol = document.getElementsByName(`endDateSoc`)[0].value

  let params = new FormData()
  params.append('action', 'insert')
  params.append('student_id', st_id)
  params.append('orderNum', orderNumScol)
  params.append('startDate', startDateScol)
  params.append('endDate', endDateScol)
  /*const entries = Array.from(params.entries())
  console.log(`${entries}`)*/

  $.ajax({
    url: './backend/controllers/socialScolarship.php',
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
  LoadStudentById(st_id)
}

/*группа риска*/

function EditRisk(id) {
  let orderNumRisk = document.getElementsByName(`orderNumRisk${id}`)[0].value
  let typeRisk = document.getElementsByName(`typeRisk${id}`)[0].value
  let startDateRisk = document.getElementsByName(`registrationDateRisk${id}`)[0]
    .value
  let removalDateRisk = document.getElementsByName(`removalDateRisk${id}`)[0]
    .value
  let reasonRisk = document.getElementsByName(`reasonRisk${id}`)[0].value
  let removalReasonRisk = document.getElementsByName(
    `removalReasonRisk${id}`
  )[0].value
  let notesRisk = document.getElementsByName(`notesRisk${id}`)[0].value

  let params = new FormData()
  params.append('action', 'edit')
  params.append('id', id)
  params.append('orderNum', orderNumRisk)
  params.append('type', typeRisk)
  params.append('registrationDate', startDateRisk)
  params.append('removalDate', removalDateRisk)
  params.append('reason', reasonRisk)
  params.append('removalReason', removalReasonRisk)
  params.append('notes', notesRisk)
  const entries = Array.from(params.entries())
  console.log(`${entries}`)

  $.ajax({
    url: './backend/controllers/riskGroup.php',
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

function DeleteRisk(id, st_id) {
  let params = new FormData()
  params.append('action', 'delete')
  params.append('id', id)

  $.ajax({
    url: './backend/controllers/riskGroup.php',
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
  LoadStudentById(st_id)
}

function AddRisk(st_id) {
  let orderNumRisk = document.getElementsByName(`orderNumRisk`)[0].value
  let typeRisk = document.getElementsByName(`typeRisk`)[0].value
  let startDateRisk =
    document.getElementsByName(`registrationDateRisk`)[0].value
  let removalDateRisk = document.getElementsByName(`removalDateRisk`)[0].value
  let reasonRisk = document.getElementsByName(`reasonRisk`)[0].value
  let removalReasonRisk =
    document.getElementsByName(`removalReasonRisk`)[0].value
  let notesRisk = document.getElementsByName(`notesRisk`)[0].value

  let params = new FormData()
  params.append('action', 'insert')
  params.append('student_id', st_id)
  params.append('orderNum', orderNumRisk)
  params.append('type', typeRisk)
  params.append('registrationDate', startDateRisk)
  params.append('removalDate', removalDateRisk)
  params.append('reason', reasonRisk)
  params.append('removalReason', removalReasonRisk)
  params.append('notes', notesRisk)
  /*const entries = Array.from(params.entries())
  console.log(`${entries}`)*/

  $.ajax({
    url: './backend/controllers/riskGroup.php',
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
  LoadStudentById(st_id)
}
