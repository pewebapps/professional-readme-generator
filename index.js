const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "This is a Professional README generator. You will be asked to enter several pieces of information.\nPlease enter the title of your README to get started: "
    },
    {
        type: "input",
        name: "description",
        message: "README description?"
    },
    {
        type: "input",
        name: "installation",
        message: "Installations instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the app?"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to have for your repository?",
        choices: [
            "MIT License",
            "GNU General Public License v3.0",
            "Apache",
            "Private repo"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "How can other developers contribute?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are there and how should they be run?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log("Success!");
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile("README.md", generateMarkdown(answers))
    })
    .catch((error) => {
        console.log("An error occurred: ");
    })
}

// function call to initialize program
init();
