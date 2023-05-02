// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'what is the description of the project?',
    },
    {
      type: 'input',
      name: 'Table of Contents',
      message: 'Add Table of Contents.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What Installations are needed?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'how do you use this project',
    },
    {
        type: 'input',
        name: 'License',
        message: ' what License was used?',
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'who or what helped Contribute to this project?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'what test did you do?',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'what questions do you have about the project?',
      },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
