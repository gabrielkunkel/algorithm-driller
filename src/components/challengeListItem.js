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
//# sourceMappingURL=challengeListItem.js.map