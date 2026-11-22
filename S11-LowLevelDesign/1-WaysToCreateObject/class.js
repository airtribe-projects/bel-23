
// Objects in NodeJS: Using Object Literal
const car = {
    make: "Toyota", 
    model: "Fortuner", 
    year: 2023, 
    start: function() {
        console.log(`${this.make} ${this.model} is starting`);
    }
}

car.start = function() {
    console.log("Hacked");
}

car.start()

/* Issues: 
- Lack of Uniformity
- Chances to introduce unintended bugs
- Security: Anyone could change attributes and behaviours
- Lot of code duplication
*/

// Constructor function: (Hack to represent a class)
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;

//     this.start = function() {
//         console.log(`${this.make} ${this.model} is starting`);
//     }

//     this.drive = function() {
//         console.log(`${this.make} ${this.model} is starting`);
//     }
// }

// const marutiBrezza = new Car("Maruti", "Brezza", 2025);

// marutiBrezza.start()

// marutiBrezza.start = function() {
//     console.log("Hacked");
// }

// marutiBrezza.start()


// const toyotaFortuner = new Car("Toyota", "Fortuner", 2026);



/* Issues: 
- Lack of Uniformity ==> Yes
- Chances to introduce unintended bugs ==> Solved
- Lot of code duplication ==> No
Existing Issues
- Security: Anyone could change attributes and behaviours ==> Yes
- Extensibility: Not possible
*/

// ES6 ==> Class keyword was introduced

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    #start() {
        console.log(`${this.make} ${this.model} is starting`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is starting`);
    }
}


const marutiBrezza = new Car("Maruti", "Brezza", 2025);

marutiBrezza.#start()

marutiBrezza.#start = function() {
    console.log("Hacked");
}

marutiBrezza.start()



