function edit(clId){
    let body = document.querySelector("body")
    let id = clId

    let noti = document.createElement("div")
    noti.classList.add("noti")

    let h4 = document.createElement("h4")
    h4.textContent = "Редактирование записи"
    noti.appendChild(h4)

    let backZ = document.createElement("a")
    backZ.href = "#"
    backZ.onclick = off()
    backZ.textContent = "Назад"
    noti.appendChild(backZ)


    let editZ = document.createElement("a")
    editZ.href = "edit.php?id="+id;
    editZ.textContent = "Изменить"
    noti.appendChild(editZ)

    let removeZ = document.createElement("a")
    removeZ.href = "index.php?method=del&id="+id;
    removeZ.textContent = "Удалить"
    noti.appendChild(removeZ)
    
    body.appendChild(noti)
}


function off(){

}