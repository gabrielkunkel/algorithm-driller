"use strict";
var ChallengeResourceService = (function () {
    function ChallengeResourceService($resource) {
        this.$resource = $resource;
    }
    ChallengeResourceService.prototype.getChallengeResource = function () {
        return this.$resource("api/challenge/", {}, {
            "update": { method: "PUT" }
        });
    };
    ChallengeResourceService.$inject = ["$resource"];
    return ChallengeResourceService;
}());
exports.ChallengeResourceService = ChallengeResourceService; // class
angular
    .module("app")
    .service("challengeResourceService", ChallengeResourceService);
//# sourceMappingURL=challengeResource.service.js.map