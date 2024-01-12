//=============== Singleton ===============
// Object.create

//=============== Object literals ===============
const userSybmol = Symbol("outerKey");

const jsUser = {
  name: "Abrar",
  "fun name": "Abrar A",
  age: 22,
  [userSybmol]: "objKey",
  email: "abrar@tkxel.com",
  location: "lahore",
  isLoggedIn: false,
  loginDays: ["Monday", "Saturday", "Friday"],
};

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser.userSybmol);
// console.log(typeof(jsUser.userSybmol));

// console.log(jsUser[userSybmol]);
// console.log(typeof(jsUser[userSybmol]));

jsUser.email = "abrar@google.com";
// console.log(jsUser["email"]);

// Object.freeze(jsUser) // Freeze the object. Change never propogate

jsUser.email = "abrar@chatgpt.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS user");
};

jsUser.greetingName = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());
// console.log(jsUser.greetingName());

//================================================

// const instaUser = new Object()

const instaUser = {}

instaUser.name = "Sammy"
instaUser.id = "1ab2"
instaUser.isLoggedIn = false

// console.log(instaUser);

// Nested Objects
const regularUser = {
  fullName: {
    userFullName: {
      firstName: "Abrar",
      lastName: "Ahmad",
    },
  },
};

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName.lastName);

const target = { 1: "a", 2: "b" };
const source = { 3: "c", 4: "d" };

// const obj3 = {target, source}
// const obj3 = Object.assign(target, source) // All values of other objects insters in target object
// const obj3 = Object.assign({}, target, source) // All values of other objects insters in empty object

// console.log(obj3);
// console.log(target);

// const obj3 = {...target, ...source}
// console.log(obj3);

const dbUsers = [
  {
    id: "12h",
    email: "h@gmail.com",
  },

  {
    id: "9f",
    email: "f@gmail.com",
  },
]

// console.log(dbUsers[1]);
// console.log(dbUsers[1].email);


// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty("isLoggedIn"));



// Object Destructuring 
const course = {
  courseName: "Js Basics",
  coursePrice: 999,
  courseInstructor: "Hitesh"
}

console.log(course.courseInstructor);

// Way # 1
const {courseInstructor} = course
console.log(courseInstructor);

// Way # 2
const {courseInstructor: instr} = course
console.log(instr);

// use case in React
const navBar = ({company}) => {

}
navBar(company = "fecto")