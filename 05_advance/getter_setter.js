class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }


    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}pass`
    }

    set password(value){
        this._password = value
    }

}

const abrar = new User("Abrar@Fb.Com", "Helo@")
console.log(abrar.email);
console.log(abrar.password);


//==== Function base > getters and setters

function UserFunc(email, password){
    this._email = email;
    this._password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toLowerCase()
        },
        
        set: function(value){
            this._email = value
        } 
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toLowerCase()
        },
        
        set: function(value){
            this._password = value
        } 
    })
}

const arqam = new UserFunc("Arqam@email.com", "Chai")
console.log(arqam.email);

//==== Object base > getters and setters

const UserObj = {
    _email: 'tea@chai.com',
    _password: 'abc',

    get email(){
        return this._email
    },

    set email(value){
        this._email = value
    }
}

const hulk = Object.create(UserObj)
console.log(hulk.email);