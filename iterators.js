// Arrays, Maps, and Sets have built-in iterators
const arr = [1, 2, 3];
for (let i of arr) {
    console.log("i", i);
}

const set = new Set([2, 3, 3, 5]);
for (let val of set) {
    console.log("val", val);
}

const map = new Map([[1, "one"], [2, "two"]]);
for (let [key, val] of map) {
    console.log(key, val);
}

// Example of Iterator
const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Custom iterators
function createRangeIterator(start, end) {
    let current = start;

    return {
        next() {
            if (current <= end) {
                return {value: current++, done: false}
            } else {
                return {value: undefined, done: true}
            }
        }
    }
}

const range = createRangeIterator(2, 7);
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());

// Using Symbol.iterator
// 0, 1, 1, 2, 3, 5, 8
function fibonacci(max) {
    let a = 0;
    let b = 1;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let val = a;
                    if (val > max) {
                        return {value: undefined, done: true}
                    }
                    [a, b] = [b, a + b];
                    return {value: val, done: false};
                }
            }
        }
    }
}

const fib = fibonacci(80);
for (let num of fib) {
    console.log(num);
}

// Generators
function* myGenerator() {
    yield 12;
    yield 30;
    yield 45;
}

const gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* count(n) {
    for (let i = 1; i <= n; i+=2) {
        yield i;
    }
}

const counter = count(8);

for (let val of counter) {
    console.log(val);
}

