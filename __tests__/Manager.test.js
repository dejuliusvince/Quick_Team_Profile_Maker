const Manager = require("../lib/Manager")

//Test Manager.js using same logic as other test.js files
describe("Manager", () => {
  describe("test Manager's properties", ()=>{
    it ("test all properties", () => {
      const manager = new Manager("Jack", 1, "jack@gmail.com", 10)
      expect(manager.name).toEqual("Jack")
      expect(manager.id).toEqual(1)
      expect(manager.email).toEqual("jack@gmail.com")
      expect(manager.officeNumber).toEqual(10)
    }) 
  })
  describe("test Manager's methods", ()=>{
    it ("test all methods", ()=>{
      const manager = new Manager("Jim", 2, "jim@gmail.com", 10)
      expect(manager.getRole()).toEqual("Manager")
    })
  })
})