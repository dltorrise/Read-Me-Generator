// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge
  switch (data.license) {
    case 'MIT':
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case 'APACHE 2.0':
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case 'BSD 3':
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    default: //return empty string
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink 
  switch (data.license) {
    case 'MIT':
      licenseLink = "https://opensource.org/licenses/MIT"
      break;
    case 'APACHE 2.0':
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
      break;
    case 'BSD 3':
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
      break;
    default: //return empty string
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseDescription
  switch (data.license) {
    case 'MIT':
      licenseDescription = "The license used in this project is the MIT License. For more information, check out the documentation below:"
      break;
    case 'APACHE 2.0':
      licenseDescription = "The license used in this project is the APACHE 2.0 License. For more information, check out the documentation below:"
      break;
    case 'BSD 3':
      licenseDescription = "The license used in this project is the BSD 3 License. For more information, check out the documentation below:"
      break;
    default: //return empty string
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${badge}
  
  ## Table of Contents
  
  ## Description, Installation, Usage, Contributing, and Tests

  ${data.description}

  ${data.usage}

  ${data.contribution}

  To install the necessary dependencies, run the following command:
  
  ${data.installation}

  ## License

  ${licenseDescription}
  
  ${licenseLink}

  ## Questions
  
  If you have any further questions, please email me at (${data.email})[${data.email}]
  
  Here is my [Github Profile](https://github.com/${data.github}) for more information on my other projects. 

`;
}

module.exports = generateMarkdown;
