/**
 * Created by gabrielkunkel on 2/15/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

module app.components {
    "use strict";

    interface IDashboardCtrl {

    }

    class Dashboard implements IDashboardCtrl {

        // this component's controller is empty for now.

    }

    function dashboard(): ng.IDirective {
        return {
            bindToController: true,
            controller: Dashboard,
            controllerAs: "vm",
            replace: true,
            restrict: "AE",
            template: require("./dashboard.html"),
        };
    }

    angular
        .module("app")
        .directive("dashboard", dashboard);
}
