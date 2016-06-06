"use strict";
var ChallengeList = (function () {
    function ChallengeList(challengeResourceService) {
        var _this = this;
        this.challengeResourceService = challengeResourceService;
        this.challengeResource = challengeResourceService.getChallengeResource();
        this.challengeResource.query().$promise.then(function (data) {
            _this.challengeCollection = data.data;
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
        template: require("./challengeList.html")
    };
}
angular
    .module("app")
    .directive("challengeList", challengeList);
//# sourceMappingURL=challengeList.js.map