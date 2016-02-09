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
        this.options = {
          indentWithTabs: true,
          lineNumbers: true,
          tabSize: 2
        };
        this.textboxContent = "Start string";
        var challengeResource = challengeResourceService.getChallengeResource();
        challengeResource.query(function (data) {
          _this.textboxContent = data[0].answerString;
          console.log(data);
        });
      }
      Testbox.$inject = ["challengeResourceService"];
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