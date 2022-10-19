const Employee = require("../lib/Employee")

describe("Employee", () => {
  describe("test Employee's properties", () => {
    it("test all properties", () => {
      const employee = new Employee("Vince", 1, "dejuliusvince@gmail.com")
      expect(employee.name).toEqual("Vince")
      expect(employee.id).toEqual(1)
      expect(employee.email).toEqual("dejuliusvince@gmail.com")
    })
  })
  describe("test Employee's methods", () => {
    it("test all methods", () => {
      const employee = new Employee("Steve", 2, "steve@gmail.com")
      expect(employee.getName()).toEqual("Steve")
      expect(employee.getId()).toEqual(2)
      expect(employee.getEmail()).toEqual("steve@gmail.com")
      expect(employee.getRole()).toEqual("Employee")
    })
  })
})