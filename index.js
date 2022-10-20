// Need to import all necessary libraries

const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Employee = require("./lib/Employee")


//Need to import functions to generate HTML cards based on user input
const managerCard = require("./src/managerHTML")
const engineerCard = require("./src/engineerHTML")
const internCard = require("./src/internHTML")


//Function for html page boilerplate where cards will be displayed
const generateHTML = require("./src/generateHTML")

//Empty array to push Employee objects into as they are generated
const employeeArray = []

//Need to create an array of question objects for Manager, Engineer, and Intern
const managerQuestions = [
  {
    type: "input",
    message: "What is the name of the manager?",
    name: "managerName"
  },
  {
    type: "input",
    message: "What is the id of the manager?",
    name: "managerId"
  },
  {
    type: "input",
    message: "What is the email of the manager?",
    name: "managerEmail"
  },
  {
    type: "input",
    message: "What is the office number of the manager?",
    name: "managerOfficeNumber"
  },
]

const engineerQuestions = [
  {
    type: "input",
    message: "What is the name of the engineer?",
    name: "engineerName"
  },
  {
    type: "input",
    message: "What is the id of the engineer?",
    name: "engineerId"
  },
  {
    type: "input",
    message: "What is the email of the engineer?",
    name: "engineerEmail"
  },
  {
    type: "input",
    message: "What is the github profile of the engineer?",
    name: "engineerGitHub"
  },
]

const internQuestions = [
  {
    type: "input",
    message: "What is the name of the intern?",
    name: "internName"
  },
  {
    type: "input",
    message: "What is the id of the intern?",
    name: "internId"
  },
  {
    type: "input",
    message: "What is the email of the intern?",
    name: "internEmail"
  },
  {
    type: "input",
    message: "What school does the intern attend?",
    name: "internSchool"
  },
]

//Initialize app, create the Manager, and ask the user if they wish to proceed with adding more employees
function init() {
  inquirer
    .prompt(managerQuestions)
    .then(response => {
      const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)

      employeeArray.push(manager)

      confirmProceed()

    })

}

//If the user wishes to proceed, calls addEmployee, if not, will generate the html document 

function confirmProceed() {
  inquirer.prompt([{
    type: "confirm",
    message: "Would you like to add another employee?",
    name: "addAnother"
  }])
    .then(response => {
      if (response.addAnother === true) {
        addEmployee()
      }
      else {
        createHTML()
      }
    })
}

//Ask the user to choose between adding an Engineer or Intern, and call the cooresponding function
function addEmployee() {
  inquirer.prompt([{
    type: "list",
    message: "Would you like to add an Engineer or Intern?",
    choices: ["Engineer", "Intern"],
    name: "selection"
  }])
    .then(response => {
      if (response.selection === "Engineer") {
        addEngineer()
      }
      else {
        addIntern()
      }
    })
}

function addEngineer() {
  inquirer.prompt(engineerQuestions)
    .then(response => {
      const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub)

      employeeArray.push(engineer)

      confirmProceed()
    })
}

function addIntern() {
  inquirer.prompt(internQuestions)
  .then(response => {
    const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)

    employeeArray.push(intern)

    confirmProceed()
  })
}

//Generate html page, looping through the array storing employee objects and 
//create the individual cards using template literal in cooresponding HTML.js files
function createHTML() {
    console.log(employeeArray)
    

    let cards = ""
    for(let i = 0; i < employeeArray.length; i++){
      if(employeeArray[i].getRole()==="Manager"){
          cards = cards + managerCard(employeeArray[i])
      }
      else if(employeeArray[i].getRole()==="Engineer"){
          cards = cards + engineerCard(employeeArray[i])
      }
      else {
          cards = cards + internCard(employeeArray[i])
      }
    }
    fs.writeFileSync("./dist/teamprofiles.html", generateHTML(cards))
}



init()