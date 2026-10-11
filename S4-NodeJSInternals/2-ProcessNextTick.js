// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
// })

// console.log("Main script");

// process.nextTick(() => console.log('process.nextTick'));


// Example 2:

// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// process.nextTick(() => console.log('process.nextTick 1'));

// Promise.resolve().then(() => {
//     console.log("Promise Callback 1");   

// })


// process.nextTick(() => console.log('process.nextTick 2'));

// Promise.resolve().then(() => {
//     console.log("Promise Callback 2");   

// })

// console.log("Main script");



//Example 3:

setTimeout(() => {
    console.log("T2")
    Promise.resolve().then(() => {
        console.log("IP");
        process.nextTick(() => console.log('NT'));
   
    })
}, 0)

setTimeout(() => {
    console.log("T1")
}, 0)


console.log("MS");
