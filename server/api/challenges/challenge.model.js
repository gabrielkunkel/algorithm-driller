/**
 * Created by gabrielkunkel on 2/1/16 in JavaScript.
 */

var mongoose = require('mongoose');

var challengeSchema = mongoose.Schema({

  id: _id,
  language: String,
  name: String,
  difficulty: Number,
  answerString: String

});

module.exports = mongoose.model('Challenge', challengeSchema);