var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    report_id:{ type: Number, required: true},
    reason:{ type: String, required: true},
    additional_name:{ type: String, required: true},
    should_ban:{ type: Boolean, required: true}
});

module.exports = mongoose.model('ModeratorReport', schema);