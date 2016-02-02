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
            function Testbox() {
                this.textboxContent = "runThisFunction = function(str) {" +
                    "\n\treturn str.split('').reverse().join('');" +
                    "\n}";
                this.options = {
                    indentWithTabs: true,
                    lineNumbers: true,
                    tabSize: 2
                };
            }
            return Testbox;
        })();
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