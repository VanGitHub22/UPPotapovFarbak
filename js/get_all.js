import LoadStudents from './get_student.js';
import LoadDepa from './get_depa.js';
import LoadDorm from './get_dorm.js';
import LoadAddSt from './get_addSt.js';

const urlParams = new URLSearchParams(window.location.search);
const paramss = {};
for (const [key, value] of urlParams.entries()) {
    paramss[key] = value;
}
console.log(paramss.page);

if(!paramss['page']){
   LoadStudents();
} else if(paramss.page == "depa"){
    LoadDepa();
} else if(paramss.page == "dorm"){
    LoadDorm();
} else if(paramss.page == "addSt"){
    LoadAddSt();
}