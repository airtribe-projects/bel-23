https://developer.mozilla.org/en-US/docs/Web/JavaScript 



JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, garbage-collected, dynamic language, supporting multiple paradigms such as imperative, functional, and object-oriented.


### Compiled Language v/s Interpreted Language (JIT)
let sum =0;
for (let i = 0; i < 1000000; i++) {
  sum += 1;
}


### First Class 
* Be stored in a variable
* passed into another function
* returned from another function
* Stored inside arrays or objects

Example: 
* Variable
* Function 
* Error 



Components which are not first class? 
* operators
function x (op) {
    return 1 op 2;
}

x(+);

let y = +;


* Expressions
let x = if (5>4) 


function performOperation(op) {
    if (operation == "sum") {
        return sum
    }
}


function sum(a, b) {
    return a + b;
}

const operations {
    add: sum, 
    substract: "Not Implemented",
    multiply: "Not Implemented"
}

### Prototype Based
* You don't need to create classes first
* Can directly instantiate an object to inherit from others (Object.prototype)


Ex: 

let x = {};

console.log(x.toString())


let animal = {
    eats: true;
}

let dog = {
    barks: true
}

Object.setPrototype(dog, animal)

### Garbage Collected
Automatically frees up unused memory


let cache = []

setInterval(() => {
    cache.push(new Array(1000000));
}, 1000)


### Dynamic Language
* 