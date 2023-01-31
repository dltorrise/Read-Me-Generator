// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', //default is input, and so you don't have to type this
        name: 'nameofProject',
        message: 'What is the name of your project?',
        default: 'Project 1'

    },
    {
      type: 'input', //default is input, and so you don't have to type this
      name: 'description',
      message: 'Provide a brief description of your project'
    },
    {
      type: 'input', //default is input, and so you don't have to type this
      name: 'installation',
      message: 'What is your method of installation?',
      default: 'npm init'
    },
    {
      type: 'input', //default is input, and so you don't have to type this
      name: 'food',
      message: 'What is your favorite food?',
      default: 'Cheetos'
    },
    {
      type: 'input', //default is input, and so you don't have to type this
      name: 'linkedin',
      message: 'Link to LinkedIn?',
    },
    {
      type: 'input', //default is input, and so you don't have to type this
      name: 'github',
      message: 'Link to Github?',
    },
    {
      type: 'password', 
      name: 'secret',
      message: 'What is your deepest secret?',
      mask: '*'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown()
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    //took from activity 20
    const fileName = 'README.md'

    fs.writeFile(fileName, writeToFile(answers), (err) => //ignore if there's no answer and \t
      err ? console.log(err) : console.log('Success!')
    );
  })
}

// Function call to initialize app
init();
