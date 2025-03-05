var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Hello world";
var age = 35;
var person_name = "Jill";
var isStudent = true;
console.log(message);
console.log("Hello ".concat(person_name, ", you are ").concat(35, " and you are").concat(isStudent ? "" : " not", " a student"));
// isStudent = "yes";
var myCity = "Provo";
myCity = 45;
console.log(myCity);
function greet(personName, age) {
    if (age === void 0) { age = 30; }
    return "Hello, " + personName + ". You are " + age;
}
greet(person_name);
var person = {
    name: person_name,
    age: age
};
var user = {
    name: person_name,
    age: age,
    isStudent: isStudent
};
// TypeScript infers types, will get mad if you try to change type
// user.name = 67;
/** CLASSES and OOP */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " speaks"));
    };
    return Animal;
}());
// Inheritance
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks"));
    };
    return Dog;
}(Animal));
var dog = new Dog("Fido");
dog.speak();
/** ENUMS */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Right;
console.log(move);
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["EDITOR"] = "editor";
    UserRole["VIEWER"] = "viewer";
})(UserRole || (UserRole = {}));
var MixedEnum;
(function (MixedEnum) {
    MixedEnum["YES"] = "yes";
    MixedEnum[MixedEnum["NO"] = 0] = "NO";
    MixedEnum[MixedEnum["MAYBE"] = 1] = "MAYBE";
})(MixedEnum || (MixedEnum = {}));
var userID = "12345";
var user2 = {
    name: person_name,
    age: age,
    address: "123 Test Lane"
};
console.log(user2);
function printID(id) {
    console.log(id);
}
printID(1234);
printID("1234");
