/**
 * Created by gabrielkunkel on 1/28/16 in TypeScript.
 */
/// <reference path="../typings/tsd.d.ts" />
config.$inject = ["$locationProvider", "$logProvider", "$routeProvider"];
function config($locationProvider, $logProvider, $routeProvider) {
    // todo: fix the html 5 mode. This was casuing routing problems
    // $locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    // });
    $logProvider.debugEnabled(true);
    $routeProvider
        .when("/", {
        template: "<testbox></testbox>"
    })
        .when("/durian", {
        template: "<durian-directive></durian-directive>"
    })
        .when("/dashboard", {
        template: "<dashboard></dashboard>"
    })
        .when("/challenges", {
        template: "<testbox></testbox>"
    })
        .otherwise("/dashboard");
}
angular
    .module("app")
    .config(config);
//# sourceMappingURL=app.config.js.map