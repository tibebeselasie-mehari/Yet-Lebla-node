const passport = require('passport');
require('../configs/passport')(passport);

exports.jwtAuth = passport.authenticate('jwt', { session: false });