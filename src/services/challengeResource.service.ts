/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

(function (): void {
    "use strict";

    interface IChallengeResourceService { }

    challengeResource.$inject = ["$resource"];
    function challengeResource($resource: ng.resource.IResourceService): IChallengeResourceService {
        return $resource("api/challenge/", {},
            {
                "update": { method: "PUT"},
            }
        );
    }

    angular
        .module("app")
        .factory("challengeResource", challengeResource);
})();
