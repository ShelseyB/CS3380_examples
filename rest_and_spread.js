// 1. Using the Spread Operator with Arrays
const fruits = ['apple', 'banana', 'cherry'];

// Spread operator to copy an array and add more elements
const moreFruits = ['date', ...fruits, 'elderberry'];

console.log('Original Fruits:', fruits); // ['apple', 'banana', 'cherry']
console.log('More Fruits:', moreFruits); // ['apple', 'banana', 'cherry', 'date', 'elderberry']

// Spread operator to combine two arrays
const tropicalFruits = ['mango', 'pineapple'];
const allFruits = [...fruits, ...tropicalFruits];

console.log('All Fruits:', allFruits); // ['apple', 'banana', 'cherry', 'mango', 'pineapple']

// 2. Using the Rest Operator with Functions (Rest parameter)
function printFruitInfo(type, ...fruits) {
    console.log('Fruit Type:', type);
    console.log('Fruits:', fruits);
}

printFruitInfo('Citrus', 'orange', 'lemon', 'lime'); 
printFruitInfo("Tropical", ...tropicalFruits); // Spread
// // Output: 
// // Fruit Type: Citrus
// // Fruits: ['orange', 'lemon', 'lime']

// // 3. Using the Rest Operator with Objects
const person = {
    name: 'John',
    age: 30,
    job: 'developer',
    city: 'New York'
};

// // Rest operator to extract specific properties from an object
const { name, age, ...otherDetails } = person;

console.log('Name:', name); // John
console.log('Age:', age); // 30
console.log('Other Details:', otherDetails); 
// // { job: 'developer', city: 'New York' }

// 4. Using the Spread Operator with Objects
const updatedPerson = {  faveColor: "blue", ...person, city: 'San Francisco', job: 'designer' };

console.log('Updated Person:', updatedPerson);
// // { name: 'John', age: 30, job: 'designer', city: 'San Francisco' }

const obj1 = { a: 1, b: 2, c: 4};
const obj2 = { c: 3, d: 4};

const combined = {...obj1, ...obj2};

console.log("combined", combined);

// Destructuring Nested Arrays

const nested = ["string", [1, 2], [3, 4]];

const [strVal, [first1, second1], [first2, second2]] = nested;

console.log(strVal, first2, second2, first1, second1);

