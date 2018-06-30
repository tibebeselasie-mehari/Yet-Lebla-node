var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    report_id:{ type: Number, required: true},
    reason:{ type: String, required: true},
    additional_note:{ type: String, required: true}
   });

module.exports = mongoose.model('UserReport', schema);