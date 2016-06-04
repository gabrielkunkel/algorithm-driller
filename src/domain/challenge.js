/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */
"use strict";
/// <reference path="../../typings/tsd.d.ts" />
var Challenge = (function () {
    function Challenge(answerString, difficulty, id, language, title, description, example, tests) {
        this.answerString = answerString;
        this.difficulty = difficulty;
        this.id = id;
        this.language = language;
        this.title = title;
        this.description = description;
        this.example = example;
        this.tests = tests;
    }
    return Challenge;
}());
exports.Challenge = Challenge;
//# sourceMappingURL=challenge.js.map