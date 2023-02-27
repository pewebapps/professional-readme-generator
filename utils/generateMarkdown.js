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

  return `
  # ${data.title}
  ## Description

  ${data.description}

  ![license](${badge})

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

`;
}

module.exports = generateMarkdown;
