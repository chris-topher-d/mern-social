const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  handle: {
    type: String,
    required: true,
    max: 30
  }
});

module.exports = ProfileModel = mongoose.model('Profiles', ProfileSchema);
