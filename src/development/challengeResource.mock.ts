/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

/* eslint max-len: 0 */

module app {
    "use strict";

    angular
        .module("appMock", ["ngMockE2E"])
        .run(challengeResourceMock);

    challengeResourceMock.$inject = ["$httpBackend"];
    function challengeResourceMock($httpBackend: ng.IHttpBackendService): void {
        var challenges: app.IChallenge[] = [];
        var challenge: app.IChallenge;

        challenge = new app.Challenge(
            "runThisFunction = function(str) {\n\treturn str.split('').reverse().join('');\n}",
            1, "1", 1, "Reverse a String", [{
                description: "make sure it reverses the string (e.g. 'start' will become 'trats)",
                test: "function () {\n\tvar a = 'abcdef';\n\texpect(runThisFunction(a)).toEqual('fedcba');\n}"
            }]);
        challenges.push(challenge);

        challenge = new app.Challenge("runThisFunction = function(num) {\n\tif (num === 0) return 1;" +
            "\n\treturn num * runThisFunction(num-1);\n}",
            1, "2", 1, "Factorial", [{
            description: "it should return the factorial of the number",
            test: "function () {\n\texpect(runThisFunction(5)).toBe(150);\n}"
        }]);
        challenges.push(challenge);

        challenge = new app.Challenge("runThisFunction = function(str) {\n\tvar i, arraylength, elementToCompare, " +
            "winner = '', winnerLength = winner.length;" + "\n\tvar array = str.split(' ');" +
        "\n\twhile(array.length > 0) {" + "\n\t\telementToCompare = array.pop();" +
            "\n\t\tif (elementToCompare.length > winner.length) {" + "\n\t\t\twinner = elementToCompare;" +
            "\n\t\t}" + "\n\t}" + "\n\nwinnerLength = winner.length;" + "\n\treturn winnerLength;" + "\n}", 3, "3",
            1, "Find the longest word in a string", [{
                description: "make sure it finds the loooooooonnngest word",
                test: "function() {\n\texpect(runThisFunction('The large planter fell off of the elevator').toEqual('elevator')\n}"
            },
            {
                description: "make sure it finds the longest word, regardless of punctutation",
                test: "function() {\n\texpect(runThisFunction('elevator elevato.$#&').toEqual('elevator')\n}"
            }]);
        challenges.push(challenge);

        // get all challenges
        $httpBackend.whenGET("api/challenge").respond(200, challenges);

        // pass through requests for anything else
        $httpBackend.whenGET(/./).passThrough();
    }

}

