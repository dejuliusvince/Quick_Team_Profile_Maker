const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Employee = require("./lib/Employee")

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

function init() {
  inquirer
    .prompt(managerQuestions)
    .then(response => {
      const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)

      employeeArray.push(manager)

      confirmProceed()

    })

}

function confirmProceed(){
  inquirer.prompt([{
    type: "confirm",
    message: "Would you like to add another employee?",
    name:"addAnother"
  }])
  .then(response=>{
    if(addMore===true){
      addEmployee()
    }
    else{
      createHTML()
    }
  })
}

function addEmployee(){
    inquirer.prompt([{
      type: "list",
      message: "Would you like to add an Engineer or Intern?",
      choices:["Engineer","Intern"],
      name: "selection"
    }])
    .then(response=>{
      if(response.selection==="Engineer"){
        addEngineer()
      }
      else {
        addIntern()   
      }
    })
}

function addEngineer(){
    inquirer.prompt(engineerQuestions)
        .then(response=>{
          //call function using
        })
}

function addIntern(){

}

function createHTML(){

}



init()