interface Person2 {
    name: string,
    age: number,
    isStudent: boolean
}

let person2: Person2 = {
    name: "Bob",
    age: 34,
    isStudent: false
};

function greet2(name: string, age: number): void {
    console.log(`Hello ${name}, you are ${age}`);
}

greet2(person2.name, person2.age);