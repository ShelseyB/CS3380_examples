// hoisting with var
console.log(myVar);
var myVar = 5;
console.log(myVar);

// console.log(myVar2); // Throws an error, only hoists within scope

function someFunc() {
    console.log(myVar2);
    var myVar2 = 7;
    console.log(myVar2);
}

// hoisting with let and const
// console.log(myLet); // Throws reference error
let myLet = 6;
console.log(myLet);

// console.log(myConst); // Throws reference error
let myConst = 6;
console.log(myConst);

// Hoisting with functions
// Function declaration
doSomething();
function doSomething() {
    console.log("I'm doing something");
}

// Function Expressions
// myFunctionExpression(); // Throws "is not a function error"
console.log(myFunctionExpression);
var myFunctionExpression = function() {
    console.log("This is my function expression");
}

myArrowFunction(); // Throws "is not a function error"
var myArrowFunction = () => {
    console.log("This is my arrow function");
}
