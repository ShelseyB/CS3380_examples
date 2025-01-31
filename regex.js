/** Regular Expressions */

let regex1 = /.hello/;
let regex2 = new RegExp("there");

const myStr = "hello there";
console.log(regex1.test(myStr), regex2.test(myStr));

// Matches at the beginning of the string
regex1 = /^hello/;
regex2 = /^there/;
console.log(regex1.test(myStr), regex2.test(myStr));

// Matches at the end of the string
regex1 = /hello$/;
regex2 = /there$/;
console.log(regex1.test(myStr), regex2.test(myStr));

// QUANTIFIERS
// Match 0 or more occurence
regex1 = /l*o/;
regex2 = /world*/;
console.log(regex1.test(myStr), regex2.test(myStr));

// Match if 1 or more
regex1 = /l+o/;
regex2 = /hello w+/
console.log(regex1.test(myStr), regex2.test(myStr));

// Match if 0 or 1
regex1 = /hello?/
regex2 = /w?orld/
console.log(regex1.test(myStr), regex2.test(myStr));

// Character class
regex1 = /[a-z]/;
regex2 = /[A-Z]/;
let regex3 = /[a-zA-Z]/;
console.log(regex1.test(myStr), regex2.test(myStr), regex3.test(myStr));

regex2 = /[l-p]/;
regex3 = /[abp]/;
console.log(regex2.test(myStr));

regex1 = /[l-p]+[1-5]?/;
console.log(regex1.test("this5"), regex1.test(myStr));

// Escaping special characters
regex1 = /\?/;
console.log(regex1.test("?"), regex1.test(myStr));

// OR
regex1 = /cat|dog|rabbit/;
console.log(regex1.test("I have a pet dog"), regex1.test("I have a pet snake"));

// Groups
regex1 = /pet (cat|dog|rabbit)/;
console.log(regex1.test("I have a pet dog"), regex1.test("I have a pet snake"), regex1.test("I have a dog"));

// Digits
regex1 = /\d/
regex2 = /\D/; // NOT a digit
console.log(regex1.test("5"), regex1.test(myStr));
console.log("\\D", regex2.test("5"), regex2.test(myStr));


// Word character (letter, digit, or underscore)
regex1 = /\w/;
regex2 = /\W/;
console.log(regex1.test(myStr), regex1.test("6"), regex1.test("_"), regex1.test(" "));
console.log("\\W", regex2.test(myStr), regex2.test("6"), regex2.test("_"), regex2.test(" "));


// Whitespace (space, tab, carriage return)
regex1 = /\s/;
regex2 = /\S/;
console.log(regex1.test(myStr), regex1.test("\t"), regex1.test("\r"), regex1.test("hi"));
console.log("\\S", regex2.test(myStr), regex2.test("\t"), regex2.test("\r"), regex2.test("hi"));

// Example: email
let email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
console.log(email_regex.test("shelsey.sullivan@uvu.edu"), email_regex.test("sally_mae@gmail.com"), email_regex.test("bobby@gmail.com"));

// match
let phone_num = /\d+/;
let phone_num_str = "My phone number is 4357804321, Bob's number is 6783746"
console.log(phone_num_str.match(phone_num));

// replace
console.log(phone_num_str.replace(phone_num, "******"));


// Flags

// Global matching
phone_num = /\d+/g;
console.log(phone_num_str.match(phone_num));

// Case insensitive
regex1 = /HellO/i;
console.log(regex1.test(myStr), regex1.test("HELLOOOO"));

// Multiline
regex1 = /^there/m;
regex2 = /is$/m;
const multilineStr = `there
is
a 
dog`;
console.log(regex1.test(multilineStr), regex2.test(multilineStr));


