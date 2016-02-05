/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

module app.service {
    "use strict";

    export interface IChallenge extends ng.resource.IResource<IChallenge> {

    }

    export interface IChallengeResource extends ng.resource.IResource<app.domain.IChallenge> {
        query: any;
    }

    export class Resource {
        public static $inject: string[] = ["$resource"];

        public static ChallengeResource($resource: ng.resource.IResourceService): any {
            var url: string = "http://localhost/api/";

            var resource: any = $resource("", {}, {
                "query": { method: "GET", url: url },
                "get": { method: "GET", params: { id: "@id" }, url: url + "(:id)" },
                "save": { method: "POST", url: url },
                "remove": { method: "DELET", params: { id: "@id" }, url: url + "(:id" },
            });

            return <IChallengeResource>resource;

        }

    }

    angular
    .module("app")
    .factory("challengeResource", app.service.Resource.ChallengeResource);

}

/*

 module app.common {
 interface IDataAccessService {
 getProductResource(): ng.resource.IResourceClass<IProductResource>;
 }

 interface IProductResource extends ng.resource.IResource<app.domain.IProduct> {

 }

 export class DataAccessService implements IDataAccessService {

 static $inject = ["$resource"];
 constructor(private $resource: ng.resource.IResourceService) {

 }
 getProductResource(): ng.resource.IResourceClass<IProductResource> {
 return this.$resource("/api/products/:productId");
 }
 }

 angular
 .module("common.services")
 .service("dataAccessService", DataAccessService);

 }

*/
