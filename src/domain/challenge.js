/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */
"use strict";
/// <reference path="../../typings/tsd.d.ts" />
(function (languages) {
    languages[languages["Java"] = 0] = "Java";
    languages[languages["JavaScript"] = 1] = "JavaScript";
    languages[languages["Ruby"] = 2] = "Ruby";
})(exports.languages || (exports.languages = {}));
var languages = exports.languages;
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
}());
exports.Challenge = Challenge;
//# sourceMappingURL=challenge.js.map