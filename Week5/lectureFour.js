let anyNum = Number(prompt("Pick a number"));

//console.log(anyNum);
console.log(`the number is ${anyNum}`);
//AND GATE says ALL conditionals MUST be true, to be evaluated as TRUE I IT IS DENOTED BY THE SYMBOL &&
// THE OR gate says only ONE conditional must be true to be evaluated as TRUE
// OR DENOATED BY the symbols || shift+\

if (anyNum > 5 && anyNum < 10) {
  console.log("AND success!");
} else {
  console.log("AND failure");
}

// if statement will check if a conditional is TRUE and if it is TRUE to run the code,if not -- ELSE
// I if this is true, what's going to happen?
if (anyNum > 5 || anyNum <= 10) {
  console.log("OR SUCCESS");
} else {
  console.log("OR FAILURE");
}

// SWITCH STATEMENTS
// I know that there is some value, but I have set use cases for it.
//switch is for values that DO NOT fall in a range, and are consided DISCRETE
// hey i have this value, what do i do with it?|
let day;
let method = new Date().getDay();
switch (10
   //method // this returns a number between 0-6
) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "there was an error"; // for troubleshooting
}

console.log(`we got ${method} and therefore it is ${day}`);
