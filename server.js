const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// Import passport strategy
require('./passport');

const app = express();

// Import routes
const auth = require('./routes/auth');
const users = require('./routes/users');

// body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// test route
app.get('/', (req, res) => {
  res.send('Test');
});

// Use routes
app.use('/auth', auth);
app.use('/users', passport.authenticate('jwt', {session: false}), users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
