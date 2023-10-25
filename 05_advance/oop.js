const user = {
    userName: "Abrar",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`UserName: ${this.userName}`);
        // console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());

// console.log(this);

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // return this
}

const userOne = new User("Arqam", 4, true)
const userTwo = new User("Ali", 7, false)

console.log(userOne);
console.log(userTwo);
