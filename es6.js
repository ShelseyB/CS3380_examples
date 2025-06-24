// let and const vs var


// Arrow functions
const square = function(n) {
    return n * n;
}

const squareArrow = n => n * n;

function Timer() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}

function Timer2() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000)
}

// Timer2();

// Don't use arrow functions on objects if you need to access "this"
const obj = {
    name: "Bobby",
    greet: () => {
        console.log(`Hi ${this.name}`);
    }
}
obj.greet();

// Template literals
console.log(`The square of 3 is ${square(3)}`);

// Tagged template literals
function tag(strings, ...values) {
  console.log(strings); // [ 'Hello, ', '!' ]
  console.log(values);  // [ 'Sam' ]
}

const name = "Sam";
const age = 27;
tag`Hello, ${name}! You are ${age}`;

// Destructuring
const arr = [1, 2];
const [a, b] = arr;
const obj2 = {c: 1, d: 2};
const {c, d} = obj2;

// Default, Rest, and Spread
function hello(name = "Anonymous", ...facts) {
    console.log(`Hello ${name}. ${facts.join(", ")}`);
}
const newArr = [...arr, ...[1, 2, 3]];

// Enhanced Object Literals and For-of loops
for (it of newArr) {
    console.log("it", it);
}

const obj3 = {
    name
}

// Sets and Maps

// Classes and Inheritance

// Promises and Asynchronous Code

// Modules (import/export)
