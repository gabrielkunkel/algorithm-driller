/**
 * Created by gabrielkunkel on 2/15/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var components;
    (function (components) {
        "use strict";
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
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=dashboard.js.map