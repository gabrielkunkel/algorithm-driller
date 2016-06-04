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
                $authProvider: any,
                API_URL: string, 
                GOOGLE_CLIENT_ID: string): void {

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

        .state("newCard", {
            template: "<new-card></new-card>",
            url: "/card/new"
        })
    ;

    $locationProvider.html5Mode(true);

    $authProvider.google({
        clientId: GOOGLE_CLIENT_ID,
        url: API_URL + "auth/google"
    });
}

angular
    .module("app")
    .config(config);


