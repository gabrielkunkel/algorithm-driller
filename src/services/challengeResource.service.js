/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
(function () {
    "use strict";
    challengeResource.$inject = ["$resource"];
    function challengeResource($resource) {
        return $resource("api/challenge/", {}, {
            "update": { method: "PUT" }
        });
    }
    angular
        .module("app")
        .factory("challengeResource", challengeResource);
})();
//# sourceMappingURL=challengeResource.service.js.map