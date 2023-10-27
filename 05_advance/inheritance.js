class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const hulk = new Teacher("Hulk", "hulk@marvel.com", "123")
// hulk.addCourse()
// hulk.logMe()

const ironMan = new User("IronMan")
// ironMan.logMe()

// console.log(hulk instanceof User);
// console.log(ironMan instanceof Teacher);

// console.log(hulk.createId());
// console.log(ironMan.createId());

