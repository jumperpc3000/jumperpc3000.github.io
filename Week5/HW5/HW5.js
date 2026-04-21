// Q1
let myString = "Fahad Alsuliman";
let myNumber = 123;
let myBoolean = false;

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log("==============");

// Q2
let person = {
  name: "Fahad",
  age: 48,
  isStudent: true
};

console.log("name:", person.name);
console.log("age:", person.age);
console.log("isStudent:", person.isStudent);
console.log("==============");

// Q3
let myValue = "Hello world";

if (5 > 10) {
  console.log("The condition is true");
} else {
  console.log(myValue);
}
console.log("==============");

// Q4
let siggy = ["fluffy", "round", "baby-boy", "cat"];

console.log(siggy[2]);
console.log("==============");

// Q5
let fruits = ["apple", "banana", "orange", "grape"];

for (let index in fruits) {
  console.log(fruits[index]);
}
console.log("==============");

// Q6
function addTwoNumbers(a, b) {
  return a + b;
}

let result = addTwoNumbers(4, 5);

console.log(result);
console.log("==============");