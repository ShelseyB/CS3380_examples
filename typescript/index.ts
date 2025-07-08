let message: string = "Hello world!";
console.log(message);

// Types
let age: number = 35;
let person_name: string = "Bobby";
let isStudent: boolean = true;

console.log(`Hello ${person_name}, you are ${35} and you are${isStudent ? "" : " not"} a student`);

// isStudent = "yes";


// "any" type
let myCity: any = "Provo";
myCity = 45;
console.log(myCity);

// Function parameter and return types
function greet(personName: string, age: number = 30): string {
    return "Hello, " + personName + ". You are " + age;
}

console.log(greet(person_name));

// Interfaces
interface Person {
    name: string;
    age: number;
    address?: string; // ? makes it optional
}

const person: Person = {
    name: person_name,
    age: age
}

const user = {
    name: person_name,
    age,
    isStudent
};

// TypeScript infers types, will get mad if you try to change type
// user.name = 67;

/** CLASSES and OOP */
class Animal {
    name: string;
    age: number = 17;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak(): void {
        console.log(`${this.name} speaks`);
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    speak(): void {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Fido", 2);
dog.speak();

/** ENUMS */
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Right;
console.log(move);

enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    VIEWER = "viewer"
}

let uRole = UserRole.ADMIN;
uRole = UserRole.EDITOR;

enum MixedEnum {
    YES = "yes",
    NO = 0,
    MAYBE = 1
}

/** Type Aliases and unions */
type ID = string | number;
let userID: ID = "12345";
userID = 12;

type User = {
    name: string;
    age: number;
    address: string;
}

const user2: User = {
    name: person_name,
    age,
    address: "123 Test Lane"
}

console.log(user2)

function printID(id: string | number): void {
    console.log(id);
}

printID(1234);
printID("1234");

/** ARRAYS */
const persons: Person[] = [
    {name: person_name, age},
    {name: "Jill", age: 23}
];

const nums: number[] = [
    1, 2, 3, 4
];

function printPeople(people: Person[]): void {
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }
}
printPeople(persons);

function getPeople(): Person[] {
    return persons;
}
