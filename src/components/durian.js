/**
 * Created by gabrielkunkel on 1/30/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
  var example;
  (function (example) {
    "use strict";
    var Durian = (function () {
      function Durian() {
        this.love = "JavaScript!";
      }
      Durian.prototype.showTheLove = function () {
        return "I love " + this.love;
      };
      return Durian;
    })();
    function durianDirective() {
      return {
        bindToController: true,
        controller: Durian,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        template: require("./durian.html"),
        transclude: true
      };
    }
    angular
            .module("app")
            .directive("durianDirective", durianDirective);
  })(example = app.example || (app.example = {}));
})(app || (app = {}));
//# sourceMappingURL=durian.js.map