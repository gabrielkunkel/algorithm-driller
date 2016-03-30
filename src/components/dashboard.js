/**
 * Created by gabrielkunkel on 2/15/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var Dashboard = (function () {
    function Dashboard() {
    }
    return Dashboard;
}());
function dashboard() {
    return {
        bindToController: true,
        controller: Dashboard,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        template: require("./dashboard.html")
    };
}
angular
    .module("app")
    .directive("dashboard", dashboard);
//# sourceMappingURL=dashboard.js.map