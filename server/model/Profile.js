const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  email : {
    type: String,
    default: ''
  },
  username : {
    type: String,
    default: ''
  },
  dogName: {
    type: String,
    default: ''
  },
  dogBreed : {
    type: String,
    default: ''
  },
  dogAge: {
    type: String,
    default: ''
  },
  dogPhoto : {
    type: String,
    default: ''
  },
  preferrenceBreed: {
    type: String,
    default: ''
  },
  dogSize: {
    type: String,
    default: ''
  },
  dogPersonality: {
    type: String,
    default: ''
  },

});
module.exports = mongoose.model('ProfileSession', ProfileSchema);