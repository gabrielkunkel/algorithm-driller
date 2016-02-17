/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var mongoose = require('mongoose');

var challengeSchema = mongoose.Schema({

  answerString: String,
  difficulty: Number,
  language: String,
  name: String,
  tests: Array

  // times gotten incorrect per user session: array
  // jasmine tests in tests
  // alternative solutions
  // description of the problem
  //

});

module.exports = mongoose.model('Challenge', challengeSchema);