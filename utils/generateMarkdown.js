// function to generate markdown for README
function generateMarkdown(data) {
  let license = "";
  let badge = "";
  if (data.license !== "Private repo") {
    license = `This application uses the ${data.license}.`
    badge = `https://img.shields.io/static/v1?label=license&message=${escape(data.license)}&color=green`//`https://img.shields.io/badge/<license>-<${data.license}>-<${"green"}>`
  } else {  
    license = "This is a private respository. All rights are exclusive to the owner of the repository."
    badge = `https://img.shields.io/static/v1?label=license&message=${escape(data.license)}&color=red`
  }

  let githubUsernameURL = `https://github.com/${data.username}`

  return `

  # ${data.title}

  ## Description

  ${data.description}

  ![license](${badge})

  ## Table of Contents  
   
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  [GitHub Profile](${githubUsernameURL})

  If you have any additional questions then please direct them via this email address: <${data.email}>
`;
}

module.exports = generateMarkdown;
