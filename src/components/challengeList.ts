import {IChallenge} from "../domain/challenge";
import {IChallengeResource, ChallengeResourceService} from "../services/challengeResource.service";
/**
 * Created by gabrielkunkel on 3/22/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />


interface IChallengeListCtrl {

}

class ChallengeList implements IChallengeListCtrl {
 
    public challengeResource: ng.resource.IResourceClass<IChallengeResource>;
    public challengeCollection: IChallenge[];

    public static $inject: string[] = ["challengeResourceService"];

    constructor(private challengeResourceService: ChallengeResourceService) {

        this.challengeResource = challengeResourceService.getChallengeResource();
        this.challengeResource.query((data: IChallenge[]) => {
            this.challengeCollection = data;
        });

        // should we get the qurue and check all of those that are in the queue

    }

    public onCheckboxCheck(id: string): void {

    }

    public onCheckboxUnCheck(id: string): void {

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

