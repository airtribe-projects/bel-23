1. What is the primary purpose of `npm`?
   - A) Run packages without installing them
   - B) Install and manage project dependencies
   - C) Compile JavaScript into machine code
   - D) Replace `package.json`

(B)

2. What is the primary purpose of `npx`?
   - A) Update Node.js runtime
   - B) Permanently install global packages
   - C) Run packages without permanent installation
   - D) Create `package-lock.json` manually
(C)


3. Which command initializes a new Node.js project and creates `package.json`?
   - A) `npm init`
   - B) `npm start`
   - C) `npm run init`
   - D) `node init`

(A)

4. Which command installs all dependencies listed in `package.json`?
   - A) `npm install --all`
   - B) `npm init`
   - C) `npm install`
   - D) `npm run install`


(C)

5. Which command adds a package to `dependencies` for runtime usage?
   - A) `npm install --save-dev <package>`
   - B) `npm install <package>`
   - C) `npx <package>`
   - D) `npm lock <package>`

(B)

6. Which command adds a package to `devDependencies`?
   - A) `npm install --save-dev <package>`
   - B) `npm install --prod <package>`
   - C) `npx install <package>`
   - D) `node install <package>`

(A)


7. In Semantic Versioning (`major.minor.patch`), which part usually indicates breaking changes?
   - A) Patch
   - B) Minor
   - C) Major
   - D) Build

(C)


8. What does a patch version update usually represent?
   - A) Breaking API redesign
   - B) Backward-compatible bug fixes
   - C) New product launch
   - D) Migration to ESM only

(B)

9. What is the main role of `package-lock.json`?
   - A) Define project scripts and metadata
   - B) Record exact dependency tree for deterministic installs
   - C) Replace `node_modules`
   - D) Configure ESLint rules

(B)

10. Which statement best describes `package.json`?
    - A) It stores only transitive dependency versions
    - B) It is auto-generated and never edited
    - C) It defines project metadata, dependencies, and scripts
    - D) It is required only for frontend projects
(C)


## Question 1
JavaScript executes synchronous code in which order?

A. Random order based on memory usage  
B. Line by line in order  
C. In reverse order  
D. Based on callback priority  

(B)

## Question 2
What is true about `setTimeout(fn, 0)`?

A. It runs `fn` immediately before all sync code  
B. It blocks the call stack for 0 ms  
C. It queues `fn` to run after the call stack is empty  
D. It guarantees execution at exactly 0 ms  

(C)

## Question 3

In this flow, what prints first?
`console.log('Start'); setTimeout(...); console.log('End');`

A. In Between  
B. End  
C. Start  
D. Timer ID  

(C)


## Question 4
The delay value in `setTimeout(fn, 1000)` represents:

A. Exact execution time after 1000 ms  
B. Minimum wait time before callback is eligible  
C. Maximum wait time  
D. CPU lock duration  

(B)

## Question 5
Why does `await` not work as expected on a function that only uses `setTimeout` but does not return a Promise?

```
const asyncFunction = (cb) => {
    setTimeout(() => {
        console.log("Async Function 3");
        cb();
    }, 1000);
};

const main = async () => {
    console.log("Step 1");
    const response = await asyncFunction();
}
main()
```


A. `await` works only in classes  
B. `setTimeout` returns resolved data directly  
C. There is no Promise for `await` to wait on  
D. `await` requires callbacks only  

(C)




## Question 6
What is a callback?

A. A function passed into another function to run later  
B. A synchronous loop construct  
C. A type of Promise state  
D. A built-in event loop API  

(A)



## Question 7
When a callback is passed to an async function, it is usually executed:

A. Before the async task starts  
B. After the async task finishes  
C. During parsing  
D. Only if code is synchronous  

(B)



## Question 8
Can a callback be called multiple times?

A. No, JavaScript prevents it at runtime  
B. Yes, if function logic invokes it multiple times  
C. Only in strict mode  
D. Only in browser JavaScript  

(B)



## Question 9
What is a major risk of calling callbacks multiple times?

A. Faster memory allocation  
B. Duplicate side effects (e.g., multiple DB writes)  
C. Automatic Promise rejection  
D. Guaranteed deadlock  

(B)


## Question 10
What best describes callback hell / Pyramid of Doom?

A. Flat and readable async structure  
B. Deeply nested callbacks that reduce readability and control  
C. Using `Promise.all` with many APIs  
D. Calling one synchronous function many times  


## Question 11
In callback hell, what is meant by inversion of control?

A. Main function fully controls all timing  
B. Called async functions control when next steps run  
C. Event loop gets disabled  
D. Functions become synchronous  

(B)


## Question 12
Which Promise state is valid?

A. WAITING  
B. BLOCKED  
C. FULFILLED  
D. EXECUTED  

(C)




## Question 13
What does a Promise represent?

A. A guaranteed immediate value  
B. A value that may be available now, later, or never  
C. A callback that always runs twice  
D. A synchronous operation wrapper only  

(B)


## Question 14
What does `.then()` handle?

A. Rejected promise values only  
B. Resolved (fulfilled) promise values  
C. Syntax errors only  
D. Event loop scheduling only  

(B)

## Question 15
What is true about multiple `resolve()` calls inside the same Promise executor?

A. All resolve values are emitted  
B. The last resolve wins  
C. Only the first settlement is used   
D. Promise becomes pending again  

(C)

## Question 16
What does `Promise.all([...])` return immediately?

A. An array of final values  
B. A single Promise  
C. A callback function  
D. The first fulfilled value  


(B)

## Question 17
`Promise.all` behavior when one Promise rejects:

A. Ignores rejection and continues  
B. Resolves with partial success values  
C. Rejects immediately (fail-fast)  
D. Converts rejection to fulfillment  

(C)

## Question 18
What does `Promise.allSettled()` provide?

A. Only fulfilled values  
B. First settled value only  
C. Status/result for all input promises  
D. Only rejected reasons  

(C)

## Question 19
What does `Promise.any()` resolve with?

A. First settled promise (fulfilled or rejected)  
B. First fulfilled promise  
C. Array of all fulfilled values  
D. Last fulfilled promise  

(B)

## Question 20
What is correct about `async`/`await`?

A. `async` functions always return a Promise  
B. `await` can only be used in non-async functions  
C. `await` turns JavaScript into multi-threaded execution  
D. `await` blocks the entire Node.js thread  

(A)

## Question 21
Inside an `async` function, what does `await promise` return when the promise is fulfilled?

A. The Promise object itself  
B. The fulfilled value  
C. A callback function  
D. `undefined` always  

(B)

## Question 22
What is the recommended way to handle errors with `async`/`await`?

A. `switch/case` around `await`  
B. Nested callbacks only  
C. `try/catch` blocks  
D. `setTimeout` retries by default  

(C)

## Question 23
Which statement about sequential `await` calls is correct?

A. They run in parallel automatically  
B. They run one after another in written order  
C. They become synchronous and block Node.js thread  
D. They are invalid in JavaScript  

(B)


## Question 24
If tasks are independent and you want concurrency, what is better than awaiting each one sequentially?

A. Wrapping each task in `console.log`  
B. Using `Promise.all([...])`  
C. Replacing all awaits with callbacks  
D. Using `Promise.race` for all cases  

(B)