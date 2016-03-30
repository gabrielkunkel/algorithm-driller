/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
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
        services.ChallengeResourceService = ChallengeResourceService; // class
        angular
            .module("app")
            .service("challengeResourceService", ChallengeResourceService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=challengeResource.service.js.map