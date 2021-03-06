var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./User');

module.exports = new Schema({
    value:{ type: Number, required: true},
    date:{ type: Date, required: true},
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});