/**
 * Created by gabrielkunkel on 1/23/16 in TypeScript.
 */
/// <reference path="../typings/tsd.d.ts" />

//////////// Require Production Program ///////////
require("./app.js");

//////////// Require Test Suites //////////////////
require("./services/challengeResource.service.spec.js");
require("./services/flashcardQueue.service.spec.js");
require("./components/challenges.spec.js");
