// Example 1
// console.log('Start');

// console.log('In between');

// console.log('End');

console.log('Start');

setTimeout(() => {
    console.log('In between');
}, 0)

console.log('End');

console.time('test');
for(let i=0; i< 1000000; i++) {

}
console.timeEnd('test');


// (A) Start, In Between End
// (B) Start, End , In between (Exactly at 5000 ms, <5000ms or >=5000ms)
// A or B