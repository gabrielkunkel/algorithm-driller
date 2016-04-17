import {IFlashCardQueue} from "../services/flashcardQueue.service";
import {IChallenge} from "../domain/challenge";

/**
 * Created by gabrielkunkel on 3/28/16 in TypeScript.
 */

    /// <reference path="../../typings/tsd.d.ts" />

interface IItemCtrl {
    isChecked: boolean;
    challengeObject: IChallenge;
    switchCheck(): void;
    onCheck(): void;
    onUnCheck(): void;
}


class ChallengeListItem implements IItemCtrl {

    public static $inject: string[] = ["flashCardQueue"];

    public isChecked: boolean;
    public challengeObject: IChallenge;

    constructor (private flashCardQueue: IFlashCardQueue) {
        this.isChecked = false;

        if (this.flashCardQueue.existsById(this.challengeObject.id)) {
            this.isChecked = true;
        }
    }

    public switchCheck(): void {
        if (!this.isChecked) {
            this.onUnCheck();
        }
        else {
            this.onCheck();
        }
    }

    public onCheck(): void {
        this.flashCardQueue.addToQueue(this.challengeObject);
        console.log("Added to Queue!");
    }

    public onUnCheck(): void {
        this.flashCardQueue.removeById(this.challengeObject.id);
        console.log("Removed from Queue!");
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
            challengeObject: "="
        },
        template: require("./challengeListItem.html"),
    };
}

angular
    .module("app")
    .directive("challengeListItem", challengeListItem);

