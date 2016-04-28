/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */
"use strict";
/// <reference path="../../typings/tsd.d.ts" />
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