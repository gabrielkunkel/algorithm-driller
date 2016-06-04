 /// <reference path="../../typings/tsd.d.ts" />

import {ChallengeResourceService, IChallengeResource} from "../services/challengeResource.service";
 import {IChallenge} from "../domain/challenge";
 /**
 * Created by gabrielkunkel on 5/11/16 in TypeScript.
 */
     

class NewCard {
     
     public chalObj: IChallenge;

     public challengeResource: ng.resource.IResourceClass<IChallengeResource>;

    constructor(private challengeResourceService: ChallengeResourceService) {
        this.challengeResource = challengeResourceService.getChallengeResource();
    }

    public addCard(): void {
       new this.challengeResource(this.chalObj).$save();
    }

} // end class

function newCard(): ng.IDirective {
    return {
        bindToController: true,
        controller: NewCard,
        controllerAs: "vm",
        replace: true,
        scope: {},
        template: require("./newCard.html"),
    };
}

angular
    .module("app")
    .directive("newCard", newCard);
