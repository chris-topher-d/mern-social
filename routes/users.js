const express = require('express');
const router = express.Router();

// @route  GET api/users/test
// @desc   Tests users route
// @access Public
router.get('/', (req, res) => {
  res.json({msg: 'Users route is working'});
});

// @route GET api/users
// @desc Tests passport authentication
// @access Private
router.get('/profile', (req, res) => {
  console.log('User profile has been accessed');
  res.send('User profile has been accessed');
});

module.exports = router;
