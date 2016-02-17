/**
 * Created by gabrielkunkel on 1/23/16 in TypeScript.
 */
/* eslint no-undef: 0 */
/// <reference path="../typings/tsd.d.ts" />
var app;
(function (app) {
    "use strict";
    ///////////// Non-Angular Libraries //////////////////////////
    require("./domain/");
    //////////// Require CSS /////////////////////////////////////
    require("./codemirror.css");
    require("./main.css");
    //////////// Require Libraries ///////////////////////////////
    var angular = require("angular");
    require("../node_modules/angular-resource");
    require("../node_modules/angular-ui-codemirror/src/ui-codemirror.js");
    require("../node_modules/angular-sanitize");
    require("../node_modules/angular-route");
    require("../node_modules/angular-mocks");
    //////////// Conditional Requires for Development /////////////
    /* istanbul ignore if: only necessary for development environment */
    if (process.env.NODE_ENV === "development") {
        require("../src/index.html");
    }
    //////////// Initialize Angular //////////////////////////////
    angular.module("app", [
        "ui.codemirror",
        "ngResource",
        "ngSanitize",
        "ngRoute",
        "appMock"
    ]);
    //////////// Require Application  /////////////////////////////
    require("./app.config.js");
    require("./services");
    require("./components");
    require("./development");
})(app || (app = {}));
// todo: fix build, try changing up loaders
//# sourceMappingURL=app.js.map