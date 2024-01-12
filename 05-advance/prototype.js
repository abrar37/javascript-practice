// let myName = "Abrar    "

// console.log(myName.length);

// // console.log(myName.trueLength); // As we want 

let myheros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abrar = function(){
    console.log(`Abrar is present in all objects`);
}

// heroPower.abrar()
// myheros.abrar()

Array.prototype.heyAbrar = function(){
    console.log(`Abrar says hello`);
}

// myheros.heyAbrar()
// heroPower.heyAbrar()



//======= inheritance old syntax =======

const User = {
    name: "Tea", 
    email: "tea@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Course",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modren syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "TeaAndJS    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`True length is: ${this.trim().length}`);
}

// anotherUserName.trueLength()

// "Hello Js".trueLength()
// "iceTea".trueLength()