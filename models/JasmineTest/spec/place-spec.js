var ModelInstances = require("../src/models-instance");

var oracle = function(place){
    var sum = 0;
    for (var i = 0; i< place.ratings.length;i++){
        sum += place.ratings[i].value;
    }
    return Math.round((sum/place.ratings.length)*10)/10;
}


describe("Place Average Rating", function () {
  it("should return average rating", function () {
    var placeRating = ModelInstances.McDonalds.averageRating;
    expect(placeRating).toBe(oracle(ModelInstances.McDonalds));
  });
}); 

describe("Number of Reviews", function () {
    it("should return number of reviews for the place", function () {
      var numOfReviews = ModelInstances.McDonalds.numberOfReviews;
      expect(numOfReviews).toBe(ModelInstances.McDonalds.reviews.length);
    });
  }); 

describe("Number of Ratings", function () {
    it("should return number of ratings for the place", function () {
      var numOfRatings = ModelInstances.McDonalds.numberOfRatings;
      expect(numOfRatings).toBe(ModelInstances.McDonalds.ratings.length);
    });
}); 

describe("First location of the place", function () {
    it("should return first location", function () {
      var firstLocation = ModelInstances.McDonalds.firstLocation;
      expect(firstLocation).toBe(ModelInstances.McDonalds.location[0].location);
    });
});