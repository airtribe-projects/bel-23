// Has-A (Strong)
// Composition

class Heart {
    beat() {
        console.log("Beating at 72 BPM")
    }
}

class Human {
    #heart;
    constructor() {
        this.#heart = new Heart();
    }
}

const jay = new Human();