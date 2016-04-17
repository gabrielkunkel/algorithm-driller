/**
 * Created by gabrielkunkel on 2/15/16 in JavaScript.
 */

describe("The flashcard queue service", function () {
  var flashCardQueue, $log;

  beforeEach(angular.mock.module("app"));

  beforeEach(inject(function (_$log_, _flashCardQueue_) {
    $log = _$log_;
    flashCardQueue = _flashCardQueue_;
  }));

  beforeEach(function () {
    flashCardQueue.queue = [{
      answerString: "function(str) {\n\treturn str.split('').reverse().join('');\n}",
      difficulty: 1,
      id: "1",
      language: 1,
      name: "Reverse a String",
      tests: [{
        description: "make sure it reverses the string (e.g. 'start' will become 'trats)",
        jasmineTest: "function () {\n\tvar a = 'abcdef';\n\texpect(runThisFunction(a)).toEqual('fedcba');\n}",
        test: "runThisFunction('abcdef') === 'fedcba'"
      }]
    },
    {
      answerString: "function(str) {\n\tvar i, arraylength, elementToCompare, " +
        "winner = '', winnerLength = winner.length;" + "\n\tvar array = str.split(' ');" +
        "\n\twhile(array.length > 0) {" + "\n\t\telementToCompare = array.pop();" +
        "\n\t\tif (elementToCompare.length > winner.length) {" + "\n\t\t\twinner = elementToCompare;" +
        "\n\t\t}" + "\n\t}" + "\n\nwinnerLength = winner.length;" + "\n\treturn winnerLength;" + "\n}",
      difficulty: 2,
      id: "3",
      language: 1,
      name: "Find the longest word in a string",
      tests: [{
        description: "make sure it finds the loooooooonnngest word",
        jasmineTest: "function() {\n\texpect(runThisFunction('The large planter fell off of the elevator').toEqual('elevator')\n}",
        test: "runThisFunction('The large planter fell off of the elevator' === 'elevator'"
      }, {
        description: "make sure it finds the longest word, regardless of punctutation",
        jasmineTest: "function() {\n\texpect(runThisFunction('elevator elevato.$#&').toEqual('elevator')\n}",
        test: "runThisFunction('elevator elevato.$#&') === 'elevator'"
      }]
    }
    ];
  });

  it("the flashcard queue service is defined", function() {
    expect(flashCardQueue).toBeDefined();
  }); // end it

  it("adds a flashcard ", function() {
    var aChallengeToAdd = {
      answerString: "function(num) {\n\tif (num === 0) return 1;" +
      "\n\treturn num * runThisFunction(num-1);\n}",
      difficulty: 1,
      id: "2",
      language: 1,
      name: "Factorial",
      tests: [{
        description: "it should return the factorial of the number",
        jasmineTest: "function () {\n\texpect(runThisFunction(5)).toBe(120);\n}",
        test: "runThisFunction(5) === 120"
      }]
    };

    expect(flashCardQueue.existsById("2")).toBe(false);
    flashCardQueue.addToQueue(aChallengeToAdd);
    expect(flashCardQueue.queue.length).toBe(3);
    expect(flashCardQueue.existsById("2")).toBe(true);
  }); // end it

  it("empties the queue", function() {
    expect(flashCardQueue.queue.length).toBe(2);

    flashCardQueue.emptyQueue();

    expect(flashCardQueue.queue.length).toBe(0);
  }); // end it

  it("removes the next challenge from the queue", function() {
    expect(flashCardQueue.queue.length).toBe(2);

    var lastCardFromQueue = flashCardQueue.queue[flashCardQueue.queue.length - 1];
    var cardToTestAgainst = flashCardQueue.getFromQueue();

    expect(cardToTestAgainst).toEqual(lastCardFromQueue);
    expect(flashCardQueue.queue.length).toBe(1);
  }); // end it

  it("gives the length of the queue", function() {
    expect(flashCardQueue.queueLength()).toBe(flashCardQueue.queue.length);
  }); // end it

  // if it makes sense to add a function which adds more than one IChallenge at a time. Update this.
  xit("adds a number of flashcards", function() {
    expect(flashCardQueue.queue.length).toBe(2);
    var start = flashCardQueue.queue;
    var toBeAdded = [{
      answerString: "function(str) {\n\treturn str.split('').reverse().join('');\n}",
      difficulty: 1,
      id: "1",
      language: 1,
      name: "Reverse a String",
      tests: [{
        description: "make sure it reverses the string (e.g. 'start' will become 'trats)",
        jasmineTest: "function () {\n\tvar a = 'abcdef';\n\texpect(runThisFunction(a)).toEqual('fedcba');\n}",
        test: "runThisFunction('abcdef') === 'fedcba'"
      }]
    },
      {
        answerString: "function(str) {\n\tvar i, arraylength, elementToCompare, " +
        "winner = '', winnerLength = winner.length;" + "\n\tvar array = str.split(' ');" +
        "\n\twhile(array.length > 0) {" + "\n\t\telementToCompare = array.pop();" +
        "\n\t\tif (elementToCompare.length > winner.length) {" + "\n\t\t\twinner = elementToCompare;" +
        "\n\t\t}" + "\n\t}" + "\n\nwinnerLength = winner.length;" + "\n\treturn winnerLength;" + "\n}",
        difficulty: 2,
        id: "3",
        language: 1,
        name: "Find the longest word in a string",
        tests: [{
          description: "make sure it finds the loooooooonnngest word",
          jasmineTest: "function() {\n\texpect(runThisFunction('The large planter fell off of the elevator').toEqual('elevator')\n}",
          test: "runThisFunction('The large planter fell off of the elevator' === 'elevator'"
        }, {
          description: "make sure it finds the longest word, regardless of punctutation",
          jasmineTest: "function() {\n\texpect(runThisFunction('elevator elevato.$#&').toEqual('elevator')\n}",
          test: "runThisFunction('elevator elevato.$#&') === 'elevator'"
        }]
      }
    ];

    flashCardQueue.addToQueue(toBeAdded);

    expect(flashCardQueue.queue.length).toBe(4);
    expect(flashCardQueue.queue).toEqual(start.concat(toBeAdded));
  }); // end it

  it("should remove a specfic challenge from the Queue by id", function() {
    var originalLength = flashCardQueue.queue.length;

    flashCardQueue.removeById("1");

    expect(flashCardQueue.queue.length).toBe(originalLength - 1);

    var isThereChallengeWithThatId = false;
    flashCardQueue.queue.forEach(function (element) {
      if (element.id === "1") {
        isThereChallengeWithThatId = true;
      }
    });

    expect(isThereChallengeWithThatId).toBe(false);
  }); // end it

  it("should return true if a specfic challenge (that should be there) is in the queue, by id", function() {

    expect(flashCardQueue.existsById("1")).toBe(true);
  }); // end it

  it("should return false when checking if a specific challenge is there that's not", function() {
    expect(flashCardQueue.existsById("5")).toBe(false);
  }); // end it

}); // end describe