// invoking functions 
// calling functions 
// parameters to functions 
// returning values of a function 

// how to invoke a function 

/*function aName (var1, var2) {

}*/ 

function someFunction () {
console. log ("Hello")
}
console. log("Some function is waiting....")


const pi =3.14;  //global variable and is accessible across all of these function 

function helloWorld () {
  console.log("Hello World" + pi)
}
// to execute or CALL a function 
helloWorld(); 


//parameters are values that are used in the function that are passed 
// functions are powerful because they RETURN a value 
function add(num1, num2){
 return num1+num2 
}

// calling a function with parameters 
let x = add(2, 2)
console.log(x)

// learning about scope 
/* variables defined in the function are only accessible to the function
*/
function scopeVar(){
  let stringVar = "Hello there!"
  console.log(stringVar)
}

scopeVar(); 



