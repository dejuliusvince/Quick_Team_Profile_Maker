const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Employee = require("./lib/Employee")

const managerCard = require("./src/managerHTML")
const engineerCard = require("./src/engineerHTML")
const internCard = require("./src/internHTML")



const generateHTML = require("./src/generateHTML")


const employeeArray = []

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
    message: "What is the github profile of the manager?",
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
    message: "What is the id of the engineer?",
    name: "internId"
  },
  {
    type: "input",
    message: "What is the email of the engineer?",
    name: "internEmail"
  },
  {
    type: "input",
    message: "What school does the intern attend?",
    name: "internSchool"
  },
]

function init() {
  inquirer
    .prompt(managerQuestions)
    .then(response => {
      const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)

      employeeArray.push(manager)

      confirmProceed()

    })

}

function confirmProceed() {
  inquirer.prompt([{
    type: "confirm",
    message: "Would you like to add another employee?",
    name: "addAnother"
  }])
    .then(response => {
      if (response.addMore === true) {
        addEmployee()
      }
      else {
        createHTML()
      }
    })
}

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
      const engineer = new Manager(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub)

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