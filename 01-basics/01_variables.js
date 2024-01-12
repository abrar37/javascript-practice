// const accountId = 14425  // Can not be changeable
// let accountEmail = "abrar@mail.com" //can not be changeable out of scope
// var accountPassword = "124cfw" // changeable out of scope

// accountCity = "Lahore"

// let accountState;
// accountEmail = "hello@gmail.com"

// // console.log(accountId);

// // console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// console.log(typeof accountId);

//=============== About String ===============

//  const name = "Abrar"
//  const repoCount = 50
// //  console.log(name + repoCount + " id");
//  console.log(`My name is ${name} and my total repo are ${repoCount}.`);
// console.log(name[3]);

const gameName = new String("Nitro-Pack");
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));
// console.log(gameName.substring(0, 3));
// console.log(gameName.slice(-8, 3));

// const Name = new String("   Abrar-kh-Nitro     ");
// console.log(Name.trim());
// console.log(Name.split("-"));

const url = "https://arqam.com/arqam%20com"
console.log(url.replace("%20", "-"));
console.log(url.replace("arqam", "abrar"));
console.log(url.includes("Abrar"));
