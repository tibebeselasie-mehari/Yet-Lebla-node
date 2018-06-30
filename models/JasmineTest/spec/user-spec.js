var ModelInstances = require("../src/models-instance");

describe("User's full name", function () {
  it("should return full name", function () {
    var fullname = ModelInstances.user.fullName;
    expect(fullname).toBe(ModelInstances.user.FirstName + ' ' + ModelInstances.user.LastName);
  });
}); 

describe("User's religion name", function () {
    it("should return religion name", function () {
      var religionName = ModelInstances.user.religionName;
      expect(religionName).toBe(ModelInstances.user.religion.name);
    });
}); 
