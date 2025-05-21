import LoadStudents from './get_student.js';
import LoadStudentById from './edit_student.js';

const urlParams = new URLSearchParams(window.location.search);
const paramss = {};
for (const [key, value] of urlParams.entries()) {
    paramss[key] = value;
}

function editSt(id){
    console.log(id);
    return id
}

if(!paramss['page']){
    /*if(editSt()){
        LoadStudentById(editSt(id));
    } else {
        LoadStudents();
    }*/
   LoadStudents();
} else if(paramss['page'] == "depa"){
    
}