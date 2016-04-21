/**
 * Created by gabrielkunkel on 4/20/16 in TypeScript.
 */
 
 /// <reference path="../../typings/tsd.d.ts" />

interface IRegisterCtrl {
        
}

class Register implements IRegisterCtrl {

    constructor(public $http: ng.IHttpService,
                public $location: ng.ILocationService) {
        console.log($location.path());

    }

    public sendIt(): void {
        console.log("submit run.");

        var url: string = "/";
        var user: any = {};

        this.$http.post(url, user)
            .then(function (res: any): void {
                console.log("success http");
            })
            .catch(function (err: any): void {
                console.log("fail http");
            });
    }

} // end class

function register(): ng.IDirective {
    return {
        bindToController: true,
        controller: Register,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        scope: {},
        template: require("./register.html"),
    };
}

angular
    .module("app")
    .directive("register", register);
