/**
 * Created by gabrielkunkel on 4/27/16 in JavaScript.
 */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: String,
  displayName: String,
  admin: { type: Boolean, default: false },
  pro: { type: Boolean, default: false },
  picture: String,
  google: String,
  github: String
});

module.exports = mongoose.model('User', userSchema);


/*
*
* Additional Schema Fields
* ========================
* admin: Boolean
* pro: Boolean
* challengesMastered: (see challenges)
* challenges: an array of objects that include:
*     testLevel,
*     _id of challenge,
*     timeLevel,
*     dateOfLastCompletion
*
* */