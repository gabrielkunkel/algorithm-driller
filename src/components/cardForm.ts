 /// <reference path="../../typings/tsd.d.ts" />
import {ICodeMirrorOptions} from "./challenges";

 /**
 * Created by gabrielkunkel on 5/11/16 in TypeScript.
 */
 

class CardForm {

    public codeMirrorOptionsEdit: ICodeMirrorOptions = {
        indentWithTabs: true,
        lineNumbers: true,
        showCursorWhenSelecting: true,
        tabSize: 2,
    };

  constructor() {
  
  }

} // end class

function cardForm(): ng.IDirective {
    return {
        bindToController: true,
        controller: CardForm,
        controllerAs: "vm",
        replace: true,
        scope: {
            action: "&",
            chalObj: "=",
        },
        template: require("./cardForm.html"),
    };
}

angular
    .module("app")
    .directive("cardForm", cardForm);
