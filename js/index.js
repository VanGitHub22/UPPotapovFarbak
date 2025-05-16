function edit(clId){
    let body = document.querySelector("body")
    let id = clId

    let noti = document.createElement("div")
    noti.classList.add("noti")

    let h4 = document.createElement("h4")
    h4.textContent = "Редактирование записи"
    noti.appendChild(h4)

    let block_btn = document.createElement("div")
    block_btn.classList.add("block_btn")

    let backZ = document.createElement("a")
    backZ.href = "#"
    backZ.onclick = off
    backZ.textContent = "Назад"
    block_btn.appendChild(backZ)


    let editZ = document.createElement("a")
    editZ.href = "edit.php?id="+id;
    editZ.textContent = "Изменить"
    block_btn.appendChild(editZ)

    let removeZ = document.createElement("a")
    removeZ.href = "index.php?method=del&id="+id;
    removeZ.textContent = "Удалить"
    block_btn.appendChild(removeZ)

    noti.appendChild(block_btn)
    
    body.appendChild(noti)
}


function off(){
    let body = document.querySelector("body")
    let noti = document.querySelector(".noti")
    body.removeChild(noti)
}

// еее