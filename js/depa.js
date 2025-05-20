function Ajaxx(url, data, success) {
  $.ajax({
    url: url,
    type: 'POST', // важно!
    data: data,
    processData: false,
    contentType: false,
    success: success,
    error: function () {
      console.log('Системная ошибка!')
    },
  })
}

LoadDepartments()
function LoadDepartments() {
  let Data = new FormData()
  Data.append('action', 'get')
  Ajax('./backend/controllers/department.php', Data, function (_data) {
    let Responce = JSON.parse(_data)
    if (Responce.error) alert(Responce.error)
    else {
      /*&???? */
    }
  })
}
