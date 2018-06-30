var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    lat:{ type: Number, required: true},
    long:{ type: Number, required: true}
});
schema.virtual('location').get(function() {
    return "Latitude: " + this.lat + " Longitude: " + this.long;
});
module.exports = schema;