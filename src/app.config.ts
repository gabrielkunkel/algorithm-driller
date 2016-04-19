/// <reference path="../typings/tsd.d.ts" />

import {IUrlRouterProvider} from "angular-ui-router";
import {IStateProvider} from "angular-ui-router";

/**
 * Created by gabrielkunkel on 1/28/16 in TypeScript.
 */

// config.$inject: Array<string> = ["$stateProvider", "$urlRouterProvider"];

function config($urlRouterProvider: IUrlRouterProvider, $stateProvider: IStateProvider): void {

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

    ;
}

angular
    .module("app")
    .config(config);

