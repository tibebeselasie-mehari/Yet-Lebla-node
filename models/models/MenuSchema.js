var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodPriceSchema = require('./FoodPriceSchema');

module.exports = new Schema({
    title:{ type: String, required: true},
    body:{ type: [FoodPriceSchema], required: true},
    includes_vat:{ type: Boolean, required: false}
});