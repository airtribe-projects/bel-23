const asyncFunction1 = (cb) => {
    setTimeout(() => {
        console.log("AF 1");            
        cb();
    }, 1000);
};

const asyncFunction2 = (cb) => {
    setTimeout(() => {
        console.log("AF 2");
        cb();
    }, 1000);
};

const asyncFunction3 = (cb) => {
    setTimeout(() => {
        console.log("AF 3");
        cb();
    }, 1000);
};

// Callback Hell, Pyramid of Doom
const main =  () => {
    console.log("Step 1");
    asyncFunction1(() => {
        asyncFunction2(() => {
            asyncFunction3(() => {
                console.log("All Done");
            });
        });
    });
    console.log("Step 2");
};
