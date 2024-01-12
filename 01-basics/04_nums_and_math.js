const score = 100
const balence = new Number(400)
// console.log(balence.toString().length);
// console.log(balence.toFixed(2));

const otherNum = 123.354
// console.log(otherNum.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));


//=============== Maths ===============
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.3));
// console.log(Math.sqrt(5));
// console.log(Math.min(5, 4, 2, 0, 9, 7, 1));
// console.log(Math.max(5, 4, 2, 0, 9, 7, 1));

// console.log(Math.random());
// console.log(Math.round(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1) + min))


//=============== Date & Time ===============

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 5, 23)
// console.log(myCreatedDate.toDateString());

// let myDate2 = new Date(2023, 0, 23, 5, 3)
// let myDate2 = new Date("2023-01-14")
let myDate2 = new Date("01-14-2023")
// console.log(myDate2.toLocaleString());

// let myTimeStemp = Date.now()
// console.log(myTimeStemp);
// console.log(myDate2.getTime());

// console.log(Math.floor(Date.now()/1000));   // Date in second

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

// console.log(`Date is ${newDate.toLocaleString()} and Time is ${newDate.getTime()}`);

newDate.toLocaleString('default', {
    weekday: "long",
})


