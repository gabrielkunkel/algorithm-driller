/**
 * Created by gabrielkunkel on 3/22/16 in TypeScript.
 */

    /// <reference path="../../typings/tsd.d.ts" />

    module app.component {
        "use strict";

        interface IChallengeListCtrl {

        }

        class ChallengeList implements IChallengeListCtrl {

            public challengeResource: ng.resource.IResourceClass<app.services.IChallengeResource>;
            public challengeCollection: IChallenge[];

            public static $inject: string[] = ["challengeResourceService"];

            constructor (private challengeResourceService: app.services.ChallengeResourceService) {

                this.challengeResource = challengeResourceService.getChallengeResource();
                this.challengeResource.query((data: app.IChallenge[]) => {
                    this.challengeCollection = data;
                });

            }

        }

        function challengeList(): ng.IDirective {
            return {
                bindToController: true,
                controller: ChallengeList,
                controllerAs: "vm",
                replace: true,
                restrict: "AE",
                scope: {
                  challengeCollection: "="
                },
                template: require("./challengeList.html"),
            };
        }

        angular
            .module("app")
            .directive("challengeList", challengeList);
    }
