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

const users = [
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
    {
        name: "Betty",
        age: 22
    },
];

const gertrude = users.findIndex(user => user.name == "Gertrude");
console.log("gertrude", gertrude);

// To find last
const multiples = [1, 2, 1, 1];
console.log("find last index", multiples.findLastIndex((num) => num == 1));
console.log("find last", users.findLast((u) => u.age == 22));

// // Subarray
const sub = test_array.slice(1, 4);
console.log("sub", sub, test_array);

// // Splice changes main array, removes sub array and returns it
const sub2 = test_array.splice(1, 3);
console.log("spliced", sub2, test_array);

// // Adding to array
// // Beginning:
console.log("unshift", test_array.unshift(12), test_array);
// // End:
console.log("push", test_array.push(34), test_array);
// // Both return resulting length
// // Or, you can always use the spread operator
console.log([3, ...test_array]);
console.log([...test_array, 4]);
// // NOTE: creates a new array

// // Changing the length
sub2.length = sub2.length + 3;
console.log("sub2 increased", sub2);
sub2.length = sub2.length - 4;
console.log("sub2 decreased", sub2);

test_array.length = test_array.length + 1;
console.log(test_array);

// // Every - ignores empty slots
console.log(test_array);
console.log("every > 1", test_array.every((num) => num > 1));
console.log("every < 100", test_array.every((num) => num < 100));

// // Some - returns "false" for empty slots
console.log("at least one > 1", test_array.some(it => it > 1))
console.log("at least one > 100", test_array.some(it => it > 100))

// // Map - ignores empty slots
console.log("map", test_array.map(it => it * 2));
console.log(undefined * 2);

// // Filter - returns an array that only contains the elements that satisfied the constraints
console.log("filter", test_array.filter((it) => it % 2 === 0));

// // Reduce - Reduces the array to a single value by accumulating results.
console.log("reduce", test_array.reduce((sum, it) => sum + it, 0));

// // Sort
console.log(test_array.sort());
// Custom sorting - return 1 if a should be before b, -1 if b should be before a
console.log(users.sort((a, b) => a.age - b.age));

// // Reverse - reverses the array in place
test_array.push(78, 2);
test_array.unshift(1);
console.log(test_array);
test_array.reverse();
console.log(test_array);

// // Concat - join multiple arrays
console.log([5, 6].concat([9, 10]).concat([2, 3]));

// // Flat - take multi-dimensional array and flatten to single dimensional array
console.log([[1, 40], [5, [6, 8, 9]]].flat(1)); // Parameter is the depth to flatten
console.log([[1, 40], [5, [6, 8, 9]]].flat(2));
console.log([[1, 40], [5, [6, 8, [9]]]].flat(Infinity));

// // Flat Map - map and flatten
console.log([1, 2, 3].map(num => [num, num * 2]));
console.log([1, 2, 3].flatMap(num => [num, num * 2]));

// // Fill - fill array with static value
console.log([[1, 40], [5, [6, 8, 9]], 78].fill(0));

// // Array.from - creates array from an iterable
console.log(Array.from("Hello"));

// // Array.isArray
console.log(Array.isArray(test_array));
console.log(Array.isArray(3));