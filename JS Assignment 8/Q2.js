function person(name, age){
    this.name =  name;
    this.age = age;
}
person.prototype.sayHello = function(){
    console.log("hello, my name is  " + this.name + " and i am " + this.age + " year old. ");
};

function Employee(name, age, designation){
    person.call(this,name,age);
this.designation = designation;
}
Employee.prototype = Object.create(person.prototype);
Employee.prototype.getDetails = function(){
    console.log("name: " + this.name + " ,age:" + this.age + " ,designation:" + this.designation);
};

let Employee1 = new Employee ("rohit", 25, "engineer");

Employee1.sayHello();

Employee1.getDetails()