/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";
mockRun.$inject = ["$httpBackend"];
function mockRun($httpBackend) {
  var challenges = [];
  var challenge;
}
var mockResource = angular
    .module("challengeResourceMock", ["ngMockE2E"]);
mockResource.run(mockRun);
//# sourceMappingURL=challengeResource.mock.js.map