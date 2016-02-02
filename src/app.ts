/**
 * Created by gabrielkunkel on 1/23/16 in TypeScript.
 */
/* eslint no-undef: 0 */
/// <reference path="../typings/tsd.d.ts" />

import IAngularStatic = angular.IAngularStatic;

namespace app {
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
    var angular: IAngularStatic = require("angular");
    require("../node_modules/angular-resource");
    require("../node_modules/angular-ui-codemirror");
    require("../node_modules/angular-sanitize");

    //////////// Initialize Angular //////////////////////////////
    angular.module("app", [
        "ui.codemirror",
        "ngResource",
        "ngSanitize"
    ]);

    //////////// Require Application Components //////////////////
    require("./components/durian.js");
    require("./components/testbox.js");
}
