const Schema = require('mongoose').Schema;

module.exports = new Schema({
    // reviewer : {
    //     type: Schema.ObjectId,
    //     ref: 'Profile',
    //     unique: true,
    //     required: true
    // },
    reviewer : {
        type: String,
        required: true
    },
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    stars : {
        type : Number,
        required : false
    }
});