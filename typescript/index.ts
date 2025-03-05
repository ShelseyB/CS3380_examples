let message: string = "Hello world";
let age: number = 35;
let person_name: string = "Jill";
let isStudent: boolean = true;

console.log(message);

console.log(`Hello ${person_name}, you are ${35} and you are${isStudent ? "" : " not"} a student`);

// isStudent = "yes";

let myCity: any = "Provo";
myCity = 45;
console.log(myCity);

function greet(personName: string, age: number = 30): string {
    return "Hello, " + personName + ". You are " + age;
}

greet(person_name);

interface Person {
    name: string;
    age: number;
    address?: string;
}

const person: Person = {
    name: person_name,
    age: age
};

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
    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} speaks`);
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak(): void {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Fido");
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

enum MixedEnum {
    YES = "yes",
    NO = 0,
    MAYBE = 1
}

/** Type Aliases and Unions */
type ID = string | number;
let userID: ID = "12345";

type User = {
    name: string;
    age: number;
    address: string;
}

const user2: User = {
    name: person_name,
    age: age,
    address: "123 Test Lane"
}

console.log(user2);

function printID(id: string | number): void {
    console.log(id);
}

printID(1234);
printID("1234")

/** ARRAYS */

const persons: Person[] = [
    {name: person_name, age },
    {name: "Bobby", age: 56 }
];

function printPeople(people: Person[]): void {
    for (let i = 0; i < people.length; i++) {

    }
}

function getPeople(): Person[] {
    return persons
}