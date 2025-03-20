function Car(make, model, year) {
    // Properties
    this.make = make;
    this.model = model;
    this.year = year;

    // Methods
    this.start = function() {
        console.log(`${this.make} ${this.model} started.`)
    }

    this.stop = function() {
        console.log(`${this.make} ${this.model} stopped.`)
    }
}

// Create instances
const myCar = new Car("Honda", "Fit", 2015);
myCar.start();

const yourCar = new Car("Toyota", "Corolla", 2020);
yourCar.start();