/**
 * Created by gabrielkunkel on 3/28/16 in TypeScript.
 */

    /// <reference path="../../typings/tsd.d.ts" />

    namespace app.component {
        "use strict";

        interface IChallengeListItemCtrl {

        }


        class ChallengeListItem implements IChallengeListItemCtrl {

            public static $inject: string[] = ["flashCardQueue"];

            constructor (private flashCardQueue: app.services.IFlashCardQueue) {
                // type code here

            }
            
            

        }

        function challengeListItem(): ng.IDirective {
            return {
                bindToController: true,
                controller: ChallengeListItem,
                controllerAs: "vm",
                replace: true,
                restrict: "AE",
                template: require("./challengeListItem.html"),
            };
        }

        angular
            .module("app")
            .directive("challengeListItem", challengeListItem);
    }
