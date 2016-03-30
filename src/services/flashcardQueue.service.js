/**
 * Created by gabrielkunkel on 2/15/16 in TypeScript.
 */
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        "use strict";
        var FlashCardQueue = (function () {
            function FlashCardQueue() {
                this.queue = [];
            }
            /* tslint:disable:no-shadowed-variable no-use-before-declare */
            /**
             *
             * @param {Array|Object} challenges
             */
            FlashCardQueue.prototype.addToQueue = function (challenges) {
                if (!challenges) {
                    return;
                }
                if (!Array.isArray(challenges)) {
                    var _challenges = [];
                    for (var i = 0; i < arguments.length; i += 1) {
                        _challenges[i] = arguments[i];
                    }
                    var challenges = _challenges;
                }
                while (challenges.length) {
                    this.queue.unshift(challenges.pop());
                }
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
            return FlashCardQueue;
        }());
        services.FlashCardQueue = FlashCardQueue; // class
        angular
            .module("app")
            .service("flashCardQueue", FlashCardQueue);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=flashcardQueue.service.js.map