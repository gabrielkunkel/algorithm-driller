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

    public static $inject: string[] = ["$resource", "API_URL"];

    constructor(private $resource: ng.resource.IResourceService,
                public API_URL: string) {

    }

    public getChallengeResource(): ng.resource.IResourceClass<IChallengeResource> {
        return this.$resource(this.API_URL + "api/challenge/", {},
            {
                "update": {method: "PUT"},
                "query": {method: "GET", isArray: false }
            }
        );
    }

} // class

angular
    .module("app")
    .service("challengeResourceService", ChallengeResourceService);
