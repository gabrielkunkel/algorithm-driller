"use strict";
var ChallengeListItem = (function () {
    function ChallengeListItem(flashCardQueue) {
        this.flashCardQueue = flashCardQueue;
        this.isChecked = false;
        if (this.flashCardQueue.existsById(this.challengeObject.id)) {
            this.isChecked = true;
        }
    }
    ChallengeListItem.prototype.switchCheck = function () {
        if (!this.isChecked) {
            this.onUnCheck();
        }
        else {
            this.onCheck();
        }
    };
    ChallengeListItem.prototype.onCheck = function () {
        this.flashCardQueue.addToQueue(this.challengeObject);
        console.log("Added to Queue!");
    };
    ChallengeListItem.prototype.onUnCheck = function () {
        this.flashCardQueue.removeById(this.challengeObject.id);
        console.log("Removed from Queue!");
    };
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
            challengeObject: "="
        },
        template: require("./challengeListItem.html")
    };
}
angular
    .module("app")
    .directive("challengeListItem", challengeListItem);
//# sourceMappingURL=challengeListItem.js.map