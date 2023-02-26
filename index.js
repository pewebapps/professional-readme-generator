const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your README:"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        console.log("An error occurred: ");
    })
}

// function call to initialize program
init();
