var ModelInstances = require("../src/models-instance");

describe("Reviewer's full name", function () {
    it("should return Full Name", function () {
      var fullname = ModelInstances.review.criticName;
      expect(fullname).toBe(ModelInstances.review.user.fullName);
    });
  }); 