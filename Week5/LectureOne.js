// javascript does three things 

// it can manipulate content on the HTML side 
// it can manipulate CSS 
// manipulates and calculates data for us 

// Javascript is a programming language 
// Javascript executes instructions using statements 
// Javascript EXECUTES OR EVALUATES in order of statement 

// Javascript uses two types of values. 

//a literal value is a value that is stated 

console.log(3.14) //it is literally 3.14 

// the next type of value is call a variable. 
// variables are used to store DATA for reference later or manipulation. 
// variables can store LITERALS for use later 
// variables can be declared and then used later 

// there is the variable declaration for a CONSTANT VARIABLE ie one that cannot be changed. it's declared using the KEYWORD const 

const pi = 3.14 // this is holding a literal 

// the next one is a VARIABLE VARIABLE it is used by calling the keyword let or var 

let undefinedVariable // undefined 
let definedVariable = "Hello World" //defined variable 
var variableUsingVar = "This variable uses the var keyword"


console.log(typeof definedVariable)

// number  (manipulated and can be displayed)

let numberVar = 3.41 
numberVar = 4 
numberVar = 10e3 
numberVar = -3.4444444444444

//  string (manipated and can be displayed)

let string = "Some String"

// to combine strings and numbers in a single statement, there are two ways to do this. 

console.log("This is my string "+numberVar) // this + sign when mixing two variable data TYPES is called concatonation 

console.log(`This is a string that has been interpolated with a number value ${numberVar}`)

let firstName = "Fahad"
let lastName = "Alsulaiman"

console.log(`\nMy name is ${firstName} ${lastName}\n`)



// arrays  are essentially lists. Arrays start at position 0. 

let someArray = [1,"hello", [4,5,"banana"], {type: "object", otherType: "array"}]

//To call an array, we use this format: arrayVariableName[position of variable]. \nSo, for example if I wwanted to call "hello", it would be ${someArray[1]}

console.log(`So, for example if I wwanted to call "hello", it would be someARray[1] ${someArray[1]}`)

// objects. Objects are a combination of data types in a strict data structure.  Let's change this to something familiar, like a CSS pattern! 

let h1 = {
  color: "white", 
  fontSize: "20px",
  padding: "10px", 
  marginBottom: "10px"
}


// to add values to an object, it's really simple. 

h1.fontFamily = "Arial"

// to call object values, we just need the nameoftheObject.property 

console.log(`What color is h1? It is ${h1.color}`)




