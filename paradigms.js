// Imperative
let numbers = [1, 2, 3];
let doubled = [];
for (let i =0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

// Declarative
let doubled_dec = [1, 2, 3].map(n => n * 2);

console.log(doubled, doubled_dec)

// Functional
// Pure Function
function add(a, b) {
    return a + b;
}

// Higher-order functions
function displayNums(fn) {
    return "The result is " + fn(1, 2);
}
console.log(displayNums(add))

// OOP

// Procedural
function getRandomNum() {
    return Math.random() * 10;
}

function greetTheNumber(num) {
    console.log(`Hello ${num}`);
}

function main() {
    const num = getRandomNum(); // Step #1
    greetTheNumber(num); // Step #2
}

main();

// Event-driven (Very common in web programming)
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Reactive programming