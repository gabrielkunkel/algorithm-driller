import {IFlashCardQueue} from "../services/flashcardQueue.service";

/**
 * Created by gabrielkunkel on 3/28/16 in TypeScript.
 */

    /// <reference path="../../typings/tsd.d.ts" />

interface IItemCtrl {

}


class ChallengeListItem implements IItemCtrl {

    public static $inject: string[] = ["flashCardQueue"];

    // isChecked

    constructor (private flashCardQueue: IFlashCardQueue) {
        // code here

    }

    

}

function challengeListItem(): ng.IDirective {
    return {
        bindToController: true,
        controller: ChallengeListItem,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        scope: {
            onCheck: "&",
            onUnCheck: "&"
        },
        template: require("./challengeListItem.html"),
    };
}

angular
    .module("app")
    .directive("challengeListItem", challengeListItem);

