var person2 = {
    name: "Bob",
    age: 34,
    isStudent: false
};
function greet2(name, age) {
    console.log("Hello ".concat(name, ", you are ").concat(age));
}
greet2(person2.name, person2.age);
