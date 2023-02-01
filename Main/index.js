//git ignore
//make video
//make sure to finish read me

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', //default is input, and so you don't have to type this
        name: 'title',
        message: 'What is the name of your project?',
        default: 'Project 1'

    },
    {
        type: 'input', 
        name: 'description',
        message: 'Provide a brief description of your project',
        default: 'Still in progress'
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'What is your method of installation?',
        default: 'npm init'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'other'],
        default: 'MIT'
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        default: 'Use at your discretion.'
    },
    {
        type: 'input', 
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
        default: 'Please stand by while I go over your changes'
    },
    {
        type: 'input', 
        name: 'test',
        message: 'What tests can the user run to debug code?',
        default: 'npm test'
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email?',
        default: 'workemail@workemail.com'
    },
    {
        type: 'input', 
        name: 'github',
        message: 'What is your GitHub username?',
        default: 'githubuser'
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    const fileName = 'README.md'
    const information = generateMarkdown(answers)
    console.log(information)

    fs.writeFile(fileName, information, (err) => 
      err ? console.log(err) : console.log('Success!')
    );
  })
}

// Function call to initialize app
init();
