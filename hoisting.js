// hoisting with var
console.log(myVar);
var myVar = 5;
console.log(myVar);

// hoisting with let and const
// console.log(myLet); // Throws reference error
let myLet = 6;
console.log(myLet);

// console.log(myConst); // Throws reference error
let myConst = 6;
console.log(myConst);

// Hoisting with functions
doSomething();
function doSomething() {
    console.log("I'm doing something");
}

// myFunctionExpression(); // Throws "is not a function error"
var myFunctionExpression = function() {
    console.log("This is my function expression");
}

myArrowFunction(); // Throws "is not a function error"
var myArrowFunction = () => {
    console.log("This is my arrow function");
}
