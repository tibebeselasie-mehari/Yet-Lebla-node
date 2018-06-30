var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = require('./RatingSchema');
var ReviewSchema = require('./ReviewSchema');
var LocationSchema = require('./LocationSchema');
var MenuSchema = require('./MenuSchema');

var schema = new Schema({
    
    place_id:{ type: Number, required: true, unique: true},
    place_name:{ type: String, required: true, unique: true},
    description:{ type: String, required: true},
    year_of_foundation:{ type: Date, required: false},
    ratings:{ type: [RatingSchema], required: false},
    pictures:{ type: [String], required: false},
    reviews:{ type: [ReviewSchema], required: false},
    menus:{ type: [MenuSchema], required: false},
    location:{ type: [LocationSchema], required: true, unique: true}
    });
schema.virtual('averageRating').get(function() {
    var sum = 0;
    for (var i = 0; i< this.ratings.length;i++){
        sum += this.ratings[i].value;
    }
    return Math.round((sum/this.ratings.length)*10)/10;
});
schema.virtual('numberOfReviews').get(function() {
    return this.reviews.length;
});
schema.virtual('numberOfRatings').get(function() {
    return this.ratings.length;
});
// schema.virtual('firstLocation').get(function() {
//     if(this.location.length > 0){
//         return this.location[0].location;
//     }
//     return "unknown";
// });

module.exports = mongoose.model('Place', schema);