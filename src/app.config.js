/// <reference path="../typings/tsd.d.ts" />
"use strict";
/**
 * Created by gabrielkunkel on 1/28/16 in TypeScript.
 */
// config.$inject: Array<string> = ["$stateProvider", "$urlRouterProvider"];
function config($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
        .state("dashboard", {
        template: "<dashboard></dashboard>",
        url: "/dashboard"
    })
        .state("challenges", {
        template: "<challenges></challenges>",
        url: "/challenges"
    })
        .state("home", {
        template: "<home></home>",
        url: "/"
    });
    $locationProvider.html5Mode(true);
}
angular
    .module("app")
    .config(config);
//# sourceMappingURL=app.config.js.map