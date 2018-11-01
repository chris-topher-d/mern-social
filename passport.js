const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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
