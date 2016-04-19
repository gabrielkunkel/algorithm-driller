import {IChallenge, ITest} from "../domain/challenge";
import {IFlashCardQueue} from "../services/flashcardQueue.service";
/**
 * Created by gabrielkunkel on 4/2/16 in TypeScript.
 */
 


interface IChallengesCtrl {
        
}

interface ICodeMirrorOptions {
    autofocus?: boolean;
    indentWithTabs: boolean;
    lineNumbers: boolean;
    readOnly?: boolean | string;
    showCursorWhenSelecting?: boolean;
    tabSize: number;
}

class Challenges implements IChallengesCtrl {

    // development variables
    // public testValue: string = "Hello. I'm a test.";

    // show and hide buttons, textboxes, etc.
    public showAnswerButton: boolean = false;
    public showGoToNextChallengeButton: boolean = false;
    public showAnswer: boolean = false;
    public showCorrect: boolean = false;
    public answerCorrect: boolean = false;
    public hideCheckAnswerButton: boolean = false;
    public answerWrong: boolean = false;
    public showWrong: boolean = false;

    // critical data
    public currentChallengeObject: IChallenge;
    public testArray: ITest[] = [];

    // codemirror text box element settings and info
    public testBoxContents: string = "function() {\n\n\t\n\n}";
    public answerBoxContent: string = "// Answer will be put here.";
    public challengeName: string = "[Name of Challenge Here]";
    public refreshAnswerBox: boolean = false;

    /**
     * Options available: https://codemirror.net/doc/manual.html
     * @type {{indentWithTabs: boolean, lineNumbers: boolean, tabSize: number}}
     */
    public codeMirrorOptionsEdit: ICodeMirrorOptions = {
        indentWithTabs: true,
        lineNumbers: true,
        showCursorWhenSelecting: true,
        tabSize: 2,
    };

    /**
     * Options available: https://codemirror.net/doc/manual.html
     * @type {{indentWithTabs: boolean, lineNumbers: boolean, readOnly: string, tabSize: number}}
     */
    public codeMirrorOptionsDisplay: ICodeMirrorOptions  = {
        autofocus: true,
        indentWithTabs: true,
        lineNumbers: true,
        readOnly: "nocursor",
        tabSize: 2,
    };

    // somehow this is preventing the $location service from being recognized
    // public static $inject: string[] = ["$location", "flashCardQueue"];

    constructor (public flashCardQueue: IFlashCardQueue,
                 public $location: ng.ILocationService,
                 public $scope: ng.IRootScopeService,
                 public $timeout: ng.ITimeoutService
    ) {

        console.log($location.path());

        if (flashCardQueue.queue.length === 0) {
            $location.url("/dashboard");
        }
        else {
            this.plugIn();
        }

    }

    public plugIn(): void {

        // return all hide and show states to their default
        this.showAnswerButton = false;
        this.showGoToNextChallengeButton = false;
        this.showCorrect = false;
        this.answerCorrect = false;
        this.hideCheckAnswerButton = false;
        this.answerWrong = false;
        this.showWrong = false;

        // get the object we'll be working with
        this.currentChallengeObject = this.flashCardQueue.getFromQueue();
        this.testArray = this.currentChallengeObject.tests;
        this.challengeName = this.currentChallengeObject.name;

        // renew contents
        this.answerBoxContent = this.currentChallengeObject.answerString;
        console.log(this.answerBoxContent);
        this.testBoxContents = "function() {\n\n\t\n\n}";

        this.showAnswer = false;
        this.refreshAnswerBox = false;
    }

    public onCheckAnswer(): void {
        var allTestsPassed: boolean = false;
        var testsPassed: number = 0;
        var runThisFunction: any = eval("(" + this.testBoxContents + ")");

        for (var i: number = 0; i < this.testArray.length; i += 1) {
            var evaluatedTest: boolean = eval(this.testArray[i].test);
            console.log("Running test " + i);
            if (evaluatedTest) {
                testsPassed += 1;
                console.log("Test " + i + " Passed.");
            }
            else {
                console.log("Test " + i + " Failed.");
            }
        }

        if (testsPassed === this.testArray.length) {
            this.showCorrect = true;
            this.showGoToNextChallengeButton = true;
        }
        else {
            this.showWrong = true;
            this.flashCardQueue.addToQueue(this.currentChallengeObject);
            this.showAnswerButton = true;
            this.showGoToNextChallengeButton = true;
        }
    }

    public nextChallenge(): void {
        if ( this.flashCardQueue.queueLength() === 0) {
            this.$location.url("/dashboard");
        }
        else {
            this.plugIn();
        }
    }
    
    public showAnswerMethod(): void {
        this.showAnswer = true;
        this.updateAnswerBox();
    }

    public updateAnswerBox(): void {
        this.refreshAnswerBox = true;
    }




} // end class

function challenges(): ng.IDirective {
    return {
        bindToController: true,
        controller: Challenges,
        controllerAs: "vm",
        replace: true,
        restrict: "AE",
        template: require("./challenges.html"),
    };
}

angular
    .module("app")
    .directive("challenges", challenges);
