/**
 * Created by gabrielkunkel on 2/15/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

interface IDashboardCtrl {

}

class Dashboard implements IDashboardCtrl {

    constructor(public $location: ng.ILocationService) {
        console.log($location.path());

        // if someone isn't logged in redirect them to the register page

    }

    public goToChallenges(): void {
        this.$location.replace();
        this.$location.path("/");
    }

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
