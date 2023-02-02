// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  switch (data) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case 'APACHE 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case 'BSD 3':
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    default: //return empty string
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { 
  switch (data) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT"
    case 'APACHE 2.0':
      return "https://opensource.org/licenses/Apache-2.0"
    case 'BSD 3':
      return "https://opensource.org/licenses/BSD-3-Clause"
    default: //return empty string
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  switch (data) {
    case 'MIT':
      return "The license used in this project is the MIT License. For more information, check out the documentation below:"
    case 'APACHE 2.0':
      return"The license used in this project is the APACHE 2.0 License. For more information, check out the documentation below:"
    case 'BSD 3':
      return "The license used in this project is the BSD 3 License. For more information, check out the documentation below:"
    default: //return empty string
      break;
  }
}

//inline code block can be in sentence with one back tic
// \ will escape character after it, js will treat it as plain text
//three back tics will create code block
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  
  - i. [Description](#description)
  - ii. [General Information](#general-information)
    - i. [Installation](#installation)
    - ii. [Usage](#usage)
    - iii. [Contributions](#contributions)
    - iv. [Tests](#tests)
  - iii. [License](#license)
  - iv. [Questions](#questions)

  ## Description
  
  ${data.description}

  ## General Information
  
  ### Installation
  
  To install the necessary dependencies, run the following command:
  
  \`\`\`${data.installation}\`\`\`

  ### Usage 

  ${data.usage}
  
  ### Contributions

  ${data.contribution}
  
  ### Tests

  To run tests on the code, use the following command:

  \`\`\`${data.test}\`\`\`

  ## License

  ${renderLicenseSection(data.license)}
  
  ${renderLicenseLink(data.license)}

  ## Questions
  
  If you have any further questions, please email me at [${data.email}](${data.email}).
  
  Here is my [Github Profile](https://github.com/${data.github}) for more information on my other projects. 

`;
}

module.exports = generateMarkdown;
