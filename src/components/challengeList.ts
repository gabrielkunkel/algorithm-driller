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
    public challengeCollection: any;

    public static $inject: string[] = ["challengeResourceService"];

    constructor(private challengeResourceService: ChallengeResourceService) {

        this.challengeResource = challengeResourceService.getChallengeResource();

        this.challengeResource.query().$promise.then((data: any) => {
            this.challengeCollection = data.data;
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
        template: require("./challengeList.html"),
    };
}

angular
    .module("app")
    .directive("challengeList", challengeList);

