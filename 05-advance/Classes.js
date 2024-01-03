// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changedUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changedUserName());


//===== Behind the Scene =====
function user(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changedUserName = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new user("Tea", "tea@gmail.com", "789")
console.log(tea.encryptPassword());
console.log(tea.changedUserName());

