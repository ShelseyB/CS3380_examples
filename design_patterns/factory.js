function Vehicle(type) {
    switch(type) {
        case "car":
            return new Car();
        case "bike":
            return new Bike();
        case "truck":
            return new Truck();
    }
}

function Car() {
    this.type = "car";
}

function Bike() {
    this.type = "bike";
}

function Truck() {
    this.type = "truck";
}

const myCar = Vehicle("car");
const myBike = Vehicle("bike");

console.log(myCar instanceof Car);
console.log(myBike instanceof Bike);