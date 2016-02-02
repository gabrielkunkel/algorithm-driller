/**
 * Created by gabrielkunkel on 1/30/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

module app.example {
    "use strict";

    interface IDurianCtrl {
        showTheLove(): string;
    }

    class Durian implements IDurianCtrl {

        private love: string = "JavaScript!";

        public showTheLove(): string {
            return "I love " + this.love;
        }

    }

    function durianDirective(): ng.IDirective {
        return {
            bindToController: true,
            controller: Durian,
            controllerAs: "vm",
            replace: true,
            restrict: "AE",
            template: require("./durian.html"),
            transclude: true,
        };
    }

    angular
        .module("app")
        .directive("durianDirective", durianDirective);
}
