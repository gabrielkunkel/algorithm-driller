/// <reference path="../../typings/tsd.d.ts" />

import {IStateService} from "angular-ui-router";
/**
 * Created by gabrielkunkel on 4/19/16 in TypeScript.
 */
 


interface INavbarCtrl {
        
}

class Navbar implements INavbarCtrl {

    public isAuthenticated: any;

    constructor(public $auth: any, 
                public $state: IStateService) {

        this.isAuthenticated = this.$auth.isAuthenticated;
    }

    public logout(): void {
        this.$state.go("home");
        this.$auth.logout();
    }

} // end class

function navbar(): ng.IDirective {
    return {
        bindToController: true,
        controller: Navbar,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        scope: {},
        template: require("./navbar.html"),
    };
}

angular
    .module("app")
    .directive("navbar", navbar);
