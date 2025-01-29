const set1 = new Set();
const set2 = new Set([1, 2, 3, 4, 5, 1, 1, 1]);

console.log(set1, set2);

set1.add(45);
set1.add(78);
set1.add(78);

console.log(set1);

console.log(set1.has(45), set1.has(98));

set1.delete(45);
console.log(set1);

set1.clear();
console.log(set1);

for (let value of set2) {
    console.log("value", value);
}

set2.forEach(value => {
    console.log("value", value);
})

console.log(set2.size);

// Difference (A \ B)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log(setA.difference(setB));

// Intersection
console.log(setA.intersection(setB));

// Symmetric Difference
console.log(setA.symmetricDifference(setB));

// Union
console.log(setA.union(setB));

// is disjointed?
const setC = new Set([7, 8, 9])
console.log(setA.isDisjointFrom(setB), setA.isDisjointFrom(setC));

// Subset
const setD = new Set([1]);
console.log(setA.isSubsetOf(setD), setD.isSubsetOf(setA));

// Superset
console.log(setA.isSupersetOf(setD), setD.isSupersetOf(setA));

const map = new Map([[5, "blah"], [6, "blah2"]]);
console.log(setA.union(map));

