var ModelInstances = require("../src/models-instance");

describe("User's full name", function () {
  it("should return full name", function () {
    var fullname = ModelInstances.admin.fullName;
    expect(fullname).toBe(ModelInstances.admin.FirstName + ' ' + ModelInstances.admin.LastName);
    //console.log(fullname);
  });
}); 