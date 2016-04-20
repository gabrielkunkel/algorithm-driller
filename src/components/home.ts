/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by gabrielkunkel on 4/19/16 in TypeScript.
 */

interface IHomeCtrl {
        
}

class Home implements IHomeCtrl {

} // end class

function home(): ng.IDirective {
    return {
        bindToController: true,
        controller: Home,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        template: require("./home.html"),
    };
}

angular
    .module("app")
    .directive("home", home);
