var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = require('./RatingSchema');
var ReviewSchema = require('./ReviewSchema');
var LocationSchema = require('./LocationSchema');
var ReligionSchema = require('./ReligionSchema');
var Place = require('./Place');

var schema = new Schema({
    // food_id:{ type: Number, required: true, unique: true},
    food_name:{ type: String, required: true},
    price:{ type: String, required: true},
    ratings:{ type: [RatingSchema], required: false},
    pictures:{ type: [String], required: false},
    reviews:{ type: [ReviewSchema], required: false},
    place:{ type: mongoose.Schema.Types.ObjectId, ref: 'Place'},
    // location:{ type: [LocationSchema], required: true},
    posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: false},
    approved_by: { type: mongoose.Schema.Types.ObjectId, ref: 'ContentModerator', required: false, unique: false},
    post_date:{ type: Date, required: false},
    allowed_by:{ type: [ReligionSchema], required: false}
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

module.exports = mongoose.model('Food', schema);