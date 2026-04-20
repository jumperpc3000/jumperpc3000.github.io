
//booleans are either true or false 

let trueFalse; 

trueFalse= 4>5 
console.log(trueFalse)

trueFalse= 5>4
console.log(trueFalse)

// lets talk operators 

// numbers first 

let a = 4; 
let b = 5; 
let checkVar; 

// greater than (noninclusive) and it utilizes the (>) 

checkVar = b > a 
console.log(`b > a ${checkVar}`)

// less than (noninclusive) and it utilizes the (<)

checkVar = a < b 
console.log(`a < b ${checkVar}`)

// greater than OR EQUAL TO  (>=) and it is inclusive

checkVar = b>=a 
console.log(`b>=a ${checkVar}`)

// less than or EQUAL TO (<=) and is inclusive 
checkVar  = a<=b
console.log(`a<=b ${checkVar}`)

// to compare two values you MUST use (==)
// a single (=) is an assignment operators
// double (==) is a compartive operator 

console.log(`These two values are equal? ${4==4}`)
console.log(`these two STRINGS are the same ${"cat"=="cat"}`)

// double (==) is that it checks if values are the same 
// a triple (===) checks if values are the same and the DATA TYPE is the same

let numVar = 4 
let stringVar = "4"

console.log(`double ==: ${numVar == stringVar}`)
console.log(`triple ===: ${numVar === stringVar}`)


// IS NOT is expressed with != 

console.log(4 != "Hello")
console.log(5!=4)

// what if we wanted to do != > or < 

// quick exercise using the expression prompt 

let val1 = Number(prompt("Provide val 1"))
let val2 = Number(prompt("Provide val 2"))



console.log(`GREATER THAN ${val1>val2}`)
console.log(`LESS THAN > ${val1<val2}`)

val1 = prompt("Provide a number")
val1 = Number(val1) 
val2 = prompt("Provide provide the SAME number")

console.log(`double ==: ${val1 == val2}`)
console.log(`triple ===: ${val1 === val2}`)

console.log(`is not !=: ${val1 != val2}`)
console.log(`is not value and !==: ${val1 !== val2}`)





















