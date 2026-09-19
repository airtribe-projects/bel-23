// console.log('Start');
// console.log('In between');
// console.log('End');


// const asyncFunction =  (cb) => {
//     setTimeout(() => {
//         console.log('In Between');
//         // If errors
//         cb("error", null);

//         // If data
//         cb(null, "data")
//     }, 1000);
// }

// const cb = (err, data) => {
//     if (err) {
//         console.error(error);
//     } else {
//         console.log('End');
//         // Process data
//     }
    
// }

// const main =  () => {
//     console.log('Start');
//     asyncFunction(cb);
// }

// main();


// Where is the callback defined? 
// Who executes the callback? 

const asyncFunction =  (cb) => {
    setTimeout(() => {
        console.log('In Between');
        cb();
        cb();
        cb();
        cb();
    }, 1000);
}

const cb = (err, data) => {
    console.log('End'); 
    // Maintains an entry where in amount is transfered from A -> B
}

const main =  () => {
    console.log('Start');
    asyncFunction(cb);
}

main();
