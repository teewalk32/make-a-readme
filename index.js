// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateMarkdown');
const path = require('path')

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is the description of the project?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What Installations are needed?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How do you use this project?',
    },
    {
        type: 'input',
        name: 'License',
        message: ' What License was used?',
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Who or what helped Contribute to this project?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What test did you do?',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Add link to your github profile.',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'What is your email adderess?',
      },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);
console.log(htmlPageContent)
    // fs.writeFile('readme.md', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
    writeToFile('generatereadme', htmlPageContent)
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
