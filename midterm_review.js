// Basic Data Structures
/**
 * How to initialize them, both with and without data
 * How to add, remove, and access values
 */

// 1. Arrays
const arr = [1, 2, 3];
const arrObj = new Array([1, 2, 3]);

console.log(arr[1]);
arr[2] = 7;
arr.push(5);
arr.unshift(6);
const itm = arr.pop();
const itm2 = arr.shift();
console.log(arr.length, arr);

console.log(Array.prototype);

// 2. Objects
const obj = {
    a: `1`,
    b: 2
};

console.log(obj["a"], obj.b);
obj.c = 3;
obj["d"] = 4;

delete obj.b;
console.log("obj", obj);

// 3. Maps
const myMap = new Map([
    ["name", "Alice"],
    ["age", 22]
]);

console.log(myMap.get("name"), myMap.size);
myMap.set("address", "123 Test Lane");
console.log(myMap.has('address'));
myMap.delete("address");
console.log(myMap);

// 4. Sets
const mySet = new Set([1, 1, 3, 4, 7, 3]);
console.log(mySet);
console.log(mySet.has(7));
mySet.add(9);
mySet.delete(1);
console.log(mySet);
mySet.clear();

// Know basic JavaScript
// for and while loops, switch statements, if statements

// Truthy and Falsy values
// Falsy:
console.log(!!false, !!0, Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN));
// ANYTHING ELSE IS TRUTHY

// Shims and Polyfills - just know what they are
// Shim - https://developer.mozilla.org/en-US/docs/Glossary/Shim
// Polyfill - https://developer.mozilla.org/en-US/docs/Glossary/Polyfill

// Basics of Node and NPM
// - Know what the package.json
// - Know how to run a progam through the command line using node
// - Know how to initialize a project or install node modules

// Rest and Spread Operators
// - Rest

function printStuff(name, age, ...restParams) {
    // String Interpolation!!
    console.log(`Hi ${name}, you are ${age}. Here's some more info about you: ${restParams.join(", ")}`);   
}

printStuff("Alice", 22, "123 Test Lane");

// - Spread
const arr1 = [2, 3, 4];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);
const aliceInfo = ["Alice", 22, "123 Test Lane"];
printStuff(...aliceInfo);
// Can also be used with objects

// Promises
const usingThenPromise = new Promise((resolve, reject) => {
    const data = {blah: 1, blah2: 2};
    setTimeout(() => {
        resolve(data);
    }, 2000);
});

usingThenPromise.then((data) => {
    console.log("in then", data);
});


async function testAwait() {

    const usingAwait = new Promise((resolve, reject) => {
        const data = {blah: 1, blah2: 2};
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    const data = await usingAwait;
    console.log("data from await", data);

    async function asyncFunction() {
        console.log("in asyncFunction");
    }

    await asyncFunction();
    
}

testAwait();

// JSON
// - JavaScript Object Notation
// - Easily store and access data
const myJSON = JSON.stringify({
    a: 1,
    b: 2
});
console.log(myJSON);
const myParsedJSON = JSON.parse(myJSON);
console.log(myParsedJSON);

// fs and path
// import fs from "node:fs";
// import fs from "node:fs/promises";
// Review using fs/fs_example

// Command line arguments
const args = process.argv.slice(2);
let options = {};

for (let i = 0; i < args.length; i++) {
    switch(args[i]) {
        case "-h":
            console.log("here's how to run the program");
            break;
        case "-l":
            options.lang = args[i + 1];
            i++;
    }
}

console.log("options", options);

// Regex
/**
 * Review using regex.js
 * - Groupings: [a-zA-Z0-9]
 * - Beginning of the string: ^
 * - End of string: $
 * - Any character: .
 * - Escape characters: \.
 * - 0 or more: *
 * - 1 or none: ?
 * - 1 or more: +
 */


// i18n and l10n
// - Internationalization
// - localization
