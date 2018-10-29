const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routes
const users = require('./routes/api/users');

const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// test route
app.get('/', (req, res) => {
  res.send('Test');
});

// Use routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
