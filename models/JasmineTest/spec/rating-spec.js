var ModelInstances = require("../src/models-instance");

describe("Rater's username", function () {
    it("should return username", function () {
      var uname = ModelInstances.rating.username;
      expect(uname).toBe(ModelInstances.rating.user.username);
    });
  }); 