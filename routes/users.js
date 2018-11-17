const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
// const passport = require('passport');

// User model
const UserModel = require('../models/User');

// @route  GET users/test
// @desc   Tests users route
// @access Public
router.get('/', (req, res) => {
  res.json({msg: 'Users route is working'});
});

// @route  POST users/login
// @desc   Login user
// @access Public
router.post('/login', (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) return res.status(404).json({email: 'User not found'});

      // Compare provided password with encrypted password
      bcrypt.compare(req.body.password, user.password)
        .then(matched => {
          if (matched) {
            // User matched
            // Create JWT payload
            const payload = { id: user._id, name: user.name };
            // Sign token
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            });
          } else {
            return res.status(400).json({password: 'Password incorrect'});
          }
        });
    });
});

// @route  POST users/test
// @desc   Register new user
// @access Public
router.post('/register', (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({email: 'Email already registered'});
      } else {
        const newUser = new UserModel({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        // Encrypt password
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) throw err;
          // Assign hashed password to user object
          newUser.password = hash;
          // Save new user to DB
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      }
    });
});

module.exports = router;
