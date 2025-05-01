const accountId=1231
let accountEmail ="tanisha@gmail.com"
var accountpassword =7678
accountCity = "Kolkata"
let accountState;

// accountId=1231 not allow bcuz const variable is used before 
accountEmail ="nisha@gmail.com"
accountpassword = 6718
accountCity = "Jaipur" 


// console.log(accountId);
// console.log(accountEmail)
// console.log(accountpassword)
// console.log(accountCity)

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountpassword,accountCity,accountState]);