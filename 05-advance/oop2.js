function user(username, email){
    this.username = username,
    this.email = email
}

user.prototype.logMe = function(){
    console.log(`logMe: ${this.username}`);
}
const chai = new user("tea12", "tea@lipton.com")
chai.logMe()