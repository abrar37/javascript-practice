const coding = ["js", "C++", "ruby", "python", "cpp"]

const values = coding.forEach( (item) =>{
    // console.log(item);
    return item
})

// console.log(values);

//========= Filter =========
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const myNums = nums.filter( (item) => item > 4 );

const myNums = nums.filter( (item) => {
    return item > 4
});

// console.log(myNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook = books.filter( (bk) => bk.genre === 'Science');
userBook = books.filter( (bk) => bk.publish >= 1995);

userBook = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'Science'
});
    
// console.log(userBook);



//========= Map =========
const mNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newNums = mNums.map( (item) => item +10 );
newNums = mNums.map( (item) => {return item * item} );

// console.log(newNums);

// ======   Chaning / mNums.map().map().filter  ======

newNums = mNums
            .map( (item) => item * item )
            .map( (item) => item + 3 )
            .filter( (item) => item > 25 )

// console.log(newNums);

//========= Reduce =========

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);
// // Expected output: 104

const myArr = [1, 2, 3]

// const myTotal = myArr.reduce(function (acc, currVal) {
//     console.log(`accumulator value: ${acc} and current value: ${currVal}`);
//     return acc + currVal
// }, 3)

const myTotal = myArr.reduce( (acc, currVal) => acc + currVal, 0) //Using Arrow Function

// console.log(myTotal);

// ==== Example ====
const shoppingCart = [
    {
        itemName: "Shirt",
        price: 1999
    },
    {
        itemName: "Shows",
        price: 3700
    },
    {
        itemName: "Trouser",
        price: 2400
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);