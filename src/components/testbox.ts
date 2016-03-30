import {ITest, IChallenge} from "../domain/challenge";
import {IChallengeResource, ChallengeResourceService} from "../services/challengeResource.service";

/**
 * Created by gabrielkunkel on 1/30/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

interface ITestboxCtrl {
    textboxContent: string;
}

interface ITestboxOptions {
    indentWithTabs: boolean;
    lineNumbers: boolean;
    tabSize: number;
}

class Testbox implements ITestboxCtrl {

    // services
    public challengeResource: ng.resource.IResourceClass<IChallengeResource>;

    // component: for the view
    public textboxContent: string;
    public showCorrect: boolean;

    // domain: from the model
    public answer: string;
    public testArray: ITest[];
    public challengeName: string;

    // intitialize
    public static $inject: string[] = ["challengeResourceService"];

    constructor(private challengeResourceService: ChallengeResourceService) {

        this.textboxContent = "function () {\n\n\t// Enter your code here. return your result\n\n}";
        this.challengeName = "(Challenge Title)";
        this.showCorrect = false;

        this.challengeResource = challengeResourceService.getChallengeResource();

        this.challengeResource.query((data: IChallenge[]) => {
            var dataNumber: number = 0; // exclusively for development

            this.answer = data[dataNumber].answerString;
            this.challengeName = data[dataNumber].name;
            this.testArray = data[dataNumber].tests;
        });
    }

    /**
     * Click to detect if answer in textbox is correct. If so
     * make this.showCorrect === true, to set up change to next
     * algorithm challenge.
     */
    public tester(): void {
        var allTestsPassed: boolean = false;
        var testsPassed: number = 0;
        var runThisFunction: any = eval("(" + this.textboxContent + ")");

        for (var i: number = 0; i < this.testArray.length; i += 1) {
            let evaluatedTest: boolean = eval(this.testArray[i].test);
            if (evaluatedTest) {
                testsPassed += 1;
            }
        }

        if (testsPassed === this.testArray.length) {
            this.showCorrect = true;
        }
    }

    /**
     * If user has given up they can put the stored correct answer into
     * the textbox.
     */
    public showAnswer(): void {
        this.textboxContent = this.answer;
    }

    /**
     * Options available: https://codemirror.net/doc/manual.html
     * @type {{indentWithTabs: boolean, lineNumbers: boolean, tabSize: number}}
     */
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

