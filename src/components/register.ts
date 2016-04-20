/**
 * Created by gabrielkunkel on 4/20/16 in TypeScript.
 */
 
 /// <reference path="../../typings/tsd.d.ts" />

interface IRegisterCtrl {
        
}

class Register implements IRegisterCtrl {

} // end class

function register(): ng.IDirective {
    return {
        bindToController: true,
        controller: Register,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        template: require("./register.html"),
    };
}

angular
    .module("app")
    .directive("register", register);
