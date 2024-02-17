const student = [
{id:1 , firstname: "aditya" , lastname: "patil" , age: 20 , grade: "a"},
{id:2 , firstname: "raj" , lastname: "shende" , age: 21 , grade: "b"},
{id:3 , firstname: "nilesh" , lastname: "patil" , age: 18 , grade: "c"},
{id:4 , firstname: "rupesh" , lastname: "karnuke" , age: 19 , grade: "d"},
];


// 1. to add new studant in the given array we have to  creat a new function a
// addstudant and use it

function  addstudant(newStudent)
{
    student.push(newStudent);
}
addstudant({id:5 , firstname: "nayan" , lastname: "shinde" , age: 17 , grade: "c"},
);
console.log(student);

// 2.to update student info in  array following function is useful
function updateStudent(id, updateinfo){
    const index = student.findIndex((student) => student.id === id);
    if (index !== -1) {
        student[index] = { ...student[index], ...updateinfo};
    }
}
updateStudent(3, {firstname:"karan"})
console.log(student)

// 3 to delete any record or student data from array following function is used

function deleteStudent(id){
    const index = student.findIndex((student) => student.id === id);
    if (index !== -1) {
        student.splice(index, 1);
    }
}
 deleteStudent(1);
 console.log(student)

//3 list of all students

function listAllStudent(){
    student.forEach((student) => {
        console.log(`"list of all Students:"${student.firstname}${student.lastname},${student.age},${student.grade}`)
    })
}
listAllStudent(student)

// 4 find studant by grade

function findStudentsByGrade(grade){
    return student.filter((student) => student.grade === grade);
}
console.log("Students with grade 'c':", findStudentsByGrade("c"));

// 5 create function for calculateAverageAges
function calculateAverageAges() {
    const totalAge = student.reduce((sum, student) => sum + student.age, 0);
    return totalAge / student.length;
  }
console.log("Average Age:", calculateAverageAges());







