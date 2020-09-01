// function to generate markdown for README

function generateMarkdown(answers) {
  const licenses = {
    IBM:"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    Mozilla:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0",
    ISC:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  return `
  # ${answers.Title}
  ## ${answers.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Questions](#Questions)
  ## Installation
  * ${answers.Installation}
  ## Usage
  * Here is an example of the Project: ${answers.examples}
  ## License 
  * ${licenses[answers.licenses]}
  ## Contributions
  * Here is an additional file you will need to create: ${answers.contrubtions}
  ## Questions 
  * If you have any questions please contact me at https://github.com/${answers.contact}
  

  
`;
}

module.exports = generateMarkdown;
