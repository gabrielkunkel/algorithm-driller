/// <reference path="../typings/tsd.d.ts" />

import {IUrlRouterProvider} from "angular-ui-router";
import {IStateProvider} from "angular-ui-router";

/**
 * Created by gabrielkunkel on 1/28/16 in TypeScript.
 */

// config.$inject: Array<string> = ["$stateProvider", "$urlRouterProvider"];

function config($urlRouterProvider: IUrlRouterProvider, 
                $stateProvider: IStateProvider,
                $locationProvider: ng.ILocationProvider): void {

    $urlRouterProvider.otherwise("/dashboard");

    $stateProvider

        .state("dashboard", {
            template: "<dashboard></dashboard>",
            url: "/dashboard",
        })

        .state("challenges", {
            template: "<challenges></challenges>",
            url: "/challenges"
        })

        .state("home", {
            template: "<home></home>",
            url: "/"
        })
    ;

    $locationProvider.html5Mode(true);
}

angular
    .module("app")
    .config(config);

