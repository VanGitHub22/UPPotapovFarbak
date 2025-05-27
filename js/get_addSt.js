function LoadAddSt() {
  document.title = 'Добавить студента'
  $('.h1').append(`<h1>Добавить студента</h1>`)
  $('.data').append(`
          <div class="addSt_block">
            <div class="addSt">
              <input type='text' name='lastName' value='' placeholder='Фамилия' required>
              <input type='text' name='firstName' value='' placeholder='Имя' required>
              <input type='text' name='middleName' value='' placeholder='Отчество' required>
              <input type='text' name='birthDate' value='' placeholder='Дата рождения' required>
              <select name="gender" id="">
                <option value="М">Пол мужской</option>
                <option value="Ж">Пол женский</option>
              </select>
              <input type='text' name='phone' value='' placeholder='Телефон'>
              <select name="education" id="">
                <option value="9 классов">9 классов</option>
                <option value="11 классов">11 классов</option>
              </select>
              <select name="department_id" id="department_id">
                
              </select>
              <input type='text' name='group' value='' placeholder='Группа' required>
              <select name="funding" id="" required>
                <option value="бюджет">бюджет</option>
                <option value="внебюджет">внебюджет</option>
              </select>
              <input type='text' name='admissionYear' value='' placeholder='Дата поступления' required>
              <input type='text' name='graduationYear' value='' placeholder='Год выпуска' required>
              <select name="isExpelled" id="">
                <option value="Да">Отчислент</option>
                <option value="Нет">Учится</option>
              </select>
              <input type='text' name='expulsionDate' value='' placeholder='Год отчисления'>
              <input type='text' name='parent_info' value='' placeholder='Родитель'>
              <input type='text' name='penalties' value='' placeholder='Взыскания'>
              <input type='text' name='notes' value='' placeholder='Заметки'>
              <a class='add_st_btn student_p' href='#'>Добавить студента</a>
            </div>
          </div>
        `)
  $(`.add_st_btn.student_p`).on('click', function () {
    AddSt()
  })

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
      let Department = JSON.parse(_data)
      Department.forEach((Depa) => {
        $('#department_id').append(`
          <option value="${Depa.Id}">${Depa.Name}</option>
        `)
      })
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}
export default LoadAddSt

function AddSt() {
  let begining = true

  let lastName = document.getElementsByName('lastName')[0].value
  let firstName = document.getElementsByName('firstName')[0].value
  let middleName = document.getElementsByName('middleName')[0].value
  !checkFormat(lastName, '[а-яA-Я]', 'lastName')
    ? (begining = false)
    : console.log('true')
  console.log(`begining = ${begining}`)
  !checkFormat(firstName, '[а-яA-Я]', 'firstName')
    ? (begining = false)
    : console.log('true')
  console.log(`begining = ${begining}`)
  !checkFormat(middleName, '[а-яA-Я]', 'middleName')
    ? (begining = false)
    : console.log('true')
  console.log(`begining = ${begining}`)
  let birthDate = document.getElementsByName('birthDate')[0].value
  !checkFormat(birthDate, '/^d{4}[./-]d{2}[./-]d{2}$/', 'birthDate')
    ? (begining = false)
    : console.log('true')
  console.log(`begining = ${begining}`)
  let gender = document.getElementsByName('gender')[0].value
  let phone = document.getElementsByName('phone')[0].value
  !checkFormat(phone, 'phone', 'phone')
    ? console.log('false')
    : console.log('true')
  console.log(`begining = ${begining}`)
  let education = document.getElementsByName('education')[0].value
  let department_id = document.getElementsByName('department_id')[0].value
  let group = document.getElementsByName('group')[0].value
  if (group == '') {
    alert('Группа обязательна для заполнения')
    return
  }
  let funding = document.getElementsByName('funding')[0].value
  let admissionYear = document.getElementsByName('admissionYear')[0].value
  !checkFormat(admissionYear, '/^d{4}[./-]d{2}[./-]d{2}$/', 'admissionYear')
    ? (begining = false)
    : console.log('true')
  console.log(`begining = ${begining}`)
  let graduationYear = document.getElementsByName('graduationYear')[0].value
  !checkFormat(graduationYear, 'num', 'okonch')
    ? (begining = false)
    : console.log('true')
  let isExpelled = document.getElementsByName('isExpelled')[0].value
  let expulsionDate = document.getElementsByName('expulsionDate')[0].value
  !checkFormat(expulsionDate, 'num', 'otchi')
    ? (begining = false)
    : console.log('true')
  console.log(`begining = ${begining}`)
  let parent_info = document.getElementsByName('parent_info')[0].value
  let penalties = document.getElementsByName('penalties')[0].value
  let notes = document.getElementsByName('notes')[0].value
  console.log(`begining = ${begining}`)
  if (begining == false) {
    return
  }

  let params = new FormData()
  params.append('action', 'insert')
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
  params.append('notes', notes)

  $.ajax({
    url: './backend/controllers/get_student.php',
    type: 'POST',
    data: params,
    cache: false,
    processData: false,
    contentType: false,
    success: function (_data) {
      console.log(_data)
    },
    error: function (error) {
      console.log(`Ошибка запроса ${error}`)
    },
  })
}

function checkFormat(input, regular, type) {
  if (regular == '[а-яA-Я]') {
    if (type == 'lastName') {
      if (input != '') {
        if (!input.match(/^[а-яА-Я]+$/)) {
          alert('Фамилия должна содержать только русские буквы')
          return false
        } else {
          return true
        }
      } else {
        alert('Фамилия обязательна для заполнения')
        return false
      }
    } else if (type == 'firstName') {
      if (input != '') {
        if (!input.match(/^[а-яА-Я]+$/)) {
          alert('Имя должно содержать только русские буквы')
          return false
        } else {
          return true
        }
      } else {
        alert('Имя обязательно для заполнения')
        return false
      }
    } else if (type == 'middleName') {
      if (input != '') {
        if (!input.match(/^[а-яА-Я]+$/)) {
          alert('Отчество должно содержать только русские буквы')
          return false
        } else {
          return true
        }
      } else {
        alert('Отчество обязательно для заполнения')
        return false
      }
    }
  } else if (regular == '/^d{4}[./-]d{2}[./-]d{2}$/') {
    if (type == 'birthDate') {
      if (input != '') {
        if (!input.match(/^\d{4}[./-]\d{2}[./-]\d{2}$/)) {
          alert('Дата рождения должна содержать дату в формате XXXX-XX-XX')
          return false
        } else {
          return true
        }
      } else {
        alert('Дата рождения обязательна для заполнения')
        return false
      }
    } else if (type == 'admissionYear') {
      if (input != '') {
        if (!input.match(/^\d{4}[./-]\d{2}[./-]\d{2}$/)) {
          alert('Год поступления должен содержать дату в формате XXXX-XX-XX')
          return false
        } else {
          return true
        }
      } else {
        alert('Год поступления обязателен для заполнения')
        return false
      }
    }
  } else if (regular == 'phone') {
    if (type == 'phone') {
      if (input != '') {
        if (!input.match(/^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/)) {
          alert('Номер телефона должен содержать формат +7(XXX)-XXX-XX-XX')
          return false
        } else {
          return true
        }
      } else {
        alert('Номер телефона обязателен для заполнения')
        return false
      }
    }
  } else if (regular == 'num') {
    if (type == 'okonch') {
      if (input != '') {
        if (!input.match(/^\d{4}$/)) {
          alert('Год выпуска должен содержать формат XXXX')
          return false
        } else {
          return true
        }
      } else {
        alert('Год выпуска обязателен для заполнения')
        return false
      }
    } else if (type == 'otchi') {
      if (input != '') {
        if (!input.match(/^\d{4}$/)) {
          alert('Год отчисления должен содержать формат XXXX')
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    }
  }
}
