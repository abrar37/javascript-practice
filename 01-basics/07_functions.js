// function sayMyName() {
//   console.log("A");
//   console.log("B");
//   console.log("R");
//   console.log("A");
//   console.log("R");
// }

// sayMyName()

function addTwoNumber(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2
}

// const result = addTwoNumber(9, 6)
// console.log(result);

// console.log(addTwoNumber(3, 5));
// console.log(addTwoNumber(3, "5"));
// console.log(addTwoNumber(3, null));


// function userLoginMessage(userName){
//     if(!userName){
//     // if(userName === undefined){
//         // console.log("Please enter a User Name");
//         return `Please enter a User Name`
//     }
//     return `${userName} Just logged in`
// }

function userLoginMessage(userName = "Unknown User"){
    return `${userName} Just logged in`
}

// console.log(userLoginMessage("Arqam"));
// console.log(userLoginMessage());

// function calculateCartPrice(...num1){  //rest operator to handle multiple values
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 500));

// Objects as Function Perameter
const user = {
    name: "Arqam",
    grade: 21
}
function handleObject(anyObject) {
    console.log(`${anyObject.name} having ${anyObject.grade} grade.`);
}

handleObject(user)
handleObject({
    name: "Ahmad",
    grade: 19
})

// Array as Function Perameter
const newArray = [200, 300, 600]

function returnSecondValue(getArray){
    console.log(getArray[1]);
}

returnSecondValue(newArray)

returnSecondValue([21, 35, 85, 45])

