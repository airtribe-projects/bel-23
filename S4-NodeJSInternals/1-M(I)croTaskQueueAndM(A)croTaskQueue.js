// Example 1:

// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)

// console.log("Main script");
// /*
// Output
// MS 
// MT

// */

// // Promise.resolve() ==> Creates a resolved promise immediately.

// // Example 2: 

// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
// })

// console.log("Main script");


// Example 3: 
// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)

// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
// })

// console.log("Main script");


// for (let i=0; i< 10; i++) {
//     setTimeout(() => {
//         console.log(`Main Timer ${i}`)
//     }, 0)

//     // setTimeout(function () {
//     //     console.log(`Main Timer ${i}`)
//     // }, 100)


//     Promise.resolve().then(() => {
//         console.log(`Promise Callback ${i}`);   
//     });
// }

// Example 5

// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
//     Promise.resolve().then(() => {
//         console.log("Resolved inner promise");   
//     })
// })

// console.log("Main script");

// Example 6: 

setTimeout(() => {
    console.log("Outer Timer")
    Promise.resolve().then(() => {
        console.log("Inner promise");   
    })

}, 0)    


Promise.resolve().then(() => {
    console.log("Outer Promise");   
    setTimeout(() => {
        console.log("Inner Timer")
    }, 0)    
})

console.log("Main script");


