function person(name, age){
    this.name = name;
    this.age = age;

this.sayhello = function(){
    console.log("hello, my name is" + this.name + "and I am" + this.age + "years")

};
}

let personF = new person("aditya",21);
personF.sayhello();
