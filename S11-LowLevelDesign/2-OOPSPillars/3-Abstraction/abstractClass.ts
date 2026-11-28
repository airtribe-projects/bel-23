abstract class AbVehicle {
    make: string;
    model: string;
    abstract year: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    abstract start(): void;        

    stop() {
        console.log(`${this.make} ${this.model} is stopping`);
    }
}

abstract class ABCar extends AbVehicle {

}

// Abstract Class: Class that can't be instantiated

const rail = new AbVehicle("Indian Railways", "2026")

// rail.stop();

class ICar extends AbVehicle {
    year:string;
    constructor(make:string, model:string, year: string) {

        super(make, model);
        this.year = year;
    }

    start(): void{
        console.log("ICar is starting");
    }
}

/*
1. Can we instantiate an abstract class? No
2. Can an interface have implementation? No
3. Can an abstract class have properties? Yes
4. Can an interface have properties? Yes, but all the properties would be abstract in nature
5. Can an abstract class implement an interface? Yes
6. Can an interface extend another interface? Yes
7. Can an abstract class extend another abstract class? Yes
8. Can an interface extend an abstract class? No
*/
