function add(a, b) {
    return a + b;
}

const curriedAdd = a => b => a + b;
console.log(curriedAdd(3)(6), add(3, 6));

function multiply(a) {
    return function (b) {
        return function(c) {
            return a * b * c;
        }
    }
}
console.log(multiply(2)(7)(3));

// Returns the number of arguments it accepts
console.log(add.length, multiply.length);

// Apply
console.log(add.apply(null, [2, 3])); // "this" object, array of arguments

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            // console.log("args.length >= fn.length", args)
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                // console.log("in function(...nextArgs", nextArgs);
                return curried.apply(this, args.concat(nextArgs));
            }
        }
    }
}

const curriedAdd2 = curry(add);
console.log(curriedAdd2(2)(3));

const  greetStudent = school => name => year => {
    console.log(`Hello ${name}, welcome to ${school}. Congratulations on being in your ${year} year`);
}
const greetUVUStudent = greetStudent("UVU");
greetUVUStudent("Jane")(3);

const greetJane = greetUVUStudent("Jane");
greetJane(3);

// Logging
const log = level => message => console.log(`[${level}] ${message}`);
const info = log("INFO");
const warning = log("WARNING");

info("User logged in")
