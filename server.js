const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// Import routes
const users = require('./routes/users');

const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect ot MongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Initialize Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use routes
app.use('/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
