var ModelInstances = require("../src/models-instance");

describe("User's full name", function () {
  it("should return full name", function () {
    var fullname = ModelInstances.moderator.fullName;
    expect(fullname).toBe(ModelInstances.moderator.FirstName + ' ' + ModelInstances.moderator.LastName);
  });
}); 