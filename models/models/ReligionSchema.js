var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
    name:{ type: String, required: false},
    description:{ type: String, required: false}
});