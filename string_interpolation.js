const hello = "hello";
const name = "Bob";

console.log(hello + " " + name);

console.log(`${hello} ${name}!`);

function createDetailedGreeting(name, age) {
  function calcBirthYear(age) {
    return 2025 - age;
  }

  const msg = `Hello, ${name}! You are ${age} years old,
and you were born in ${calcBirthYear(age)}. Dang, ${name}, you are ${
  age > 25 ? 
    "old" : 
    "young"
}!`;

  return msg;
}

const detailedMsg = createDetailedGreeting("Bob", 24);
const detailedMsg2 = createDetailedGreeting("Jimmy", 44);

// Output the message
console.log(detailedMsg);
console.log(detailedMsg2);