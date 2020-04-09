const mongoose = require('mongoose');
const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  email : {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  password : {
    type: String,
    default: ''
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  }


  
});
module.exports = mongoose.model('UserSession', UserSessionSchema);