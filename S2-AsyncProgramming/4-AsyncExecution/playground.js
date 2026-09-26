// Async Await 
const asyncFunction1 =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("AF 1");            
            resolve(1);
        }, 1000);
    })
};

const sum = (a, b) => a + b;

const subtract = async (a, b) => a-b;

const main = async () => {
    setInterval(() => {
        console.log("Hello World!")
    }, 100)
    
    let response;
    try {
        response  =  await asyncFunction1()
        response = await sum(1, 2);
        const sub = subtract(5,1);
        console.log(sub);
        console.log(await sub);
    } catch (e) {
        console.log(e)
    }
    console.log(response);
}


main()