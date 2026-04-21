let numApples = 9;
let someArray = ["cyborg", "wolverine", "storm", "magneto", "magik"];
let someObject = {
  name: "Siggy",
  type: "Cat",
  isBaby: true,
};
// for loops
// for as long as this conditional is true, please run this block of code.
// to do this i need a value to compare to

for (let i = 1; i <= 9; i++) {
  console.log(`I have counted ${i} apples`);
}

for (let x = 0; x < someArray.length; x++) {
  console.log(`I am ${someArray[x]}`);
}

// for in says for everything in this object, such as an OBJECt or ARRAY, do something
// for in breaks it down like this
// [name, type, isBaby]
// [Siggy, Cat, True]
// in this case key is the value of the property in the form of an array
for (let key in someObject) {
  console.log(`The key is ${key} and the value is ${someObject[key]}`);
}

// in this case, B is the position of the array stored in an array
for (let b in someArray) {
  console.log(b);
  console.log(someArray[b]);
}

let counter = 0;
// do while loops will run once and then check if its true
do {
  console.log("Apples!");
  counter = counter + 1;
} while (counter < 5);

// while loops will check if it's true and then run the loop
counter = 0;
while (counter < numApples) {
  console.log("while apples");
  counter = counter + 1;
}
