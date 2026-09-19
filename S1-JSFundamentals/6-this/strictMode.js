/* ECMA Script 5 --> 'strict mode'
    - Safer
    - more predictable
    - Easier to debug
    - Closer to future ecma script standards
*/ 

// 'use strict'

// Prohibits global pollution
// x = 10;

// console.log(x);

// function test() {
//     name = "jay";
// }

// test()

// console.log(name);


// function test() {
//     'use strict'
//     let x = 10;
//         function inner(){}
// }

// Functions should not accept duplicate parameter
// function add(a, a) {
//   return a;
// }

// console.log(add(1,2));

// Delete identifier is removed
// 'use strict'
// let x = 10;

// delete x; 

// console.log(x);

// Removes assignment to reserved keyword
// 'use strict'
// let public = 10;

// console.log(public);


// eval are safer
// 'use strict'
eval("var x = 10; console.log(x+5)")

console.log(x);

/*
    class --> By default uses strict mode
    Does it improves performance ==> yes
    Is it required? No
*/