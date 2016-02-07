/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />


  "use strict";

    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService): void {
        var challenges: app.domain.IChallenge[] = [];
        var challenge: app.domain.IChallenge;

    }

    var mockResource: any = angular
        .module("challengeResourceMock", ["ngMockE2E"]);

    mockResource.run(mockRun);



