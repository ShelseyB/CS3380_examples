import fs from "node:fs";
const args = process.argv.slice(2);

console.log(args);

let options = {
    aFlag: false,
    bFlag: false,
    cFlag: false,
    lang: false,
    help: false
}

for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
        case "-a":
        case "--aFlag":
            options.aFlag = true;
            break;
        case "-l":
        case "--lang":
            options.lang = args[i + 1];
            break;
        case "--help":
        case "-h":
            options.help = true;
    }
}

function main() {

    if (options.help) {
        const helpTxt = fs.readFileSync("./help_text.txt", "utf8");
        console.log(helpTxt);
        return;
    }

    if (options.aFlag) {
        console.log("a flag has been triggered");
    }
    if (options.lang) {
        console.log("The language is", options.lang);
    }
    if (options.cFlag) {
        console.log("c flag has been triggered");
    }
}
main();