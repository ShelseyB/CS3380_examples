function User(name) {
    this.name = name;

    let count = 0;

    // this.printName = () => {
    //     console.log(this.name);
    // }

    this.increment = function() {
        count++;
        return count;
    }
}

User.prototype.printName = function() {
    console.log(this.name);
}

let alice = new User("Alice");
console.log("alice", alice, User);
alice.printName();

let bob = new User("Bob");
console.log(bob.increment(), alice.increment(), bob.increment())
bob.printName();

// Inheritance
const Admin = function(name, password, course) {
    User.call(this, name);
    this.password = password;
    this.course = course;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.getCourse = function() {
    console.log(this.course);
}

const myAdmin = new Admin("Bob", "password", "CS3380");
myAdmin.printName();
myAdmin.getCourse();