"use strict";
var ChallengeResourceService = (function () {
    function ChallengeResourceService($resource, API_URL) {
        this.$resource = $resource;
        this.API_URL = API_URL;
    }
    ChallengeResourceService.prototype.getChallengeResource = function () {
        return this.$resource(this.API_URL + "api/challenge/", {}, {
            "update": { method: "PUT" },
            "query": { method: "GET", isArray: false }
        });
    };
    ChallengeResourceService.$inject = ["$resource", "API_URL"];
    return ChallengeResourceService;
}());
exports.ChallengeResourceService = ChallengeResourceService; // class
angular
    .module("app")
    .service("challengeResourceService", ChallengeResourceService);
//# sourceMappingURL=challengeResource.service.js.map