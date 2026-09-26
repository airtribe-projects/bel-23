const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("AF 1");            
            reject(1);
        }, 100);
    })
};

const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("AF 2");
            reject(2);
        }, 500);
    })
};

const asyncFunction3 = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("AF 3");
            reject(3);
        }, 1000);
    })
};

// Promise.all
// const response = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

// response
//     .then(val => console.log(val))
//     .catch((err) => console.log(err))

// console.log(response);


// Promise.allSettled
// const response = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

// response
//     .then(val => console.log("Success: ", val))
//     .catch((err) => console.log("Failure: ", err))

// console.log(response);

// Promise.any (Resolves when any one of the promises resolves)
// const response = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

// response
//     .then(val => console.log("Success: ", val))
//     .catch((err) => console.log("Failure: ", err))

// console.log(response);



const response = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

response
    .then(val => console.log("Success: ", val))
    .catch((err) => console.log("Failure: ", err))

console.log(response);

