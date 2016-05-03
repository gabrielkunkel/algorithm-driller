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

  /* 
   * 
   * Additional Schema Fields
   * ========================
   * testChallengeDifficulty: 000-100
   * challengeType: String
   * description: String
   * 
   * add subdocument for tests
   * =========================
   * testDescription: String
   * answerString: String
   * testChallengeDifficulty: Number
   * test: String
   * usageExample: String
   * testType: String (could be, "hideTests", "test", "speedDrill")
   *
   * */

});

module.exports = mongoose.model('Challenge', challengeSchema);