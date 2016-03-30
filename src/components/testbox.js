/**
 * Created by gabrielkunkel on 1/30/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        "use strict";
        var Testbox = (function () {
            function Testbox(challengeResourceService) {
                var _this = this;
                this.challengeResourceService = challengeResourceService;
                /**
                 * Options available: https://codemirror.net/doc/manual.html
                 * @type {{indentWithTabs: boolean, lineNumbers: boolean, tabSize: number}}
                 */
                this.options = {
                    indentWithTabs: true,
                    lineNumbers: true,
                    tabSize: 2
                };
                this.textboxContent = "function () {\n\n\t// Enter your code here. return your result\n\n}";
                this.challengeName = "(Challenge Title)";
                this.showCorrect = false;
                this.challengeResource = challengeResourceService.getChallengeResource();
                this.challengeResource.query(function (data) {
                    var dataNumber = 0; // exclusively for development
                    _this.answer = data[dataNumber].answerString;
                    _this.challengeName = data[dataNumber].name;
                    _this.testArray = data[dataNumber].tests;
                });
            }
            /**
             * Click to detect if answer in textbox is correct. If so
             * make this.showCorrect === true, to set up change to next
             * algorithm challenge.
             */
            Testbox.prototype.tester = function () {
                var allTestsPassed = false;
                var testsPassed = 0;
                var runThisFunction = eval("(" + this.textboxContent + ")");
                for (var i = 0; i < this.testArray.length; i += 1) {
                    var evaluatedTest = eval(this.testArray[i].test);
                    if (evaluatedTest) {
                        testsPassed += 1;
                    }
                }
                if (testsPassed === this.testArray.length) {
                    this.showCorrect = true;
                }
            };
            /**
             * If user has given up they can put the stored correct answer into
             * the textbox.
             */
            Testbox.prototype.showAnswer = function () {
                this.textboxContent = this.answer;
            };
            // intitialize
            Testbox.$inject = ["challengeResourceService"];
            return Testbox;
        }());
        function testbox() {
            return {
                bindToController: true,
                controller: Testbox,
                controllerAs: "vm",
                replace: true,
                restrict: "AE",
                template: require("./testbox.html")
            };
        }
        angular
            .module("app")
            .directive("testbox", testbox);
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=testbox.js.map