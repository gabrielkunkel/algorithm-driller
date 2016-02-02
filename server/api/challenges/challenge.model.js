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

});

module.exports = mongoose.model('Challenge', challengeSchema);