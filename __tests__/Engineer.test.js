const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
  describe("test Engineer's properties", () => {
    it("test all properties", () => {
      const engineer = new Engineer("Brian", 1, "brian@yahoo.com", "brian.git")
      expect(engineer.name).toEqual("Brian")
      expect(engineer.id).toEqual(1)
      expect(engineer.email).toEqual("brian@yahoo.com")
      expect(engineer.github).toEqual("brian.git")
    })
  })

  describe("test Engineer's methods", ()=>{
   it("test all methods", () => {
    const engineer = new Engineer("Bill", 2, "bill@yahoo.com", "bill.git")
    expect(engineer.getGitHub()).toEqual("bill.git")
    expect(engineer.getRole()).toEqual("Engineer")
   })
  })
})