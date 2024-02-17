const student = {
    name : "aditya" ,
    age : 21 ,
    major : "computer Engg",
    GPA : 4.2 ,
    Isenrolled:true,
}

function displayStudentInfomation(studentobj)
{
    for(let property in studentobj) {
        console.log(`${property}: ${studentobj[property]}`);
    }
}
displayStudentInfomation(student)
