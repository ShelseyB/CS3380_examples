import fs from "node:fs/promises";

// Grab the passed in arguments
const args = process.argv.slice(2);

console.log("args", args);

function doB(debugMode) {
    if (debugMode) console.log("There was a b flag");
}

function doC(debugMode) {
    if (debugMode) console.log("There was a c flag");
}

function main() {
    let options = {
        bFlag: false,
        cFlag: false,
        nameFlag: false,
        name: ""
    };

    // args.forEach(arg => {
    //     if (arg === "-b" || arg === "--bflag") {
    //         options.bFlag = true;
    //     } else if (arg === "-c" || arg === "--cflag") {
    //         options.cFlag = true;
    //     } else if (arg === "-d" || arg === "--debug") {
    //         options.debugMode = true;
    //     }
    // });

//     const help_text = `
// Flags:
// -c or --cflag: does the c option
// -b or --bflag: does the b option
// -d or --debug: Enables debug mode
// `

    const flags = ["-b", "-c", "--bflag"];
    console.log("args", args);
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === "-b" || arg === "--bflag") {
            options.bFlag = true;
        } else if (arg === "-c" || arg === "--cflag") {
            options.cFlag = true;
        } else if (arg === "-d" || arg === "--debug") {
            options.debugMode = true;
        } else if (arg === "--name") {
            options.nameFlag = true;
            options.name = args[i + 1];
            if (typeof options.name === "undefined" || flags.includes(options.name)) {
                console.error("Name is required");
                return;
            }
            i += 1;
        } else if (arg === "-h" || arg === "--help") {
            // console.log(help_text);
            fs.readFile("./help_text.txt", "utf8")
                .then(file_contents => {
                    console.log(file_contents);
                })
        }
    }

    if (options.nameFlag) {
        console.log(`Why hello there, ${options.name}`)
    }

    if (options.bFlag) {
        doB(options.debugMode);
    }

    if (options.cFlag) {
        doC(options.debugMode);
    }

    if (!options.bFlag && !options.cFlag) {
        console.warn("No parameters were given, -b or -c is required")
    }
}

main();
