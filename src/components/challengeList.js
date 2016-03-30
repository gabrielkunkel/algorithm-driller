/**
 * Created by gabrielkunkel on 3/22/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var component;
    (function (component) {
        "use strict";
        var ChallengeList = (function () {
            function ChallengeList(challengeResourceService) {
                var _this = this;
                this.challengeResourceService = challengeResourceService;
                this.challengeResource = challengeResourceService.getChallengeResource();
                this.challengeResource.query(function (data) {
                    _this.challengeCollection = data;
                });
            }
            ChallengeList.$inject = ["challengeResourceService"];
            return ChallengeList;
        }());
        function challengeList() {
            return {
                bindToController: true,
                controller: ChallengeList,
                controllerAs: "vm",
                replace: true,
                restrict: "AE",
                scope: {
                    challengeCollection: "="
                },
                template: require("./challengeList.html")
            };
        }
        angular
            .module("app")
            .directive("challengeList", challengeList);
    })(component = app.component || (app.component = {}));
})(app || (app = {}));
//# sourceMappingURL=challengeList.js.map