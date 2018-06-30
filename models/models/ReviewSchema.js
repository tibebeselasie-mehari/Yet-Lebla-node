var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./User');

module.exports = new Schema({
    title:{ type: String, required: true},
    body:{ type: String, required: true},
    date:{ type: Date, required: true},
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});