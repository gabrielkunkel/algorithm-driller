/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */
"use strict";
angular
    .module("appMock", ["ngMockE2E"])
    .run(challengeResourceMock);
challengeResourceMock.$inject = ["$httpBackend"];
function challengeResourceMock($httpBackend) {
    var challenges = [];
    var challenge;
    challenge = {
        answerString: "function(str) {\n\treturn str.split('').reverse().join('');\n}",
        difficulty: 1,
        id: "1",
        language: 1,
        name: "Reverse a String",
        tests: [{
                description: "make sure it reverses the string (e.g. 'start' will become 'trats)",
                jasmineTest: "function () {\n\tvar a = 'abcdef';\n\texpect(runThisFunction(a)).toEqual('fedcba');\n}",
                test: "runThisFunction('abcdef') === 'fedcba'"
            }]
    };
    challenges.push(challenge);
    challenge = {
        answerString: "function(num) {\n\tif (num === 0) return 1;" +
            "\n\treturn num * runThisFunction(num-1);\n}",
        difficulty: 1,
        id: "2",
        language: 1,
        name: "Factorial",
        tests: [{
                description: "it should return the factorial of the number",
                jasmineTest: "function () {\n\texpect(runThisFunction(5)).toBe(120);\n}",
                test: "runThisFunction(5) === 120"
            }]
    };
    challenges.push(challenge);
    challenge = {
        answerString: "function(str) { \n\tvar elementToCompare, winner = ''; " +
            "\n\tvar array = str.split(' '); " +
            "\n\n\twhile(array.length > 0) {" +
            "\n\t\telementToCompare = array.pop();" +
            "\n\t\tif (elementToCompare.length > winner.length) {" +
            "\n\t\t\twinner = elementToCompare; \n\t}" +
            "\n\t}" +
            "\nreturn winner;" +
            "\n}",
        difficulty: 2,
        id: "3",
        language: 1,
        name: "Find the longest word in a string",
        tests: [{
                description: "make sure it finds the loooooooonnngest word",
                jasmineTest: "function() {\n\texpect(runThisFunction('The large planter fell off of the elevator').toEqual('elevator')\n}",
                test: "runThisFunction('The large planter fell off of the elevator') === 'elevator'"
            }]
    };
    challenges.push(challenge);
    // get all challenges
    $httpBackend.whenGET("api/challenge").respond(200, challenges);
    // pass through requests for anything else
    $httpBackend.whenGET(/./).passThrough();
}
//# sourceMappingURL=challengeResource.mock.js.map