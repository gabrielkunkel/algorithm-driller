/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
  "use strict";
  (function (languages) {
    languages[languages["Java"] = 0] = "Java";
    languages[languages["JavaScript"] = 1] = "JavaScript";
    languages[languages["Ruby"] = 2] = "Ruby";
  })(app.languages || (app.languages = {}));
  var languages = app.languages;
  var Challenge = (function () {
    function Challenge(answerString, difficulty, id, language, name, tests) {
      this.answerString = answerString;
      this.difficulty = difficulty;
      this.id = id;
      this.language = language;
      this.name = name;
      this.tests = tests;
    }
    return Challenge;
  })();
  app.Challenge = Challenge;
})(app || (app = {}));
//# sourceMappingURL=challenge.js.map