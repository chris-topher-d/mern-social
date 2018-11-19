const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Profile model
const ProfileModel = require('../models/Profile');
// User model
const UserModel = require('../models/User');

// @route  GET /profile
// @desc   Get current user's profile
// @access Private
router.get('/', (req, res) => { // Create protected route
  // Search Profile collection
});
