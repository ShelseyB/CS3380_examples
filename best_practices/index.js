// Naming Convention

// Function and variables
let totalPrice = 0;
function calcPrice() {}

// Classes
class ShoppingCart {}

// Indentation
function thisFunc(firstPrice, secondPrice) {
    totalPrice = 5 + 6;
}

// Comments

// BAD
function addToPrice(newPrice) {
    // Add the new price to the total
    totalPrice = newPrice + totalPrice;
}

// GOOD
function addFiveToPrice(newPrice) {
    // Local sales tax is always $5
    totalPrice = newPrice + totalPrice + 5;
}

// Clarify Complex Logic or API limitation
const api = {};
// Workaround for API bug: price has to be sent as a string
api.send({ price: String(totalPrice) });

// If function has side effects
// This will change global variable "price"
function addFiveToPrice(newPrice) {
    // Local sales tax is always $5
    totalPrice = newPrice + totalPrice + 5;
}

// At the top of files/modules or major functions

// JSDoc notation
/**
 * Return a random integer between min and max (inclusive)
 * @param {number} min - Minimum integer value
 * @param {number} max - Maximum integer value
 * @returns {number} Random integer
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TODO: Should check min value is greater than 0
// FIXME: Remove hardcoded value
// NOTE: This does this weird thing

// Semicolons - Automatic Semicolon Insertion (ASI)

// Variables & Scope
// const - if you can, if the variable is not going to change
// let - if value will change
// var - avoid

/**
 * Keep functions short and focused (1 responsibility).
 * Avoid repetition — use helper functions.
 * Group related functions or constants together.
 */