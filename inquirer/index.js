import inquirer from "inquirer";

function main() {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What's your name?",
            waitUserInput: true
        },
        {
            type: "number",
            name: "age",
            message: "What's your age?",
            waitUserInput: true
        },
        {
            type: "checkbox",
            name: "hobbies",
            message: "What's your hobbies?",
            waitUserInput: true,
            choices: ["knitting", "programming", "soccer"]
        }
    ];

    inquirer.prompt(questions)
        .then(resp => {
            console.log(resp);
            console.log(`Hello ${resp.name}! You are ${resp.age} years old! Your hobbies are ${resp.hobbies.join(", ")}`)
        })
}

main();