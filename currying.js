function add(a, b) {
    return a + b;
}

const curriedAdd = a => b => a + b;
console.log(curriedAdd(3)(6));

function multiply(a) {
    return function (b) {
        return function(c) {
            return a * b * c;
        }
    }
}
console.log(multiply(2)(7)(3));

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
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
