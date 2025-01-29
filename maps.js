// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Map creation
const map1 = new Map();

// Map creation with initialized values
const map2 = new Map([
  ['name', 'Alice'],
  ['age', 25]
]);
console.log(map2); 

// Get the size of the map
console.log(map2.size, map1.size)

// For referrence, here's how you would get the size of an object:
const obj = {
    a: 1,
    b: 2
};
console.log(Object.keys(obj).length);

map2.set(25, "Bob");
console.log(map2);

console.log(map2.get(25));

console.log(map2.has("name"), map2.has(78), map2.get(78));

map2.delete(25);
console.log(map2);

// map2.delete(78);

// // map2.clear();

// console.log(map2);

// map2["blah"] = "blah blah";
// console.log(map2);
// console.log(map2.has("blah"));
// map2.delete("blah")
// console.log(map2, map2["blah"]);

for (let key of map2.keys()) {
  console.log("key", key);
}

console.log(map2.keys(), map2.values());

for (let val of map2.values()) {
  console.log("value", val);
}

for (let [key, value] of map2.entries()) {
  console.log(`key: ${key}, value: ${value}`);
}

for (let [key, value] of map2) {
  console.log(`key: ${key}, value: ${value}`);
}

map2.forEach((value) => {
  console.log(`(forEach) key: , value: ${value}`);
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

myArr = [4, 5, 6];
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

const merged = new Map([...clone, ...newMap, ["my string", "my values"]]);
console.log(merged);

