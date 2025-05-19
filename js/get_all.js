import LoadStudents from './get_student.js';

const urlParams = new URLSearchParams(window.location.search);
const paramss = {};
for (const [key, value] of urlParams.entries()) {
    paramss[key] = value;
}

if(!paramss['page']){
    LoadStudents();
} else if(paramss['page'] == "depa"){
    
}