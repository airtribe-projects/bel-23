/*
    Helps devs print information on screen
    console.log
*/
// Console.log
const course = "BEL23";

const fruits = ["Apple", "orange"];

console.log("Hello World");

console.log(4);

console.log("Hello World", 4, course, fruits);

console.log(`Hello World ${course}, ${fruits}`);



// console.warn, console.error

const users = [
  { name: "Jay", age: 20 },
  { name: "Sam", age: 25 }
];

console.log(users);

console.table(users);

// Measuring execution time
const start = Date.now()

for (let i = 0; i < 1000000; i++) {}

console.log("Time taken", Date.now() - start);


console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop")