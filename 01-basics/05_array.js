//=============== array ===============

const myArr = [0, 1, 2, 3, 4, 5]
const heros = ["Shaktiman", "Spiderman", "Hulk"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(heros[0]);

// Array Methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(90));

// const newArr = myArr.join() // Array converted into string
// console.log(newArr);

//=============== Slice, Splice ===============
// const arrA = [0, 1, 2, 3, 4, 5]
// console.log("Orignal ", arrA);

// console.log("Slice ", arrA.slice(1, 3));
// console.log("After Slice ", arrA);

// console.log("Splice ", arrA.splice(1, 3));
// console.log("After Splice ", arrA);
// console.log(arrA.length)


//=============================================
const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros)  // concat return new array
// console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dcHeros] 
// console.log(allNewHeros);

const otherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(otherArr.flat(1));
// console.log(otherArr.flat(Infinity));

console.log(Array.isArray("wonder-woman"));
console.log(Array.from("wonder-woman"));
console.log(Array.from({title: "wonder-woman"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));