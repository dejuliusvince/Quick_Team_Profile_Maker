//Need a class constructor to create properties and methods to generate employee object, 
//repeat for Engineer, Intern, and Manager according to instructions on the readme
//be sure to import Employee library to all three as it is the parent

class Employee{
  constructor(name, id, email){
    this.name = name
    this.id = id
    this.email = email
  }
  getName(){
    return this.name
  }

  getId(){
    return this.id
  }

  getEmail(){
    return this.email
  }

  getRole(){
    return "Employee"
  }
}

module.exports = Employee