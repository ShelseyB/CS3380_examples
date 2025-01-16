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
printFruitInfo("Tropical", ...tropicalFruits);
// Output: 
// Fruit Type: Citrus
// Fruits: ['orange', 'lemon', 'lime']

// 3. Using the Rest Operator with Objects
const person = {
    name: 'John',
    age: 30,
    job: 'developer',
    city: 'New York'
};

// Rest operator to extract specific properties from an object
const { name, age, ...otherDetails } = person;

console.log('Name:', name); // John
console.log('Age:', age); // 30
console.log('Other Details:', otherDetails); 
// { job: 'developer', city: 'New York' }

// 4. Using the Spread Operator with Objects
const updatedPerson = {  city: 'San Francisco', job: 'designer', faveColor: "blue", ...person };

console.log('Updated Person:', updatedPerson);
// { name: 'John', age: 30, job: 'designer', city: 'San Francisco' }

let specialFruit = "banana";
const myObj = {
    grape_fruit: 12,
    "grape-fruit": "12",
    pineapple: 34,
    add_fruits: function(apples) {
        console.log("adding the fruits")
        console.log(apples);
    },
    subtract_fruits(apples) {
        console.log(apples - this.grape_fruit - this.pineapple)
    },
    [specialFruit]: 45
}
myObj.grapes = 12;
myObj.add_fruits(56);
myObj.subtract_fruits(200);
console.log(myObj, myObj[specialFruit]);

const car = new Object();
car.engine = "very good engine";
car.seats = "leather";
const emptyArray = new Array(3);

let prefix = "user_";
let person2 = {
    name: "Alice",
    [`${prefix}age`]: 78,
    [`${prefix}location`]: "Provo, UT"
}

console.log(person2);

let { name: username, user_location: address, birthday } = person2;
console.log(username, address, birthday);

const [apple, banana, cherry, grape] = fruits;
console.log(apple, banana, grape);

const obj1 = { a: 1, b: 2, c: 4};
const obj2 = { c: 3, d: 4};

const combined = {...obj1, ...obj2};

console.log("combined", combined);

const nums = [1, 2, 3, 4, 14];

const [first, second, third, , fifth, sixth = 52] = nums;
console.log(first, second, third, fifth, sixth);

const nested = ["string", [1, 2], [3, 4]];

const [strVal, [first2, second2]] = nested;

console.log(strVal, first2, second2);



function runAfterTime(callbackFn) {
    setTimeout(() => {
        callbackFn();
    }, 2000);

    console.log("after timeout");
}

runAfterTime(() => console.log("timeout finished"))
