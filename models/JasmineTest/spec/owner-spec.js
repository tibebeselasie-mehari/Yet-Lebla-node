var ModelInstances = require("../src/models-instance");

var oracle = function(place){
    var sum = 0;
    for (var i = 0; i< place.ratings.length;i++){
        sum += place.ratings[i].value;
    }
    return Math.round((sum/place.ratings.length)*10)/10;
}


describe("Owner's full name", function () {
    it("should return full name", function () {
      var fullname = ModelInstances.owner.fullName;
      expect(fullname).toBe(ModelInstances.owner.FirstName + ' ' + ModelInstances.owner.LastName);
    });
  }); 

describe("Place name", function () {
    it("should return Place name", function () {
      var placename = ModelInstances.owner.placeName;
      expect(placename).toBe(ModelInstances.owner.place.place_name);
    });
  }); 


describe("Place Average Rating", function () {
  it("should return average rating", function () {
    var placeRating = ModelInstances.owner.placeRating;
    expect(placeRating).toBe(oracle(ModelInstances.owner.place));
  });
}); 
