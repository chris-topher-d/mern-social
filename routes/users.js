const express = require('express');
const router = express.Router();
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

// @route  POST users/test
// @desc   Register new user
// @access Public
router.post('/login', (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'User not found'});
      } else {
        console.log(user);
      }
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

        newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      }
    });
});

module.exports = router;
