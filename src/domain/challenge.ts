/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

export declare enum languages {
    Java,
    JavaScript,
    Ruby,
}

export declare interface ITest {
    description: string;
    jasmineTest: string;
    test: string;
}

export declare interface IChallenge {
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


