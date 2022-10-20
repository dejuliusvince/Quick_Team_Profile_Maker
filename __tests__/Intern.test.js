const Intern = require("../lib/Intern")

//Same workflow as other test.js files, but applied to Intern propertes and methods
describe("Intern", () => {
  describe("test Intern's properties", () => {
    it("test all properties", () => {
      const intern = new Intern("Bob", 1, "bob@gmail.com", "OSU")
      expect(intern.name).toEqual("Bob")
      expect(intern.id).toEqual(1)
      expect(intern.email).toEqual("bob@gmail.com")
      expect(intern.school).toEqual("OSU")
    })
  })
  describe("test Intern's methods", () => {
    it("test all methods", () => {
      const intern = new Intern("Eric", 2, "eric@gmail.com", "PSU")
      expect(intern.getSchool()).toEqual("PSU")
      expect(intern.getRole()).toEqual("Intern")
    })
  })
})