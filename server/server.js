const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');


const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
//  Import User: 
const User = require('./model/user');
const UserSession = require('./model/UserSession');


// Developed connection to MongoDB: 
const dbRoute =
  'mongodb+srv://mimi:ZqDbk8tB5fQzINmS@clusterd-i8ypo.mongodb.net/test?&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true })
.then(() => console.log("MongoDb connected"))
.catch(err => console.log(err));

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// New addition: 

app.post('/api/signup', (req, res, next) => {
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;
  
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  email = email.toLowerCase();
  email = email.trim();
  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }
    // Save the new user
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      });
    });
  });
});


// For log out: 

app.get('/api/account/logout', (req, res, next) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token=test
  // Verify the token is one of a kind and it's not deleted.
  UserSession.findOneAndUpdate({
    _id: token,
    isDeleted: false
  }, {
    $set: {
      isDeleted: true,
      token:""
    }
  }, null, (err, sessions) => {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    return res.send({
      success: true,
      message: 'Good'
    });
  });
});

// For verify token: 

app.get('/api/verify', (req, res, next) => {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token=test
  // Verify the token is one of a kind and it's not deleted.
  UserSession.find({
    _id: token,
    isDeleted : false
    // isDeleted: false
  }, (err, sessions) => {
    if (err) {
      console.log(err);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    if (sessions.length != 1) {
      
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    } else {
      
      return res.send({
        success: true,
        message: 'Good'
        
      });
    
    }
  });
});



app.get('/api/verify_user', (req, res, next) => {
  // Get the token
  const { query } = req;
  const { token} = query;
   UserSession.find({
    _id: token,
    isDeleted : false,
  }, (err, sessions) => {
    if (err) {
      // console.log(sessions);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    if (sessions.length != 1) {
      
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    } else {

      console.log(sessions[0].email);
      return res.send({
        success: true,
        message: 'session success 2',
        useremail: sessions[0].email
        
      });
    }
  });
  
  

});

// For signin: 
app.post('/api/signin', (req, res, next) => {
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  email = email.toLowerCase();
  // email = email.trim();
  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      console.log('err 2:', err);
      return res.send({
        success: false,
        message: 'Error: server error'
      });
    }
    if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid user'
      });
    }
    const user = users[0];
    if (!user.validPassword(password)){
      return res.send({
        success: false,
        message: 'Error: Invalid pwd'
      });
    }
    // Otherwise correct user
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.email = user.email;
    userSession.password = user.password;
    userSession.signUpDate = user.signUpDate;
    userSession.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      return res.send({
        success: true,
        message: 'Valid sign in',
        token: doc._id
      });
    });
  });
});

// For getAccount information: 
app.get('/api/getAccount',(req,res,next) =>{
  const { query } = req;
  const {
   token
  } = query;
  console.log(token);
  UserSession.find({
    _id: token,
  },(err,sessions) =>{
    if (err){
      console.log(err);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    }
    if (sessions.length != 1) {
      console.log(sessions);
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }else {
      console.log(sessions);
      return res.send({
        success: true,
        message: 'Back-end good',
        Userid: token,
        password: sessions[0].password,
        signUpDate: sessions[0].signUpDate,
        Email: sessions[0].email,

      });
    }

  }
  
  
  )

});






// append /api for our http requests
app.use('/api', router);


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

module.exports = app;

