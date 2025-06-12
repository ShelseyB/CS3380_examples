// The following values are "falsy"

console.log("Boolean(0)", Boolean(0));
console.log("Boolean('')", Boolean(''));
console.log("Boolean(undefined)", Boolean(undefined));
console.log("Boolean(null)", Boolean(null));
console.log("Boolean(NaN)", Boolean(NaN));
// Everything else is "truthy"

// Even if a variable has a value, if it's one of these, if statements won't get triggered
const value = "";
if (value) {
    console.log("Truthy")
} else {
    console.log("Falsy");
}

// Convert to Boolean
if (!!value) {
    console.log("Truthy", !!value)
} else {
    console.log("Falsy", !!value, !value);
}

// Explicit Coercion
console.log(Number("4"));
console.log(String(123));

// String Concatenation
console.log('5' + 2);    // "52" (string concatenation)
console.log('Hello' + 1) // "Hello1"
console.log(2 + 2 + '5') // "45" (2 + 2 is 4, then coerced to string and concatenated)
console.log('10' * 2, "10" - 2, null * 2);

// // undefined and null in arithmetic
// // undefined gets coerced to NaN
console.log(undefined + 5);
console.log(undefined / 10);
// null gets coerced to 0
console.log(null + 5);
console.log(null / 10);

// // Comparisons with ==, performs type coercion
console.log("null == 0", null == 0);
console.log("null == undefined", null == undefined)
console.log("0 == ''", 0 == ''); 
console.log("'0' == 0", '0' == 0);

// Comparisons with ===, no type coercion
console.log("null === 0", null === 0);
console.log("null === undefined", null === undefined)
console.log("0 === ''", 0 === ''); 
console.log("'0' === 0", '0' === 0);

// // Converting objects to primitives
const obj = { value: 10 };
console.log(obj + 5); // "[object Object]5"

const customObj = {
//   valueOf() {
//     return 42;
//   },
  toString() {
    return "string"
  }
};
console.log(customObj + 5); // 47
console.log(customObj + " now")

// // Array/Object to strings
// // Arrays get converted to strings when added
console.log("[1, 2] + [3, 4]", [1, 2] + [3, 4]);
console.log("[1, 2] - [3, 4]", [1, 2] - [3, 4]);
console.log("[1, 2] * [3, 4]", [1, 2] * [3, 4]);
console.log("[1, 2] / [3, 4]", [1, 2] / [3, 4]);

// // /** Best Practices!
// //  * 1. Use === and !== over == and !=
// //  * 2. Use explicit type conversion String(), Number(), or Boolean()
// //  * 3. Avoid Mixed-Type Operations:
// //  *  - Try to keep operand types consistent (e.g., avoid adding numbers to strings).
// //  * 4. Validate Inputs/Types:
// //  */
let numVal = Number(value)
if (typeof numVal === 'number') {
    console.log(value * 2);
} else {
    console.error('Invalid input type');
}
