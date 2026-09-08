Primitive: 
- Simple Immutable values
- comparision by value
- Stored directly
Reference: Complex mutable values
- Complex Mutable Values (Arrays / objects)
- comparison is by reference
- stored by reference


a = 5
b = 7

if (a > b)

### Common Primitive Values
* Number
* String
* Boolean
* Undefined: A variable exists but has not been assigned any value
* null: It has been intentionally set to null 
* Symbol
* BigInt


#### Undefined
let x;

console.log(x);


#### null

let x = null;
console.log(x)

typeof null is Object
* Historical bug and kept as it is for backward compatibility
* Object.prototype points to null


### Symbol
unique identifier

let id1 = Symbol("jay");

let id2 = Symbol("jay");

console.log(id1 === id2);

### BigInt
For very large numbers

let big = 12345678901234567890n;
