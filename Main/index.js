//read through professional markdown thing
//finish questions and finish template
//finish badges
//npm i

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
      type: 'list',
      name: 'license',
      message: 'Which license should yo use?',
      choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'other'],
    },
    {
      type: 'input', //default is input, and so you don't have to type this
      name: 'linkedin',
      message: 'Link to LinkedIn?',
    },
    {
      type: 'input', //default is input, and so you don't have to type this
      name: 'installation',
      message: 'What command should be run to install dependencies?',
      default: 'npm i'
    },
    {
      type: 'input', 
      name: 'usage',
      message: 'What does the user need to know about using the repo?'
    },
    {
      type: 'input', 
      name: 'contribution',
      message: 'What does the user need to know about contributing to the repo?'
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
