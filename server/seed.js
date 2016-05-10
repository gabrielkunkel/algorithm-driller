/**
 * Created by gabrielkunkel on 5/7/16 in JavaScript.
 */

var mongoose =require('mongoose');
var seeder = require('mongoose-seed');
var secrets = require('./secrets.js');


// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Challenge',
    'documents': [
      {
        answerString: "function(str) {\n\treturn str.split('').reverse().join('');\n}",
        difficulty: 1,
        language: 1,
        name: "Reverse a String",
        tests: [{
          description: "make sure it reverses the string (e.g. 'start' will become 'trats)",
          jasmineTest: "function () {\n\tvar a = 'abcdef';\n\texpect(runThisFunction(a)).toEqual('fedcba');\n}",
          test: "runThisFunction('abcdef') === 'fedcba'"
        }]
      },
      {
        answerString: "function(num) {\n\tif (num === 0) return 1;" +
        "\n\treturn num * runThisFunction(num-1);\n}",
        difficulty: 1,
        language: 1,
        name: "Factorial",
        tests: [{
          description: "it should return the factorial of the number",
          jasmineTest: "function () {\n\texpect(runThisFunction(5)).toBe(120);\n}",
          test: "runThisFunction(5) === 120"
        }]
      },
      {
        answerString: "function(str) { \n\tvar elementToCompare, winner = ''; " +
        "\n\tvar array = str.split(' '); " +
        "\n\n\twhile(array.length > 0) {" +
        "\n\t\telementToCompare = array.pop();" +
        "\n\t\tif (elementToCompare.length > winner.length) {" +
        "\n\t\t\twinner = elementToCompare; \n\t}" +
        "\n\t}" +
        "\nreturn winner;" +
        "\n}",
        difficulty: 2,
        language: 1,
        name: "Find the longest word in a string",
        tests: [{
          description: "make sure it finds the loooooooonnngest word",
          jasmineTest: "function() {\n\texpect(runThisFunction('The large planter fell off of the elevator').toEqual('elevator')\n}",
          test: "runThisFunction('The large planter fell off of the elevator') === 'elevator'"
        }]
      }
    ]
  },
  {
    'model': 'User',
    'documents': [
      {
        "email" : "henrysaltandson@gmail.com",
        "displayName" : "Gabriel Kunkel",
        "picture" : "https://lh5.googleusercontent.com/-zBBB9SdsJKw/AAAAAAAAAAI/AAAAAAAAGv0/WbF3e8o6o4s/photo.jpg?sz=200",
        "google" : "109505991443194501441",
        "admin" : true,
        "pro" : false,
      }
    ]
  }




];

module.exports = function() {

  // Connect to MongoDB via Mongoose
  seeder.connect(secrets.MONGO_URI, function() {

    // Load Mongoose models
    seeder.loadModels([
      './server/api/challenge/challenge.model.js',
      './server/api/user/user.model.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Challenge', 'User'], function() {

      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data);

    });
  });

};

