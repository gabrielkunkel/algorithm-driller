/**
 * Created by gabrielkunkel on 1/30/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

module app.components {
    "use strict";

    interface ITestboxCtrl {
        textboxContent: string;
    }

    interface ITestboxOptions {
        indentWithTabs: boolean;
        lineNumbers: boolean;
        tabSize: number;
    }

    class Testbox implements ITestboxCtrl {
        public textboxContent: string;

        public static $inject: string[] = ["challengeResourceService"];
        constructor (private challengeResourceService: app.services.ChallengeResourceService) {

            this.textboxContent = "Start string";

            var challengeResource: ng.resource.IResourceClass<app.services.IChallengeResource>
                = challengeResourceService.getChallengeResource();

            challengeResource.query((data: app.IChallenge[]) => {
                this.textboxContent = data[2].answerString;
            });
        }

        public options: ITestboxOptions = {
            indentWithTabs: true,
            lineNumbers: true,
            tabSize: 2,
        };
    }

    function testbox(): ng.IDirective {
        return {
            bindToController: true,
            controller: Testbox,
            controllerAs: "vm",
            replace: true,
            restrict: "AE",
            template: require("./testbox.html"),
        };
    }

    angular
        .module("app")
        .directive("testbox", testbox);
}
