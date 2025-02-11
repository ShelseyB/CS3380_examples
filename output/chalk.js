import chalk from "chalk";

/** Colors */
// See https://www.npmjs.com/package/chalk for a full list of built-in colors
console.log(chalk.red("This is red text"));
console.log(chalk.green("This is green text"));
console.log(chalk.blue("This is blue text"));

/** Custom Colors */
console.log(chalk.rgb(123, 45, 67)("Custom color!"));
console.log(chalk.hex('#FFA500')("Custom color 2"));

// /** Setting variables */
const error = chalk.red;
const warning = chalk.hex('#FFA500');
console.log(error("This is an error!"));
console.log(warning("This is a warning!"));

// /** Background Colors */
// // See https://www.npmjs.com/package/chalk for a full list of built-in background colors
console.log(chalk.bgRed('Red background'));
console.log(chalk.bgMagenta("Magenta background"));

// /** Text Modifiers */
console.log(chalk.bold("This text is bold"))
console.log(chalk.dim("This text is dim"), "This text is dim") // (doesn't work in my terminal)
console.log(chalk.italic("This text is italicized"))
console.log(chalk.underline("This text is underlined\n"))
console.log(chalk.overline("This text is overlined")) // Not supported in my terminal :(
console.log(chalk.strikethrough("This text is strikethrough"))
console.log(chalk.bgRed.hidden("This text is hidden"));

// // Custom background colors
console.log(chalk.rgb(15, 100, 204).inverse('Hello!'));

// /** Chaining */
console.log(chalk.red.bgBlue("This is chained")) // Colors on a colored bg don't work for me
console.log(chalk.bold.bgBlue("This is also chained"))

// /** Custom logging functions */

function logError(msg) {
    console.log(chalk.red.bold(msg));
}

function logWarning(msg) {
    console.log(warning(msg));
}

logError("This is my custom error logger");
logWarning("This is my custom warning logger");
