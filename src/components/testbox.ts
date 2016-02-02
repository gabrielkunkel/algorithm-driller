/**
 * Created by gabrielkunkel on 1/30/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

module app.components {
    "use strict";

    interface ITestboxCtrl {
        textboxContent: string;
    }

    interface ITestboxOptions {
        indentWithTabs: boolean;
        lineNumbers: boolean;
        tabSize: number;
    }

    class Testbox implements ITestboxCtrl {

        public textboxContent: string = "runThisFunction = function(str) {" +
            "\n\treturn str.split('').reverse().join('');" +
            "\n}";
        public options: ITestboxOptions = {
            indentWithTabs: true,
            lineNumbers: true,
            tabSize: 2,
        };
    }

    function testbox(): ng.IDirective {
        return {
            bindToController: true,
            controller: Testbox,
            controllerAs: "vm",
            replace: true,
            restrict: "AE",
            template: require("./testbox.html"),
        };
    }

    angular
        .module("app")
        .directive("testbox", testbox);
}
