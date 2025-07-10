let myObj = {
    a: 1,
    b: 2
}

function impureFunction(obj) {
    obj.c = 3;
}

function pureFunction(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(myObj);
console.log(pureFunction(myObj));
console.log("After pure function", myObj);
impureFunction(myObj);
console.log("After impure function", myObj);

// Higher-Order Functions
function addStuff(a, b) {
    console.log("add stuff", a, b)
    return a + b;
}

function doSomething(ftn) {
    return ftn(1, 2);
}

console.log(doSomething(addStuff));

// Partial functions
function addStuffPositive(a, b) {
    if (a < 0 || b < 0) return;
    console.log("add stuff", a, b)
    return a + b;
}

console.log(addStuffPositive(1, 2), addStuffPositive(-1, 2));

// array functions to manipulate data
let myArray = ["a", "b", "c"];
console.log(myArray.map(it => it + " hello"), myArray);

console.log(myArray.filter(it => it > "b"), myArray);

// Currying
function brewCoffee(beans) {
    return function(water) {
        return beans * water;
    }
}

const coffeeMaker = brewCoffee(10);

console.log(coffeeMaker(10));
console.log(coffeeMaker(3));




