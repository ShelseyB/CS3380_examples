/* Log Levels */

console.log("This is a log");
console.warn("This is a warning");
console.error("This is an error");

/** They all display the same in node.js, so why use anything other than console.log?
 * DevTools: in web browsers they get logged with different colors
 * log + warn go to stdout, error goes to stderr
 */

/** Other Console Functions */
// console.assert("0" == 0, "Assertion failed, '0' != 0")
// console.assert("0" === 0, "Assertion failed, '0' !== 0")

// Displays count of how many times something has been logged
// console.count("a"); 
// console.count("b"); 
// console.count("a"); 
// console.count("a"); 
// console.count("a"); 
// console.count("b"); 
// console.count("b"); 
// console.count("b"); 

// console.log("\nresetting 'a'");
// console.countReset("a");
// console.count("a"); 
// console.count("a"); 

// console.clear();

// const obj = {
//     a: 1,
//     b: 2,
//     subObj: {
//         c: 2,
//         d: 3,
//         subSubObj: {
//             e: 4,
//             f: 5
//         }
//     }
// };
// console.dir(obj, {colors: false, depth: 0});
// console.log("obj", obj);
// Object.defineProperty(obj, 'hiddenProperty', {
//     value: 'secret',
//     enumerable: false, // Makes it non-enumerable
// });
// console.dir(obj, {showHidden: true});

/** console.debug()
 * Helps log messages that should only be used during development and can be disabled in production.
 * Many browsers and logging tools allow filtering logs by level, so console.debug() messages can be hidden when not needed. */
// console.debug("Debugging message");
// console.debug("Sample debug message with args: %d", 39);
// console.debug("This is a %s", "sample debug message!");
// console.debug("Debug message: Warning at function %s: line number %d ", "ff()", 96);


// console.group('User Details');
// console.log('Name: Alice');
// console.log('Age: 25');
// console.groupEnd();

// console.info("Info message!");
// console.info("sample info message with args: %d", 39);

// console.trace("Tracing from here")

// console.time(), console.timeLog(), and console.timeEnd()

// const label = "addCount Timer"
// function addCount() { 
//     let sum = 0; 
//     for (let i = 1; i < 100000; i++) {
//         sum += i; 
//         if (sum % 1000 == 0) {
//             console.timeLog(label)
//         }
//     }
//     return sum; 
// } 
// console.time(label); 

// addCount(); 
    
// // Ends the timer and print the time 
// // taken by the piece of code 
// console.timeEnd(label); 

/** String formatting */
// const items = [
//     { name: 'Apples', price: 1.2 },
//     { name: 'Bananas', price: 0.8 }
// ];

// items.forEach(item => {
//     console.log(`${item.name.padEnd(10)} $${item.price.toFixed(2)}`);
// });

// console.log("42".padStart(5, "0"));
// console.log("42".padEnd(5, ".")); 

// console.log("\u00E9".normalize("NFC"));

// console.log(123.456.toPrecision(4));
// console.log(0.004567.toPrecision(2));

// console.log((123456).toExponential(2));

// const arrayItems = items.map(it => it.name);
// console.table(items);
// console.table(arrayItems);
// console.table(items, ["name"]);

/** Logging Emojis */
console.log('✔️ Task completed');
console.log('❌ Task failed');

/** Using Unicode characters: https://home.unicode.org/ */
console.log('\u2714 Task completed'); // ✔
console.log('\u274C Task failed'); 

/** Copy and paste from websites such as https://emojipedia.org/ */
console.log("🐾");

/** Using VSCode
 * Windows: `Windows key` + .
 * MacOS: `Cmd` + `Ctrl` + `Space bar`
 */
console.log("🎶");

/** Formatting using ANSI escape codes
 * \x1b[31m → Red text
 * \x1b[32m → Green text
 * \x1b[34m → Blue text
 * \x1b[1m → Bold
 * \x1b[4m → Underline
 * \x1b[41m → Red background
 */
// console.log("\x1b[32mGreen text\x1b[0m");
// console.log("\x1b[1;34mBold blue text\x1b[0m");
// console.log("\x1b[41mRed background\x1b[0m");


