


setTimeout(() => {
    console.log("setTimeout inside I/O");
})

function recursiveNextTick() {
    process.nextTick(recursiveNextTick);  
}

recursiveNextTick();

Promise.resolve().then(() => {
    console.log("Promise then");
})


console.log("Main Script");
