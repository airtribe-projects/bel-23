/* 6 Phases 

1. Timer Phase: setTimeout, setInterval
2. Pending Callback Phase: TCP error, DNS Error, Network call (Low level system errors)
3. Idle / Prepare Phase: Internal phase used by NodeJS to maintain event loop
4. Poll Phase: Handles all I/O events and related callbacks 
5. Check Phase: setImmediate calls
6. Close Phase: handle graceful release of resources, socket handling, closing database connection
*/

// Example 1

// const fs = require('fs');

// fs.readFile('./temp.text', () => {
//     setTimeout(() => {
//         console.log("SetTimeOut inside I/O");
//     });

//     setImmediate(() => {
//         console.log("setImmediate inside I/O");
//     })
// });




setTimeout(() => {
    console.log("SetTimeOut inside I/O");
},0);

setImmediate(() => {
    console.log("setImmediate inside I/O");
})
