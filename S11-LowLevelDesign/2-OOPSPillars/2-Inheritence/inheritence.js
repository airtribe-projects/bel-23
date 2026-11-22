class Animal {
    // Private field (only accessible inside the class)
    #name;
  
    constructor(name, sound) {
      this.#name = name;          // Private
      this.sound = sound;         // Public
    }
  
    // Public method
    speak() {
      console.log(`${this.#name} says ${this.sound}`);
    }
  
    // Getter for name (read-only access)
    getName() {
      return this.#name;
    }
  
    // Setter for name (controlled access)
    setName(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
        this.#name = newName;
      } else {
        console.log('Invalid name!');
      }
    }

  }


class Mammal extends Animal {
  constructor(name, sound, type) {
    super(name, sound); 
    this.type = type;
  }
  
  breathe() {
    console.log(`${this.getName()} is ${this.type} and is breathing... 🫁`);
  }
}

// let mammal = new Mammal("Cat", "Meow", "Domestic");

// console.log(mammal.getName());
// mammal.speak();
// mammal.breathe()

class Human extends Mammal {
    constructor(name, sound, type) {
        super(name, sound, type); 
    }

    breathe() {
        // this.breathe();
        console.log(`${this.getName()} breathes via nose`);
        super.breathe();
        console.log(super.getName());
        // super(2).breathe()
    }
}


let jay = new Human("Jay", "Speaks", "Human");

console.log(jay.getName());
jay.speak();
jay.breathe()