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