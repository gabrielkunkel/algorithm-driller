/// <reference path="../typings/tsd.d.ts" />
"use strict";
/**
 * Created by gabrielkunkel on 1/28/16 in TypeScript.
 */
// config.$inject: Array<string> = ["$stateProvider", "$urlRouterProvider"];
function config($urlRouterProvider, $stateProvider, $locationProvider, $authProvider) {
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
    })
        .state("register", {
        template: "<register></register>",
        url: "/register"
    });
    $locationProvider.html5Mode(true);
    $authProvider.google({
        clientId: "132605437656-3hn3c9558f0e8f81jbn1sojl8ik8gfob.apps.googleusercontent.com"
    });
}
angular
    .module("app")
    .config(config);
//# sourceMappingURL=app.config.js.map