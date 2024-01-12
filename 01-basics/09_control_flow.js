// const isUserLoggedIn = false

// if (2 == "2") {
//     console.log(`2 == "2"`);
// }

// if (2 === "2") {
//     console.log(`2 != "2"`);
// }

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);   // Block Scope
// }

//=============== Short Hand Notaion
// const balance = 1000
// // if (balance > 500) console.log("Test");
// // if (balance > 500) console.log("Test"), console.log("Test2"); //Not recommended
// if (balance < 500) {
//     console.log(`Balance is less then 500`);

// }else if(balance > 500) {
//     console.log(`Balance is greater then 500`);
// }else{
//     console.log(`Balance is 1000`);
// }

const userLoggedin = true;
const debitCard = true;
const loggedinFromGoole = false;
const loggedinFromEmail = true;

// if (userLoggedin && debitCard && 2==2) {
//     console.log(`Allow to buy course`);
// }else{
//     console.log(`Not able to buy course`);
// }

// if (loggedinFromGoole || loggedinFromEmail) {
//     console.log(`User Logged in`);
// }

//=============== Switch Case ===============
// const month = 3
// switch (month) {
//     case 1:
//         console.log(`January`)
//         break;
//     case 2:
//         console.log(`Feb`)
//         break;
//     case 3:
//         console.log(`March`)
//         break;
//     case 4:
//         console.log(`April`)
//         break;
//     default:
//         console.log(`Default Case Matched`);
//         break;
// }

//========= truthy values ==========
// const userEmail = "a@abrar.ai"
// if (userEmail) {
//   console.log("Got User Email");
// } else {
//   console.log("Don't have User Email");
// }

//=============== falsy values ===============
// false, 0, -0, BigInt = 0n, "", null, undefined, NaN

//=============== truthy values ===============
//  "0", 'false', " ", [], {}, function(){}

// const userInfo = []
// if (userInfo.length === 0) {
//   console.log("Array is empty");
// } else {
//   console.log("Array is not empty");
// }

// const userMeta = {}
// if (Object.keys(userMeta).length === 0) {
//   console.log("Object is empty");
// } else {
//   console.log("Object is not empty");
// }


// Null Coalescing Operator (??): null, undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 7
// val1 = undefined ?? 15
val1 = null ?? 20 ?? 45

console.log(val1);

// Terniary Operator
// condition ? true : false

const teaPrice = 100
teaPrice <= 80 ? console.log("less then 80") : console.log("More then 80");