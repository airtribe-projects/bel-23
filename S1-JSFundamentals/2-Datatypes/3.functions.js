/*
initialized by using function keyword

function greetMe(name) {
    return `hello ${name}`; 
}

# Higher Order Function
- Whenever a function accepts a function as parameter or returns a function as response
- In both the cases we call that function as HoF



*/

function greetMe(name) {
    return `hello ${name}`; 
}

console.log(greetMe("Jay"));



// HoF

function cookFood(order) {
    console.log("Cooking your:" , order);
}

function serveDrinks(drinksOrder) {
    console.log("Serving drinks:" , drinksOrder);
}

function Restaurant(cookFood, serveDrinks, orderType, order) {
    if (orderType == "Food") {
        cookFood(order);
    } else if (orderType == "Drinks") {
        serveDrinks(order);
    }
}

Restaurant(cookFood, serveDrinks, 'Food', "Pizza");
Restaurant(cookFood, serveDrinks, 'Drinks', "Coke");

// Array Functions

console.log('HoF');
const arr = [1, 2, 3, 4, 5, 6];

for (let i=0; i< arr.length; i++ ) {
    console.log(arr[i]);
}

function printValue(element) {
    console.log(element);
}

// forEach
console.log('forEach');
arr.forEach(printValue);
arr.forEach((element, index, entireArray) => {
    console.log(element, index, entireArray);
})


function printAllOddNumbers(num) {
    if (num% 2 == 1) {
        console.log(num);
    }
}

arr.forEach(printAllOddNumbers);

console.log("HoF: map")
/*
    Returns a 1:1 mapping in the form of an array
    Returned array would have exactly the same size
*/

function square(num) {
    return num * num;
}

const squareArray = arr.map(square);

console.log(squareArray);

const quadrupleArray = arr
                        .map(square)
                        .map(square);


console.log(quadrupleArray);

/*
    Filter: Filters out elements on certian condition
    Would return an array withi these filtered elements

*/

console.log("HoF: Filter");
const isEvenNumber = (num) => {
    return num % 2 == 0;
}

const evenNumber = arr.filter(isEvenNumber);
console.log(evenNumber);
console.log(evenNumber.map(square));

/*
    Reduce: Given an array you want to reduce it to a single data point, can be primitive, object etc


*/

console.log("HoF: Reduce");

let accumulator = 0;
for (let i=0; i< arr.length; i++ {
    const current = arr[i];
    accumulator = accumulator + current;
}
console.log(accumulator);




// const sum = (accumulator, current) => {
//     return accumulator + current;
// }

// const total = arr.reduce(sum, 0);

// console.log(total);



