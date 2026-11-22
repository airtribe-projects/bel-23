class Car {
    #make;
    
    constructor(make, model, year) {
      this.#make = make;
      this.model = model;
      this.year = year;
    }


    getMakeOfTheCar(){
        // Validate the user
        return this.#make;
    }

    setMakeOfTheCar(make){

        return this.#make = make;
    }
  
    #start() {
      console.log(`${this.make} ${this.model} is starting...`);
    }
  
    drive(speed) {
      console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    }
}
  

const myCar = new Car("Toyota", "Camry", 2023);

myCar.drive()
console.log(myCar.model);
// myCar.#start();

// myCar.#make;


