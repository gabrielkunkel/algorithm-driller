/**
 * Created by gabrielkunkel on 4/20/16 in TypeScript.
 */
 
 /// <reference path="../../typings/tsd.d.ts" />

interface IRegisterCtrl {
        
}

class Register implements IRegisterCtrl {

    public alertShow: boolean;
    public alertType: string;
    public alertMessage: string;
    public alertTitle: string;
    public alertTimeout: number;
    
    constructor(public $http: ng.IHttpService,
                public $location: ng.ILocationService) {
        console.log($location.path());
    }

    public showAlert(alertType: string, alertTitle: string, alertMessage: string, alertTimeout: number): void {
        this.alertShow = true;
        this.alertType = alertType;
        this.alertTitle = alertTitle;
        this.alertMessage = alertMessage;
        this.alertTimeout = alertTimeout;
    }

    public sendIt(): void {
        var that: any = this;

        var url: string = "/";
        var user: any = {};

        this.$http.post(url, user)
            .then((data: any) => {
                that.showAlert("success", "Yes!", "You are registered.");
            })
            .catch((err: any) => {
                that.showAlert("warning", "Embarrassing...", "Problem on our end. Try again, later.");
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
        template: require("./register.html"),
    };
}

angular
    .module("app")
    .directive("register", register);
