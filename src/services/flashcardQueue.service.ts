import {IChallenge} from "../domain/challenge";
/**
 * Created by gabrielkunkel on 2/15/16 in TypeScript.
 */

export interface IFlashCardQueue {
    queue: IChallenge[];
    addToQueue(challenge: IChallenge): void;
    getFromQueue(): IChallenge;
    queueLength(): number;
    emptyQueue(): void;
    removeById(id: string): void;
    existsById(id: string): boolean;
}

export class FlashCardQueue implements IFlashCardQueue {
    public queue: IChallenge[];

    constructor() {
        this.queue = [];

    }

    /* tslint:disable:no-shadowed-variable no-use-before-declare */

    /**
     * @description will accept either an array, a list of challenges as
     * arguments.
     *
     * @param {Array|Object} challenge
     */
    public addToQueue(challenge: IChallenge): void {
        if (!challenge) {
            return;
        }

        this.queue.unshift(challenge);

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

    public removeById(id: string): void {
        var queueTemp: IChallenge[] = [];
        var queueResult: IChallenge[] = [];

        this.queue.forEach(function (element: IChallenge): void {
            if (element.id === id) {
                queueResult.push(element);
            }
            else {
                queueTemp.push(element);
            }
        });

        this.queue = queueTemp; // replace the queue with our temporary queue
    } // removeById
    
    public existsById(id: string): boolean {
        for (let i: number = 0; i < this.queue.length; i += 1) {
            if (this.queue[i].id === id) {
                return true;
            }
        }

        return false;
    }

} // class


angular
    .module("app")
    .service("flashCardQueue", FlashCardQueue);
