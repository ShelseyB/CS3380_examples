class User {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

const alice = new User("Alice");
alice.printName();
console.log("alice", alice);

class Admin extends User {
    constructor(name, password, course) {
        super(name);
        this.password = password;
        this.course = course;
    }

    getCourse() {
        console.log(this.course);
    }
}

const myAdmin = new Admin("Bob", "password", "CS3380");
myAdmin.printName();
myAdmin.getCourse();


class Rectangle {
    #id
    constructor(width, height) {
        // protected (just convention)
        this._width = width;
        this._height = height;
        // private (truly private - not accessible outside of the class/object)
        this.#id = Math.floor(Math.random() * 50);
    }

    // Getters
    get area() {
        return this._width * this._height;
    }

    get id() {
        return this.#id;
    }

    // Private method
    #calculateArea() {
        return this.area;
    }

    printArea() {
        console.log(this.#calculateArea());
    }

    // Setters
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log("Width must be greater than 0");
        }
    }

    static displayAreaFormula() {
        console.log("Area = width * height")
    }
}

Rectangle.describe = function() {
    console.log("A rectangle is a shape with four sides, where the corners are 90 degrees")
}

const rect = new Rectangle(14, 56);
console.log("area", rect.area);
rect.width = 2;
console.log("area", rect.area);
console.log(rect._width, "width");
console.log("id",  rect.id);
rect.printArea();

Rectangle.displayAreaFormula();
Rectangle.describe();
// rect.displayAreaFormula();

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}


class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} meows`);
    }
}

const myDog = new Dog("Fido", "Dachshund");
const myCat = new Cat("Milly");

function makeSound(animal) {
    animal.speak();
}

makeSound(myDog);
makeSound(myCat)
