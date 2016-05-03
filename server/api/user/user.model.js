/**
 * Created by gabrielkunkel on 4/27/16 in JavaScript.
 */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: String,
  displayName: String,
  role: { type: String, default: 'free' }, // free, editor, pro, admin
  picture: String,
  google: String,
  github: String
});

module.exports = mongoose.model('User', userSchema);


/*
*
* Additional Schema Fields
* ========================
* challengesMastered: (see challenges)
* challenges: an array of objects that include:
*     testLevel,
*     _id of challenge,
*     timeLevel,
*     dateOfLastCompletion
*
* */