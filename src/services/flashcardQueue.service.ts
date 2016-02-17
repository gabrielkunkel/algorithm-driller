/**
 * Created by gabrielkunkel on 2/15/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

module app.services {
    "use strict";

    export interface IFlashCardQueue {

    }

    class FlashCardQueue implements IFlashCardQueue {
        private queue: IChallenge[];

        constructor() {
            this.queue = [];

        }

        /* tslint:disable:no-shadowed-variable no-use-before-declare */

        /**
         *
         * @param {Array|Object} challenge(s)
         */
        public addToQueue(challenges: IChallenge[]): void {
            if (!challenges || !Array.isArray(challenges)) {
                var _challenges: IChallenge[] = [];

                for (var i: number = 0; i < arguments.length; i += 1) {
                    _challenges[i] = arguments[i];
                }
                var challenges: IChallenge[] = _challenges;
            }

            while (challenges.length) {
                this.queue.unshift(challenges.pop());
            }

        }
        /* tslint:enable:no-shadowed-variable no-use-before-declare */

        public getFromQueue(): IChallenge {
            return this.queue.pop();
        }

        public queueLength(): number {
            return this.queue.length;
        }

        public emptyQueue(): void {
            this.queue = [];
        }

    }


    angular
        .module("app")
        .service("flashCardQueue", FlashCardQueue);
}
