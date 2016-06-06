 /// <reference path="../../typings/tsd.d.ts" />
 
/**
 * Created by gabrielkunkel on 6/4/16 in TypeScript.
 */

export interface IMeResourceService {
        
}

export class MeResource implements IMeResourceService {

    public static $inject: string[] = ["$resource", "API_URL"];

    constructor(private $resource: ng.resource.IResourceService,
                public API_URL: string) {

    }
    
    public getMeResource(): ng.resource.IResourceClass<any> {
        return this.$resource(this.API_URL + "api/me", {}, {
            "update": { method: "PUT"},
            "query": { method: "GET", isArray: false }
        });
    }


} // end class

angular
    .module("app")
    .service("meResource", MeResource);
