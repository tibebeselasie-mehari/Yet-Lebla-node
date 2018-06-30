var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Food = require('./Food');

module.exports = new Schema({
    food:{ type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true},
    price:{ type: Number, required: false}
});