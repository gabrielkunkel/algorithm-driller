/**
 * Created by gabrielkunkel on 1/23/16 in TypeScript.
 */
/* eslint no-undef: 0 */
/// <reference path="../typings/tsd.d.ts" />
"use strict";
///////////// Non-Angular Libraries //////////////////////////
require("../node_modules/bootstrap/dist/js/bootstrap.js");
require("./domain/");
//////////// Require CSS /////////////////////////////////////
require("./styles/codemirror.css");
require("../node_modules/bootstrap/dist/css/bootstrap.css");
require("./styles/bootstrap-cosmo.css");
require("./styles/main.css");
require("./styles/forms.css");
//////////// Require Libraries ///////////////////////////////
var angular = require("angular");
require("../node_modules/angular-resource");
require("../node_modules/angular-ui-codemirror/src/ui-codemirror.js");
require("../node_modules/angular-sanitize");
require("../node_modules/angular-ui-router/release/angular-ui-router.js");
require("../node_modules/angular-mocks"); // todo: can this be moved to a conditional section(s)?
//////////// Conditional Requires for Development /////////////
/* istanbul ignore if: only necessary for development environment */
if (process.env.NODE_ENV === "development") {
    require("../src/index.html");
    require("./development");
}
//////////// Conditional Requires for Tests ///////////////////
if (process.env.NODE_ENV === "test") {
    require("./development");
}
//////////// Initialize Angular //////////////////////////////
angular.module("app", [
    "ui.codemirror",
    "ngResource",
    "ngSanitize",
    "ui.router",
    "appMock" // is it possible to add this module conditionally above? ...or make it conditional?
]);
//////////// Require Application  /////////////////////////////
require("./app.config.js");
require("./services");
require("./components");
// todo: fix build, try changing up loaders
//# sourceMappingURL=app.js.map