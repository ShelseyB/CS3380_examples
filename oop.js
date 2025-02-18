function User(name) {
    this.name = name;

    // this.printName = () => {
    //     console.log(this.name);
    // }
}

User.prototype.printName = function() {
    console.log(this.name);
}

let alice = new User("Alice");
console.log("alice", alice, User);
alice.printName();

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