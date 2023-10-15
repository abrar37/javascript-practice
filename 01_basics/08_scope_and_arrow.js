var c = 300;
let a = 80;

if (true) {
  const a = 40;
  let b = 10;
  // var c = 20
  c = 20;
//   console.log("Inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Jack";

  function two() {
    website = "youtube";
    console.log(userName);
  }

//   console.log(website);
//   two();
}
// one();

if (true) {
    const userName = "Jack";
    if (true) {
        const website = " + youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

//=============== Intresting ===============

// console.log(plusOne(5));

function plusOne(num){
    return num + 1
}



// console.log(plusTwo(9));

const plusTwo = function(num){       // Expression > a variable hold a function
    return num + 2
}


//=============== Arraw Function ===============

const user = {
    userName: "Ahmad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Arqam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let name = "Abrar"
//     console.log(this.name);
// }
// chai() 

// const tea = () => {
//     let name = "Abrar"
//     console.log(this);
//     console.log(this.name);
// }
// tea()

//=============== arrow function ===============
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//=============== implicit return ===============
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({name: "Abrar"});  // Return Object in arrow function

// console.log(addTwo(4, 2));



//========== Immediately Invoked Function Expression  (IIFE) ==========

(function tesJS() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) =>{
  // unamed IIFE
  console.log(`DB CONNECTED IN ARROW FUNCTION, ${name}`);
} )("wp_db");