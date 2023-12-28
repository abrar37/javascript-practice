//=============== for loop ===============

for (let index = 0; index <= 10; index++) {
    const element = index;
    
    if (index == 5) {
        // console.log("5 num in iteration");
    }
    // console.log(element);
}


for (let i = 1; i < 11; i++) {
    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j < 11; j++) {
        // console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);   
        // console.log(`${i} * ${j} = ${i*j}`);   
    }
    
}

// let myArray = ["flash", "barman", "superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("5 Detected");
        break
    }
    // console.log(`value of i: ${index}`);  
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        // console.log("5 Detected");
        continue
    }
    // console.log(`value of i: ${index}`);  
}


//=============== while loop ===============

// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i = i + 2; 
// }


let myArray = ["flash", "barman", "superman"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is: ${myArray[arr]}`);
    arr = arr + 1
    
}

do {
    // console.log(`Value is: ${myArray[arr]}`);
    arr++
} while (arr < myArray.length);

for (const arr of myArray) {
    // console.log(arr);
    
}


//=============== for of loop ===============

const arr2 =[ 1, 2, 3, 4, 5]
for (const num of arr2) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    // console.log(greet);   
}

//=========== for of loop in Maps ===========
const  map = new Map()
map.set('PK', 'Pakistan')
map.set('KSA', 'Kingdom of Saudia Arebia')
map.set('Fr', 'France')

// console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'PUBG',
//     'game3': '8 Ball'
// }
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }

const languages = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'python'
}
for (const key in languages) {
    // console.log(`${key} having value: ${languages[key]}`);
}

const programming = ["JavaScript", "C++", "ruby", "python"]

for (const key in programming) {
    // console.log(programming[key]);
}

//========= for each loop =========

const coding = ["js", "C++", "ruby", "python", "cpp"]
// coding.forEach(  function (item) { console.log(`${item} is a programing language`); }  )  //Method # 1

// coding.forEach( (item) => { console.log(item); } )  //Method # 2


function printMe(item){
    console.log(item);
}
// coding.forEach(printMe) //Method # 3

// coding.forEach( (item, index, arr) => { console.log(item, index, arr); } )

const myCoding = [
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    },
    {
        langName: "Python",
        langFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
} )