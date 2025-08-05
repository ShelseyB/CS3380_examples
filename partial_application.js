function greetStudent(school, name, year) {
    console.log(`Hello ${name}, welcome to ${school}. Congratulations on being in your ${year} year`);
}

greetStudent("UVU", "JimBob", "2");

// Here is our partial application function
function greetUVUStudent(name, year) {
    greetStudent("UVU", name, year);
}

greetUVUStudent("Janey", "3");

// Partial application helper
function partial(fn, ...fixedArgs) {
    return function(...restArgs) {
        return fn(...fixedArgs, ...restArgs);
    }
}

const add = (a, b, c) => a + b + c;
const add5 = partial(add, 2, 3);
console.log(add5(9));

// Application
function calculateTax(rate, amount) {
    return amount * rate;
}

const stateSalesTax = partial(calculateTax, 0.09);
console.log(stateSalesTax(67));
const citySalesTax = partial(calculateTax, 0.04);
console.log(citySalesTax(67));

function calculateTotalWithTax(state, city, total) {
    return state(total) + city(total) + total;
}

console.log(calculateTotalWithTax(stateSalesTax, citySalesTax, 67));
