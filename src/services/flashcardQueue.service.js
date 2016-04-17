"use strict";
var FlashCardQueue = (function () {
    function FlashCardQueue() {
        this.queue = [];
    }
    /* tslint:disable:no-shadowed-variable no-use-before-declare */
    /**
     * @description will accept either an array, a list of challenges as
     * arguments.
     *
     * @param {Array|Object} challenge
     */
    FlashCardQueue.prototype.addToQueue = function (challenge) {
        if (!challenge) {
            return;
        }
        this.queue.unshift(challenge);
    };
    /* tslint:enable:no-shadowed-variable no-use-before-declare */
    FlashCardQueue.prototype.getFromQueue = function () {
        return this.queue.pop();
    };
    FlashCardQueue.prototype.queueLength = function () {
        return this.queue.length;
    };
    FlashCardQueue.prototype.emptyQueue = function () {
        this.queue = [];
    };
    FlashCardQueue.prototype.removeById = function (id) {
        var queueTemp = [];
        var queueResult = [];
        this.queue.forEach(function (element) {
            if (element.id === id) {
                queueResult.push(element);
            }
            else {
                queueTemp.push(element);
            }
        });
        this.queue = queueTemp; // replace the queue with our temporary queue
    }; // removeById
    FlashCardQueue.prototype.existsById = function (id) {
        for (var i = 0; i < this.queue.length; i += 1) {
            if (this.queue[i].id === id) {
                return true;
            }
        }
        return false;
    };
    return FlashCardQueue;
}());
exports.FlashCardQueue = FlashCardQueue; // class
angular
    .module("app")
    .service("flashCardQueue", FlashCardQueue);
//# sourceMappingURL=flashcardQueue.service.js.map