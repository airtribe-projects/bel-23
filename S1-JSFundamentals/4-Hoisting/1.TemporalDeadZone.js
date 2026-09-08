console.log(x);

greet();

function greet() {
  let message = "Hello";
  console.log(message);
  // return message;
  return greet2();
}

var x = 10;


console.log(x);

greet2();

function greet2() {
  let message = "Hello";
  console.log(message);
}

let x = 10;
