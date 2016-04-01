"use strict";
var ChallengeListItem = (function () {
    // isChecked
    function ChallengeListItem(flashCardQueue) {
        // code here
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
        scope: {
            onCheck: "&",
            onUnCheck: "&"
        },
        template: require("./challengeListItem.html")
    };
}
angular
    .module("app")
    .directive("challengeListItem", challengeListItem);
//# sourceMappingURL=challengeListItem.js.map