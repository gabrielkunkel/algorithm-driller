/**
 * Created by gabrielkunkel on 1/28/16 in TypeScript.
 */
/// <reference path="../typings/tsd.d.ts" />
config.$inject = ["$locationProvider"];
function config($locationProvider) {
    $locationProvider.html5Mode(true);
}
angular
    .module("app")
    .config(config);
//# sourceMappingURL=app.config.js.map