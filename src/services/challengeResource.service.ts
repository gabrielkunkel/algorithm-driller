/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

module app.services {
    "use strict";

    export interface IChallengeResourceService {
        getChallengeResource(): ng.resource.IResourceClass<IChallengeResource>;
    }

    export interface IChallengeResource extends ng.resource.IResource<app.Challenge> {

    }

    export class ChallengeResourceService implements IChallengeResourceService {

        public static $inject: string[] = ["$resource"];

        constructor(private $resource: ng.resource.IResourceService) {

        }

        public getChallengeResource(): ng.resource.IResourceClass<IChallengeResource> {
            return this.$resource("api/challenge/", {},
                {
                    "update": { method: "PUT"},
                }
            );
        }

    }

    angular
        .module("app")
        .service("challengeResourceService", ChallengeResourceService);
}
