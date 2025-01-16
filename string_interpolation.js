// Function to create a detailed greeting with birth year calculation
function createDetailedGreeting(name, age) {
  // const newStr = `Blah blah ${name} blah blah ${age}`
    
    // Calculate birth year
    // const birthYear = 2025 - age;
    function calcBirthYear(age) {
      return 2025 - age;
    }

    // create message 
    const msg = `Hello, ${name}! You are ${age} years old, 
and you were born in ${calcBirthYear(age)}. Dang, ${name}, you are ${
  age > 25 ? 
  "old" : 
  "young"}!`;

    // return message
    return msg;
  }
  
  // Example usage
  const userName = 'Bob';
  const userAge = 45;
  
  // Generate the detailed greeting message
  const detailedMessage = createDetailedGreeting(userName, userAge);
  
  // Output the detailed message
  console.log(detailedMessage);
  // Output: "Hello, Bob! You are 25 years old, and you were born in 1999."