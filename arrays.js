/**
 * Arrays in JavaScript Deep Dive
 */

// Accessing values
let test_array = [1, 5, 80];

// Option 1
console.log("test_array[0]", test_array[0], test_array[4]);
// Can also be in quotes:
console.log(`test_array["2"]`, test_array["2"]);
// However, "02" is NOT the same:
console.log(`test_array["02"]`, test_array["02"]);
// It looks for an object property "02" on the array
    // (Arrays are technically objects in JS)

//Get the length
console.log("length", test_array.length);
// test_array.length = 0;
// test_array = [];
// console.log(test_array);

// // Add and remove items
test_array.push(54);
console.log(test_array);
// // The following will add two elements, 72 at position 5, and an empty element at position 4 
test_array[5] = 72;
console.log("test array after test_array[5] = 72;", test_array, test_array.length);
// console.log(new Array(3));
// // NOTICE that the length includes the empty elements
// // Remove last element, return the element
test_array[4] = 90;
console.log(test_array.pop());
console.log("test array after pop", test_array, test_array.length);
test_array.push(32);
test_array[4] = null;

// // Iterate over elements in array
test_array.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
});
// // NOTICE that it skipped the empty elements

// // Search an array
const elmt = test_array.find((item, index) => item == 100);
console.log("elmt", elmt)
const idx = test_array.findIndex((item) => item == 100);
console.log('idx', idx);

const objArray = [
    {
        name: "Bob",
        age: 27
    },
    {
        name: "Jim",
        age: 45
    },
    {
        name: "Martha",
        age: 22
    },
    {
        name: "Gertrude",
        age: 74
    },
];

const gertrude = objArray.findIndex(user => user.name == "Gertrude");
console.log("gertrude", gertrude);

// Subarray
const sub = test_array.slice(1);
console.log("sub", sub, test_array);