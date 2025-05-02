let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // Value  is number because of conversion 
console.log(valueInNumber); // output is NaN means Not a number

// "33" => it gets easily convert into a number from string
// "33abc" => it does not gets convert into a number it gives an outpur of "NaN"
// true => 1; false => 0

let isloggedIn = "tanisha"
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

/*
when 1 is given as an input in isloggedIn it gets convert into true
when empty string is given as an input it get convert into false
when a name is given as an input it gets convert into true
*/

let someNumber = 67
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)
