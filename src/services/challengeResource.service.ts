import {Challenge} from "../domain/challenge";
/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

export interface IChallengeResourceService {
    getChallengeResource(): ng.resource.IResourceClass<IChallengeResource>;
}

export interface IChallengeResource extends ng.resource.IResource<Challenge> {

}

export class ChallengeResourceService implements IChallengeResourceService {

    public static $inject: string[] = ["$resource"];

    constructor(private $resource: ng.resource.IResourceService) {

    }

    public getChallengeResource(): ng.resource.IResourceClass<IChallengeResource> {
        return this.$resource("api/challenge/", {},
            {
                "update": {method: "PUT"},
            }
        );
    }

} // class

angular
    .module("app")
    .service("challengeResourceService", ChallengeResourceService);