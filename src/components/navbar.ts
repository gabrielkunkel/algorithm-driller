/**
 * Created by gabrielkunkel on 4/19/16 in TypeScript.
 */
 
 /// <reference path="../../typings/tsd.d.ts" />

interface INavbarCtrl {
        
}

class Navbar implements INavbarCtrl {

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
