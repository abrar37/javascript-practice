//====== Promise One ======
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed");
});

//====== Promise Two ======
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise Two Resolved");
});

//====== Promise Three ======
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ userName: "Abrar", email: "abrar@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

//====== Promise Four ======
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userId: 564, userName: "Arqam" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userId;
  })
  .then((rUserId) => {
    console.log(rUserId);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));

//====== Promise Five ======
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userId: 564, userName: "Promise Five" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
