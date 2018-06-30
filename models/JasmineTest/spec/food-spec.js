var ModelInstances = require("../src/models-instance");

var oracle = function(food){
    var sum = 0;
    for (var i = 0; i< food.ratings.length;i++){
        sum += food.ratings[i].value;
    }
    return Math.round((sum/food.ratings.length)*10)/10;
}

describe("Food Average Rating", function () {
  it("should return average rating", function () {
    var foodRating = ModelInstances.burger.averageRating;
    expect(foodRating).toBe(oracle(ModelInstances.burger));
  });
}); 

describe("Number of Reviews", function () {
    it("should return number of reviews for the food", function () {
      var numOfReviews = ModelInstances.burger.numberOfReviews;
      expect(numOfReviews).toBe(ModelInstances.burger.reviews.length);
    });
  }); 

describe("Number of Ratings", function () {
    it("should return number of ratings for the food", function () {
      var numOfRatings = ModelInstances.burger.numberOfRatings;
      expect(numOfRatings).toBe(ModelInstances.burger.ratings.length);
    });
}); 

describe("First location of the food", function () {
    it("should return first location", function () {
      var firstLocation = ModelInstances.burger.firstLocation;
      expect(firstLocation).toBe(ModelInstances.burger.location[0].location);
    });
});