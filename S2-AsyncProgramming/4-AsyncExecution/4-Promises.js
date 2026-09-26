/*  Promises
- Solves the problems of callback
    - Execution was handed over to the called function
    - Provides a cleaner way to write code
- Whenever you call a function, the return value of the function is a new type [Promise]

- Promise represents a value that may be avialable now, or in the future or never
- It is a better way to handle async code
- You have something to hold on to.
- Promises have state
    - PENDING
    - SETTLED
        - FULFILLED (RESOLVED)
        - REJECTED

*/

// Convert a callback to a promise

// const asyncFunction1 = () => {
//     const p = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // DB call --> data
//             console.log("AF 1");            
//             resolve(Data);
//             reject(Error);
//             resolve("Timeout complete 3");
//         }, 1000);
//     })
//     return p;
// }


// const main =  () => {

//     // try {

//     // } catch (e) {

//     // }


//     console.log("Step 1");
//     const res = asyncFunction1();
//     res.then((data) => {
//         console.log("Success: " ,data);
//     }).catch((err) => {
//         console.log("Error: ", err);
//     })
    
//     console.log(res);
//     console.log("Step 2");
// };
 
// main()



const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("AF 1");            
            reject(1);
        }, 1000);
    })
};

const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("AF 2");
            resolve(2);
        }, 1000);
    })
};

const asyncFunction3 = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("AF 3");
            resolve(3);
        }, 1000);
    })
};

// Callback Hell, Pyramid of Doom
const main =  () => {
    // console.log("Step 1");
    
    // Process resolve
    // asyncFunction1().then((data) => {
    //     console.log('End');
    // })


    // Callback hell
    // asyncFunction1().then(() => {
    //     asyncFunction2().then(() => {
    //         asyncFunction3().then(() => {
    //             console.log("All Done")
    //         })
    //     });
    // });

    // Promise Chaining
    // asyncFunction1()
    //     .then((orderId) =>  asyncFunction2(orderId))
    //     // .then((res) => {
    //     //     console.log(res)
    //     // })

    //     .then(asyncFunction3)
    //     .then(() => console.log("All Done"));
   
    
     asyncFunction1()
        // .catch(e => console.log("Error in AF 1 ", e))
        .then(asyncFunction2)
        .then(asyncFunction3)
        .then(() => console.log("All Done"))
        .catch(e => console.log("Error ", e))
   
    //  console.log("Step 2");
};

main()
 