const student = {name : 'aditya', age : 21, course : 'BTech'};
Object.preventExtensions(student);

const extensibleStatus = Object.isExtensible(student);

const teacher = { subject : 'maths'}

Object.seal(teacher);
 
let sealedStatus =  Object.isSealed(teacher);

console.log('entensible Status:',  extensibleStatus);
console.log('sealed Status:', sealedStatus)
