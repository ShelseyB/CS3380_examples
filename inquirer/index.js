import inquirer from 'inquirer';

function promptBasedOnAge(age) {

    inquirer
      .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "socials",
            message: age > 30 ? "Are you on FaceBook?" : "What's your IG handle?"
        }
      ])
      .then((answers) => {
        // Use user feedback for... whatever!!
        console.log("answers", answers);
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });

}

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "name1",
        message: "What is your name?"
    },
    {
        type: "number",
        name: "age",
        message: "What is your age?"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("answers", answers);
    promptBasedOnAge(answers.age);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });