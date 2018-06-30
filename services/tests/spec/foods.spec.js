const foodService = require("../../foods");
const Food = require('../.././../models/models/Food');

describe("Foods service", function () {
  describe("retrieveAllFoods", function () {
    it("should call Food.find()", function () {
      let spy = spyOn(Food, "find").and.callThrough();
      foodService.retrieveAllFoods(5);
      expect(Food.find).toHaveBeenCalled();
    });
  
    it("should return an array of Food objects", function (done) {
      foodService.retrieveAllFoods().then(data => {
        done();
      });
    });
  });
});