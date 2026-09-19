// Global Scope: It can be accessible from anywhere in the program

// let school = "ABC";

// function greet() {
//   console.log(school);
// }

// greet();



// Function Scope: Variable accessible within function boundary
// let school = "ABC";

// function greet() {
//     const name = "Jay";
//     console.log(name);
//     console.log(school);
// }

// console.log(name);
// greet();


// Block Scope: Variables accessible within an block {}
{
    // var address = "Bangalore";
    var address = "Bangalore"
    console.log(address)    
}

console.log(address);

function hello() {
    var age = 30;
    function xyz() {
        console.log("Inside XYZ");
    }

    console.log("Inside Hello");
}

console.log(age);
xyz()
// hello();
// console.log(address);


// const and let : They follow all the 3 scopes
// var: Global and function scope. var doesn't have block scope


let school = "ABC";

function outer() {
  let name = "Rahul";

  function inner() {
    console.log(name);
    console.log(school);
  }

  inner();
}

outer();


// 

function outer() {
  let secret = "Hidden";

  function inner() {
    console.log(secret);
  }

  inner();
}

console.log(secret);


// Example 3:



