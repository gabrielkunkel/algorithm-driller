/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

module app {
  "use strict";

    export enum languages {
        Java,
        JavaScript,
        Ruby,
    }

    export interface ITest {
        description: string;
        test: string;
    }

    export interface IChallenge {
        answerString: string;
        difficulty: number;
        id: string;
        language: languages;
        name: string;
        tests: ITest[];
    }

    export class Challenge implements IChallenge {

        constructor(public answerString: string,
                    public difficulty: number,
                    public id: string,
                    public language: languages,
                    public name: string,
                    public tests: ITest[]) {

        }

    }

}
