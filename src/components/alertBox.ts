 /// <reference path="../../typings/tsd.d.ts" />

import IPromise = angular.IPromise;
 /**
 * Created by gabrielkunkel on 4/22/16 in TypeScript.
  * */
 
interface IAlertBoxCtrl {
        
}

class AlertBox implements IAlertBoxCtrl {

    public hasBeenShown: boolean;
    public show: boolean;
    public type: string;
    public message: string;
    public title: string;
    public timeout: number;

    constructor(public $timeout: ng.ITimeoutService,
                public $scope: ng.IScope) {

        $scope.$watch(() => this.show, (newValue: boolean, oldValue: boolean) => {
            let alertTimeout: IPromise<any>;

            if (newValue === true) {
                this.hasBeenShown = true;

                $timeout.cancel(alertTimeout);

                alertTimeout = $timeout(() => {
                    this.show = false;
                }, this.timeout || 3000);
            }
        });

    }

    
    

} // end class

function alertBox(): ng.IDirective {
    return {
        bindToController: true,
        controller: AlertBox,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        scope: {
            show: "=",
            type: "=",
            title: "=",
            message: "=",
            timeout: "=",
        },
        template: require("./alertBox.html"),
    };
}

angular
    .module("app")
    .directive("alertBox", alertBox);
