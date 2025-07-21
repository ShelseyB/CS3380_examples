/** REFLECT API */

const obj = {};
const propName = "something";
obj[propName] = "something else";

console.log(Reflect.get(obj, propName));

Reflect.set(obj, "test", "test-value");
console.log(obj);

if (Reflect.has(obj, propName)) {
    console.log("yes, the object has", propName);
}

Reflect.deleteProperty(obj, propName);
console.log(obj);

Reflect.set(obj, propName, "something else");

Reflect.defineProperty(obj, propName, {value: "something else", writable: false});
console.log(obj);

// obj[propName] = "new value";
// console.log(obj);

// /** OBJECT CLASS */
Object.defineProperty(obj, "name", {
    value: "My name property",
    writable: false,
    configurable: true,
    enumerable: false
});
console.log(obj);
// obj.name = "new name";
// console.log(obj);

for (let key in obj) {
    console.log("key", key);
}

const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log("descriptor", descriptor);

const prototype = Object.getPrototypeOf(obj);
console.log(prototype);

class User {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

User.prototype.someMethod = () => {
    return "hello";
}

const newObj = new User();

console.log(Object.getPrototypeOf(newObj));

const arr = [];
const array_prototype = Object.getPrototypeOf(arr);
console.log(array_prototype);

// /** Some use cases */
function addProperty(obj, propName, propValue) {
    if (!Reflect.has(obj, propName)) {
        Reflect.set(obj, propName, propValue);
        return;
    }
    console.error(`Sorry, ${propName} cannot be overwritten`);
}

const person = {
    name: "Alice",
    age: 25
};

addProperty(person, "address", "123 Test Lane");
console.log("person", person);
addProperty(person, "name", "Bob");
console.log("person", person);

function validateProperty(obj, propName) {
    if (Reflect.has(obj, propName)) {
        console.log(`Yes, the object has ${propName}`);
    } else {
        console.log(`No, the object does not have ${propName}`);
    }
}

validateProperty(person, "name");
validateProperty(person, "occupation");

// /** Proxy */
const handler = {
    get: (target, prop, receiver) => {
        // Custom functionality
        if (Reflect.has(target, prop)) {
            return Reflect.get(target,prop);
        } else {
            return `Property ${prop} not found`;
        }
    },
    set: (target, prop, value) => {
        if (prop == "email" && value.indexOf("@") < 0) {
            value += "@gmail.com";
        }
        return Reflect.set(target, prop, value);
    },
    deleteProperty(target, property) {
        if (property == "name") {
            return "Sorry, that can't be deleted";
        }
        return Reflect.deleteProperty(target, property);
    }
}

const proxy = new Proxy(person, handler);
console.log(proxy.name);
console.log(proxy.occupation);

proxy.email = "alice";
console.log(proxy);

delete proxy["name"];
console.log(proxy);
console.log(person);

