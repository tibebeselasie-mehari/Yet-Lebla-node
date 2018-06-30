var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var Place = require('./Place');

var schema = new Schema({
    owner_id:{ type: Number, required: true},
    FirstName:{ type: String, required: true},
    LastName:{ type: String, required: true},
    username:{ type: String, required: true},
    pass_hash:{ type: String, required: true},
    place:{ type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true},
    isVerified:{ type: Boolean, required: true}
});

schema.virtual('fullName').get(function() {
    return this.FirstName + ' ' + this.LastName;
});
schema.virtual('placeName').get(function() {
    return this.place.place_name;
});
schema.virtual('placeRating').get(function() {
    return this.place.averageRating;
});




schema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

schema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};



module.exports = mongoose.model('PlaceOwner', schema);