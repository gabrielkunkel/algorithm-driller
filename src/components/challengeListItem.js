/**
 * Created by gabrielkunkel on 3/28/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var component;
    (function (component) {
        "use strict";
        var ChallengeListItem = (function () {
            function ChallengeListItem(flashCardQueue) {
                // type code here
                this.flashCardQueue = flashCardQueue;
            }
            ChallengeListItem.$inject = ["flashCardQueue"];
            return ChallengeListItem;
        }());
        function challengeListItem() {
            return {
                bindToController: true,
                controller: ChallengeListItem,
                controllerAs: "vm",
                replace: true,
                restrict: "AE",
                template: require("./challengeListItem.html")
            };
        }
        angular
            .module("app")
            .directive("challengeListItem", challengeListItem);
    })(component = app.component || (app.component = {}));
})(app || (app = {}));
//# sourceMappingURL=challengeListItem.js.map