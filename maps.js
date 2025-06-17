// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Map creation
const map1 = new Map();
console.log("map1", map1);

// Map creation with initialized values
const map2 = new Map([
  ['name', 'Alice'],
  ['age', 25]
]);
console.log(map2); 

// Get the size of the map
console.log(map2.size, map1.size);

// For referrence, here's how you would get the size of an object:
const obj = {
    a: 1,
    b: 2
};
console.log(Object.keys(obj).length);

// Setting values
map2.set(25, "Bob");
console.log(map2);

// Getting values
console.log(map2.get(25));

// Check for keys
console.log(map2.has("name"), map2.has(78), map2.get(78));

// Delete key/value pairs
map2.delete(25);
console.log(map2);

// map2.delete(78);

// map2.clear();

// console.log(map2);

// map2["blah"] = "blah blah";
// console.log(map2);
// console.log(map2.has("blah"));
// map2.delete("blah")
// console.log(map2, map2["blah"]);


// Iterate over key/value pairs
for (let key of map2.keys()) {
  console.log("key", key);
}

// console.log(map2.keys(), map2.values());

for (let val of map2.values()) {
  console.log("value", val);
}

for (let [key, value] of map2.entries()) {
  console.log(`key: ${key}, value: ${value}`);
}

for (let [key, value] of map2) {
  console.log(`key: ${key}, value: ${value}`);
}

map2.forEach((value, key) => {
  console.log(`(forEach) key: ${key}, value: ${value}`);
});

let testObj = {
  a: 1,
  b: 2
};

map2.set("obj", testObj);
console.log(map2);

map2.set(testObj, "obj")
console.log(map2)

testObj.c = 3;

console.log(map2.get(testObj));

testObj = {
  t: 21,
  u: 22
}
console.log(map2.get(testObj));

let myArr = [1, 2, 3];
map2.set(myArr, "array");

console.log(map2);

myArr.push(4);
console.log(map2.get(myArr));

myArr = [1, 2, 3];
console.log(map2.get(myArr));


map2.set(NaN, 65);
console.log(map2.get(NaN))

const otherNaN = Number("blahj");
console.log(map2.get(otherNaN))
console.log(otherNaN !== NaN)

console.log(Array.from(map2));
console.log([...map2]);

console.log(Array.from(map2.keys()), Array.from(map2.values()))

const clone = new Map(map2);

console.log(clone.get("name"));
console.log(clone === map2)

clone.set(5, 34);
console.log(clone, map2);

const newMap = new Map([[1, "str"], [2, "blah"], ["name", "Bob"]]);

const merged = new Map([ ...newMap, ...clone, ["my string", "my values"]]);
console.log(merged);

/**
 * const cache = new Map();

function expensiveOperation(obj) {
  if (cache.has(obj)) {
    console.log("Returning cached result");
    return cache.get(obj);
  }

  // Perform expensive operation
  const result = obj.value * 2; // Example logic
  cache.set(obj, result);
  return result;
}

const obj1 = { value: 10 };
const obj2 = { value: 20 };

console.log(expensiveOperation(obj1)); // Calculated and cached
console.log(expensiveOperation(obj1)); // Cached result returned
console.log(expensiveOperation(obj2)); // Calculated and cached
 */

/**
 * const entityStates = new Map();

const player = { id: 1, name: "Player1" };
const enemy = { id: 2, name: "Enemy1" };

// Associate states with entities
entityStates.set(player, { health: 100, position: { x: 0, y: 0 } });
entityStates.set(enemy, { health: 50, position: { x: 10, y: 10 } });

// Update entity states
entityStates.get(player).health -= 10;
entityStates.get(enemy).position.x += 5;

console.log(entityStates.get(player)); // { health: 90, position: { x: 0, y: 0 } }
console.log(entityStates.get(enemy));  // { health: 50, position: { x: 15, y: 10 } }
 */

