/// <reference path="../typings/tsd.d.ts" />

import {IUrlRouterProvider} from "angular-ui-router";
import {IStateProvider} from "angular-ui-router";

/**
 * Created by gabrielkunkel on 1/28/16 in TypeScript.
 */

// config.$inject: Array<string> = ["$stateProvider", "$urlRouterProvider"];

function config($urlRouterProvider: IUrlRouterProvider, 
                $stateProvider: IStateProvider,
                $locationProvider: ng.ILocationProvider,
                $authProvider: any): void {

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

        .state("register", {
            template: "<register></register>",
            url: "/register"
        })
    ;

    $locationProvider.html5Mode(true);

    $authProvider.google({
        clientId: "132605437656-3hn3c9558f0e8f81jbn1sojl8ik8gfob.apps.googleusercontent.com",
        //     url: API_URL + 'auth/google'
    });
}

angular
    .module("app")
    .config(config);

