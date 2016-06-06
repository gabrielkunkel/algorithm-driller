/// <reference path="../../typings/tsd.d.ts" />

import {IStateService} from "angular-ui-router";
/**
 * Created by gabrielkunkel on 4/19/16 in TypeScript.
 */
 


interface INavbarCtrl {
        
}

class Navbar implements INavbarCtrl {

    public isAuthenticated: any;
    public meRes: any;
    public user: any;

    constructor(public $auth: any, 
                public $state: IStateService,
                private meResource: any) {

        this.isAuthenticated = this.$auth.isAuthenticated;

        this.meRes = meResource.getMeResource();
        
        this.meRes.query().$promise.then((data: any) => {
            this.user = data;
        });
    }

    public logout(): void {
        this.$auth.logout();
        this.$state.go("home");
    }

    public isAdmin(): boolean {
        if (this.user) {
            console.log(this.user.admin);
            return this.user.admin;
        }
        else {
            return false;
        }

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
