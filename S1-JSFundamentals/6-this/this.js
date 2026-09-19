// const student = {
//   name: "Rahul",

//   greet() {
//     console.log(this);
//   }

// };

// // console.log(this);

// student.greet();

// const grt = student.greet;

// grt();

/* What does this refers to? 
* Student Object 

 
this: 
* it referes to the object who is calling it
* It also depends on runtime 
    * Behavious differs in NodeJS and V8

Node
Normal Execution
    this | Top Level | Module.exports
    this | Top Level Function | global
With Strict Mode
    this | Top Level | Module.exports
    this | Top Level Function | undefined


V8/Browser Environment
Normal Execution
    this | Top Level | Window
    this | Top Level Function | Window

With Strict Mode
    this | Top Level | Window
    this | Top Level Function | undefined



*/
// 'use strict'

// console.log(this);

// function test() {
//     console.log(this);
// }

// test();

// 'use strict'
// const userAccount = {
//   balance: 5000,
//   withdraw(amount) {
//     this.balance -= amount; 
//     console.log(this);
//     console.log(`Remaining balance: $${this.balance}`);
//   }
// };

// const wtd = userAccount.withdraw

// userAccount.withdraw(500);

// wtd();



// const userAccount = {
//   balance: 5000,
//   withdraw(amount) {
//     console.log(balance);

//     balance -= amount; 
//     console.log(this);
//     console.log(`Remaining balance: $${balance}`);
//   }
// };

// const wtd = userAccount.withdraw

// userAccount.withdraw(500);

// wtd();  // NaN


/* Value of this in arrow function
Arrow function do not have their own this. They capture this from 'surrounding lexical scope'


*/


// const obj = {
//     name: "Jay",
//     greet: function() {
//         console.log("First:", this);
        

//         const innerArrow = () => {
//             console.log("Inner:", this);
//         }
        
//         function test() {
//             console.log("Test:", this);
//         }

//         innerArrow();
//         test();
//     }
// }


// obj.greet();




// const grt = obj.greet;
// grt();


// const user = {
//     name: "Jay",
//     greetDelayed() {
//         setTimeout(function() {
//             console.log(this.name);
//         }, 1000)
//     }
// }

// user.greetDelayed();


// Use Lexical Scope to solve the problem (Tap and Glue Method)

// const user = {
//     name: "Jay",
//     greetDelayed() {
//         const self = this;
//         setTimeout(function() {
//             console.log(self.name);
//         }, 1000)
//     }
// }

// user.greetDelayed();



// const user = {
//     name: "Jay",
//     greetDelayed() {
//         setTimeout(() =>  {
// //             console.log(this.name);
// //         }, 1000)
// //     }
// // }

// // user.greetDelayed();


// // call, apply , bind

// // Call: Attaches an object to a function and invokes it immediately

// function greet(city, country) {
//   console.log(
//     `Hi, I am ${this.name} from ${city}, ${country}`
//   );
// }

// greet("Bangalore", "India");

// const person = {
//   name: "Jay"
// };

// // person.greet()
// greet.call(person, "Bangalore", "India");

// // Apply: Similar to call the arguments are taken in an array

// greet.apply(person, ["Bangalore", "India"]);

// // bind: Attaches the object to function but doesn't call it

// const boundFn = greet.bind(person);

// boundFn("Bangalore", "India");

// // 

// // const obj = {
// //   name: "Jay"
// // };

// // const arrow = (location) => {
// //   console.log(this.name, location);
// // };

// // arrow.call(obj, "Bangalore");


// //


// const anotherArrow = () => {
//     console.log(this);
//     const innerArrow = () => {
//         console.log(this);
//         console.log(this.name);
//     };
//     innerArrow()
// }

// anotherArrow();

// Question from Ajeet

const obj = {
  dev: "bfe",
  a: function () {
    return this.dev; 
  },
  b() {
    return this.dev;
  },
  c: () => {
    return this.dev;
  },
  d: function () {
    // this --> obj
    return (() => {
      return this.dev;
    })();
  },
  e: function () {
    return this.b();
  }, 
  f: function () {
    // this --> Obj
    return this.b;
  },
  g: function () {
    return this.c();
  }, 
  h: function () {
    return this.c;
  },
  i: function () {
    // this --> obj
    return () => {
      return this.dev;
    };
  },
};

// console.log(obj.a()); 
// console.log(obj.b());  
// console.log(obj.c()); 
// console.log(obj.d());
// console.log(obj.e());
console.log(obj.f()());
console.log(obj.g());
console.log(obj.h()()); 
console.log(obj.i()());




// console.log(obj.a()); 
// console.log(obj.b());  
// console.log(obj.c()); 
// console.log(obj.d());
// console.log(obj.e()); 
// console.log(obj.f()()); 
// console.log(obj.g()); 
// console.log(obj.h()()); 
// console.log(obj.i()());