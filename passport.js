const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const keys = require('./config/keys');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, callback) {
    // find user with email and password
    return UserModel.findOne({email, password})
      .then(user => {
        // if user is not found
        if (!user) {
          return callback(null, false, {message: 'Incorrect email or password.'});
        }
        // else if user is found
        return callback(null, user, {message: 'Logged in successfully'});
        })
        .catch(err => callback(err));
  }
));

// Allows requests with valid tokens only
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
  },
  function(jwtPayload, callback) {
    // Find the user in the db if needed. This functionality may be omitted if you store everything you need in the JWT payload.
    return UserModel.findOneById(jwtPayload.id)
      .then(user => {
        return callback(null, user);
      })
      .catch(err => {
        return callback(err);
      });
  }
));

module.exports = passport;
