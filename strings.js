// String Creation
const string1 = "A string primitive";
const string2 = 'Also string primitive';
const string3 = `String primitive`;
const string4 = new String("A string object");

string4.prop = "something";
string1.prop = "something else";
console.log(string4.prop, string1.prop);

// Length
console.log(string1.length);

// Character access
console.log(string1.charAt(2));
console.log(string1[2]);

// Case changes
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
// Better for non-latin characters
console.log(string1.toLocaleLowerCase(), string1.toLocaleUpperCase());

// String comparison
const a = "a";
const b = "B";
if (a < b) {
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

// Searching
//const string1 = "A string primitive";
console.log(string1.indexOf("A"), string1.indexOf("i"), string1.indexOf("string"), string1.indexOf("z"));
console.log(string1.lastIndexOf("A"), string1.lastIndexOf("i"), string1.lastIndexOf("string"), string1.lastIndexOf("z"));
console.log(string1.includes("string"), string1.includes("z"));
console.log(string1.startsWith("A"), string1.startsWith("B"));
console.log(string1.endsWith("A"), string1.endsWith("primitive"));

// Trim
const helloStr = "   hello  ";
console.log("++" + helloStr.trim() + "++");
console.log("++" + helloStr.trimStart() + "++");
console.log("++" + helloStr.trimEnd() + "++");

// Substrings
console.log("CS 3380".slice(1, -1)); // start, end; allows for negative indicies
console.log("CS 3380".substring(1, 4)); // start, end; doesn't allow for negative indicies
console.log("CS 3380".substr(1, 4)); // start, length; deprecated

// Split/Concat
console.log("asdf;l.kjsa.lkd".split("."));
console.log("hello".concat(" ", "world"));
