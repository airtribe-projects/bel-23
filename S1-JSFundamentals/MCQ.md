### Q1. Which of the following best describes JavaScript?
A statically typed, compiled, class-based language
A lightweight interpreted (or JIT compiled), prototype-based, dynamic language
A markup language used to structure web pages
A strongly typed, ahead-of-time compiled systems language

(B)

### Q2. Who created JavaScript and in what year?
A. Tim Berners-Lee in 1991
B. James Gosling in 1995
C. Brendan Eich in 1995 at Netscape
D. Guido van Rossum in 1991

(C)

### Q3. What is the main difference between a compiled language and an interpreted language?
A. Compiled languages run line-by-line at runtime; interpreted languages translate the entire program first
B. Compiled languages translate the entire program before execution; interpreted languages translate line-by-line at runtime
C. Compiled languages are always slower than interpreted languages
D. There is no difference; the terms mean the same thing

(B)


### Q4. What does JIT (Just-In-Time) compilation do?
A. It compiles the entire program before execution starts
B. It only interprets code and never compiles
C. It identifies frequently executed (hot) code and compiles it to machine code at runtime for faster reuse
D. It translates machine code back to source code

(C)

### Q5. What does it mean that JavaScript has "first-class functions"?
A. Functions are the most important part of the language and must always be used
B. Functions can be stored in variables, passed as arguments, returned from other functions, and stored in objects/arrays
C. Functions can only be declared at the top level of a file
D. Functions cannot be reassigned once defined


(B)

### Q6. Which of the following is NOT a first-class citizen in JavaScript?
A. Functions
B. Objects
C. Arrays
D. Statements (like `if`)

(D)

### Q7. What sits at the top of the prototype chain in JavaScript (just before `null`)?
A. Array.prototype
B. Function.prototype
C. Object.prototype
D. window

(C)

### Q8. In prototype-based inheritance, how do objects inherit in JavaScript?
A. From classes defined as blueprints
B. Directly from other objects via a `[[Prototype]]` link
C. From interfaces only
D. They do not inherit at all

(B)


### Q9. Which statement about garbage collection in JavaScript is correct?
A. Developers must manually call `free()` to release memory
B. JavaScript has no memory management at all
C. The runtime automatically manages memory and the garbage collector frees unused objects
D. Garbage collection guarantees that memory leaks can never occur

(C)

### Q10. Which of the following can still happen in JavaScript despite garbage collection?
A. Double-free errors
B. Manual deallocation bugs
C. Logical memory leaks (e.g., growing caches that are never cleared)
D. Dangling pointers

(C)


### Q11. What does it mean that JavaScript is a "dynamic" language?
A. Variable types and object structures can change at runtime
B. Code must be compiled before execution
C. Types must be declared explicitly for every variable
D. Functions cannot be modified after declaration

(A)


### Q12. Which keyword declares a variable that CANNOT be reassigned?
A. var
B. let
C. const
D. static

(C)

### Q13. What will happen with the following code?
```js
const age = 20;
age = 200;
```
A. `age` becomes 200
B. It throws a TypeError because `const` cannot be reassigned
C. It silently does nothing
D. It logs `undefined`

(B)


### Q14. Which console method is used to display tabular data in a structured format?
A. console.log()
B. console.warn()
C. console.table()
D. console.error()

(C)

### Q15. What is the purpose of `console.time()` and `console.timeEnd()`?
A. To set the system clock
B. To measure the execution time of a code block
C. To delay execution by a given time
D. To schedule a function to run later


(B)


### Q16. Which of the following values is NOT falsy in JavaScript?
A. 0
B. ""           <!-- Empty String -->
C. "false" 
D. NaN          <!-- Not a Number -->

(C)

### Q17. What does the strict equality operator `===` do?
A. Compares values after converting them to the same type
B. Compares values and types without any type conversion
C. Assigns a value to a variable
D. Checks only reference equality for primitives

(B)

### Q18. What is the output of the following code?
```js
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```
A. Minor
B. Adult
C. undefined
D. true

(B)



### Q19. What does the `break` statement do inside a loop?
A. Skips the current iteration and continues with the next one
B. Pauses the loop for a few milliseconds
C. Exits the loop immediately
D. Restarts the loop from the beginning


(C)



### Q20. What is the output of the following loop?
```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```
A. 0 1 2 3 4
B. 0 1 3 4
C. 0 1
D. 2

(B)

### Q21. Every execution context in JavaScript runs in which two phases?
1. Parsing Phase and Compilation Phase
2. Creation Phase and Execution Phase
3. Allocation Phase and Cleanup Phase
4. Hoisting Phase and Garbage Collection Phase

(B)

### Q22. Which statement about where variables live in memory is most accurate?
A. Primitives always live in stack frames and objects always live in the heap, with no exceptions
B. Primitives are commonly stored in stack frames and objects in the heap, but variables captured by a closure are preserved in the lexical environment (heap) so they outlive the stack frame
C. All variables, primitive or object, are always stored in the heap
D. All variables, primitive or object, are always stored in the stack

(B)


### Q23. What is the output of the following code, based on how the Call Stack works?
```js
function first() {
  second();
  console.log("first");
}

function second() {
  console.log("second");
}

first();
```
A. `first` then `second`
B. `second` then `first`
C. Only `first`
D. Only `second`

(B)

### Q24. What is the output of the following code?
```js
console.log(x);
var x = 10;
```
A. 10
B. ReferenceError
C. undefined
D. null

(C)



### Q25. What is the output of the following code?
```js
greet();

function greet() {
  console.log("Hello");
}
```
A. `ReferenceError`
B. `undefined`
C. `Hello`
D. `TypeError`


### Q26. What is the output of the following code?
```js
{
  let y = 20;
}
console.log(y);
```

A. `20`
B. `undefined`
C. `ReferenceError`
D `null`


### Q27. What is the output of the following code?
```js
console.log(a);
let a = 5;
```
A. `undefined`
B. `5`
C. `null`
D. `ReferenceError`


### Q28. What does "lexical scope" mean in JavaScript?
A. A function's scope is determined by where it is called from at runtime
B. A function's scope is determined by where it is physically written in the source code
C. A function's scope is determined by the `this` binding
D. A function's scope is determined by the call stack order

(B)


### Q29. When JavaScript looks up a variable, in what order does it search the scope chain?
A. Global scope → outer scope → current scope
B. Current scope → parent scope → outer parent scope → global scope
C. Only the current scope; it never searches outside
D. It searches the call stack frames from top to bottom

(B)

### Q30. What is the output of the following code?
```js
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const fn = outer();
fn(); fn(); fn();
```
A. `0 0 0`
B. `1 1 1`
C. `1 2 3`
D. `ReferenceError because counter no longer exists`

(C)



### Q31. Why does `counter` still exist after `outer()` has finished executing in a closure?
A. JavaScript copies `counter` into the global scope automatically
B. The returned `inner` function still references the outer lexical environment, so it is preserved
C. The stack frame of `outer()` is never removed from the call stack
D. `var` variables are always preserved after a function returns

(B)

### Q32. Which statement about closures is most accurate?
A. Closures copy the values of outer variables at the time the inner function is created
B. Closures preserve references to variables in the outer lexical environment, not copies of their values
C. Closures only work with `var`, not `let` or `const`
D. Closures destroy the outer function's variables when execution finishes

(B)


### Q33. Consider the following  implementation:
```js
function memo(fn) {
  const cache = {};
  return function memoizedResponse(p1, p2, p3) {
    const key = JSON.stringify([p1, p2, p3]);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(p1, p2, p3);
    cache[key] = result;
    return result;
  };
}

const memoAdd = memo((a, b, c) => a + b + c);
memoAdd(2, 3, 4);
memoAdd(2, 3, 4);
```
Which concept makes this memoization possible by allowing `cache` to persist across calls to `memoAdd`?
A. Hoisting of the `cache` variable to the global scope
B. A closure preserving the lexical environment containing `cache`
C. The `this` binding of `memoizedResponse`
D. Garbage collection refusing to clean up `cache`

(B)

### Q34. How is the value of `this` determined for a regular (non-arrow) function?
A. Lexically, based on where the function is written in the source code
B. At call time, based on how and by whom the function is called
C. It is always bound to the global object regardless of context
D. It is always bound to the function itself


(B)

### Q35. What is the output of the following code (in non-strict mode, browser)?
```js
const obj = {
  name: "Jay",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet();
const grt = obj.greet;
grt();
```
A. `Jay` then `Jay`
B. `undefined` then `Jay`
C. `Jay` then `undefined` (or empty, since `this` becomes `window`)
D. `ReferenceError` on the second call

(C)

### Q36. Which statement about arrow functions and `this` is correct?
A. Arrow functions have their own `this` based on how they are called
B. Arrow functions always bind `this` to the global object
C. Arrow functions always bind `this` to `undefined`
D. Arrow functions do not have their own `this`; they capture `this` from the lexical scope where they are defined

(D)

### Q37. In strict mode, what is the value of `this` inside a standalone function call like `normal()`?
A. `undefined`
B. The global object (`window` or `global`)
C. The function itself
D. An empty object `{}`

(A)

### Q38. What is the output of the following code?
```js
const obj = {
  name: "Jay",
  greet: function () {
    const innerArrow = () => {
      console.log(this.name);
    };
    innerArrow();
  },
};

obj.greet();
```
A. undefined
B. Jay
C. ReferenceError
D. window

(B)

### Q39. What is the output of the following code (non-strict mode)?
```js
function normal() {
  const name = "Jay";
  const arrFn = () => {
    console.log(this.name);
  };
  arrFn();
}

normal();
```
A. Jay
B. undefined
C. ReferenceError
D. null


(B)


### Q40. Which statement best summarizes the difference between lexical scope and `this`?
A. Lexical scope and `this` are the same thing in JavaScript
B. Lexical scope defines where a function was written (variable access); `this` defines who called the function at runtime
C. Lexical scope defines who called the function; `this` defines where the function was written
D. Both are determined purely at runtime based on the call site

(B)


