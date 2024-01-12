// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

const Tea = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderTea: function(){
        console.log(`Tea is not Available`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

Object.defineProperty(Tea, "name", {writable: false, enumerable: false}) //enumerable: false | name is not iterable
// console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

for (let [key, value] of Object.entries(Tea)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}