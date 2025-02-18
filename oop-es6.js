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
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log("Width must be greater than 0");
        }
    }
}

const rect = new Rectangle(14, 56);
console.log("area", rect.area);
rect.width = 2;
console.log("area", rect.area);
