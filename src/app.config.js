/// <reference path="../typings/tsd.d.ts" />
"use strict";
/**
 * Created by gabrielkunkel on 1/28/16 in TypeScript.
 */
// config.$inject: Array<string> = ["$stateProvider", "$urlRouterProvider"];
function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
        .state("dashboard", {
        template: "<dashboard></dashboard>",
        url: "/dashboard"
    })
        .state("challenges", {
        template: "<challenges></challenges>",
        url: "/challenges"
    });
}
angular
    .module("app")
    .config(config);
//# sourceMappingURL=app.config.js.map