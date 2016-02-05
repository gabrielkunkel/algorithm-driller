/**
 * Created by gabrielkunkel on 1/23/16 in TypeScript.
 */
/* eslint no-undef: 0 */
/// <reference path="../typings/tsd.d.ts" />
var app;
(function (app) {
    "use strict";
    //////////// Conditional Requires for Development /////////////
    /* istanbul ignore if: only necessary for development environment */
    if (process.env.NODE_ENV === "development") {
        require("../src/index.html");
    }
    //////////// Require CSS /////////////////////////////////////
    require("../node_modules/codemirror/lib/codemirror.css");
    require("./main.css");
    //////////// Require Libraries ///////////////////////////////
    var angular = require("angular");
    require("../node_modules/angular-resource");
    require("../node_modules/angular-ui-codemirror");
    require("../node_modules/angular-sanitize");
    require("../node_modules/angular-mocks");
    //////////// Initialize Angular //////////////////////////////
    angular.module("app", [
        "ui.codemirror",
        "ngResource",
        "ngSanitize",
        "ngMockE2E"
    ]);
    //////////// Require Application  /////////////////////////////
    require("./domain/");
    require("./development");
    require("./services");
    require("./components");
})(app || (app = {}));
//# sourceMappingURL=app.js.map