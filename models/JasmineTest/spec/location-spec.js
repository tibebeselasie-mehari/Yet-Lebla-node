var ModelInstances = require("../src/models-instance");

describe("Location", function () {
    it("should return formatted location", function () {
      var location = ModelInstances.location.location;
      expect(location).toBe("Latitude: 10 Longitude: 20");
    });
});