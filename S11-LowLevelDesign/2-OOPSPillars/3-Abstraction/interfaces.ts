class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    // start(): void {
    //     console.log(`Starting the vehicle: ${this.make} ${this.model}`);
    // }

    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }
}

class PetrolCar extends Vehicle implements startEngine {
    start(): void {
        console.log(`Starting the car using Petrol: ${this.make} ${this.model}`);
    }     
}

class DieselCar extends Vehicle implements startEngine{
    
    start(): void {
        console.log(`Starting the car using Diesel: ${this.make} ${this.model}`);
    }    
}

class Tesla extends Vehicle implements startEngine, flyable {
    start(): void {
        console.log(`Starting the car using Petrol: ${this.make} ${this.model}`);
    }     
    fly(): void{
        console.log("Tesla is flying")
    }
}


interface startEngine {
    start(): void;
}

interface flyable{
    fly(): void;
}


interface xyz extends startEngine{

    
}
class generator implements startEngine {
    start(): void {
        console.log(`Generator is starting`);
    }    
}