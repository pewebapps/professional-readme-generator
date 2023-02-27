// function to generate markdown for README
function generateMarkdown(data) {
  let license = "";
  if (data.license !== "Private repo") {
    license = `This repository uses the ${data.license}.`
  } else {
    license = "This is a private respository. All rights are exclusive to the owner of the repository."
  }

  return `
  # ${data.title}
  ## Description
  ${data.description}
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
