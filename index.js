const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./Assets/generateLogo")

const questions = [{
    message : "Enter up to three characters: ",
    type : "input",
    name : "characters",
},{
    message : "Pick a text color: ",
    type : "input",
    name : "color", 
},{
    message : "Pick a shape:",
    type : "list",
    name : "shape",
    choices : ["square", "circle", "triangle"],
},{
    message : "Pick shape color:",
    type : "input",
    name : "shapeColor",
}];

// function that writes
function writeToFile(fileName, data) {
    const text = generateLogo(data);
    fs.writeFile(fileName, text, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
            );
}

// function that initializes the app
function init() {
    inquirer 
    .prompt(questions)
    .then((data) => {
        console.log(data);
        const fileNameForLogo = `Assets/logo.svg`;
        writeToFile(fileNameForLogo, data);
    });
}
init();