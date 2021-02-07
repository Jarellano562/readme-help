
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README

// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(answers) {
    return `
<h1 align="center">${answers.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-darkgreen)<br />

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-darkgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
${answers.contributing}

## Tests
 ${answers.tests}

 ## Questions
${answers.questions}<br />
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
 Email me with any questions: ${answers.email}<br /><br />
This README was generated with ❤️ by JESUS!) 
    `;
}

module.exports = generateMarkdown;