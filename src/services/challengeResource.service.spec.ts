/**
 * Created by gabrielkunkel on 2/2/16 in TypeScript.
 */

/// <reference path="../../typings/tsd.d.ts" />

/* tslint:disable:no-shadowed-variable */

import IChallenge = app.service.IChallenge;
import IChallengeResource = app.service.IChallengeResource;

describe("challenge resource service", () => {

    var $httpBackend: ng.IHttpBackendService;
    var challengeResource: app.service.IChallengeResource;

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function(_$httpBackend_: ng.IHttpBackendService, _ChallengeResource_: IChallengeResource): any {
        $httpBackend = _$httpBackend_;
        challengeResource = _ChallengeResource_;
      }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should initialize correctly", () => {
      expect(challengeResource).toBeDefined();
    }); // end it

    it("should load challenges", () => {
      $httpBackend.expectGET("challenges.json").respond([
          {
              "answerString": "runThisFunction = function(str) {\n\treturn str.split('').reverse().join('');\n}",
              "difficulty": 7,
              "id": "1",
              "language": "JavaScript",
              "name": "Reverse a String",
              "tests": [{
                  description: "takes a string and returns the string in reverse",
                  test: function (): void {
                      var a: string = "abcdef";
                  }
              }],
          },
          {
              "answerString": "runThisFunction = function(str) {\n\treturn str.split('').reverse().join('');\n}",
              "difficulty": 7,
              "id": "2",
              "language": "JavaScript",
              "name": "Reverse a String",
              "tests": [{
                  description: "takes a string and returns the string in reverse",
                  test: function (): void {
                      var a: string = "abcdef";
                  }
              }],
          },

      ]);

      var challenges: any = challengeResource.query(function(): void {
      expect(challenges).toBeDefined();
    });

    }); // end it


}); // end describe

/*
*
 it("should load articles", () => {
 $httpBackend.expectGET("articles.json").respond([
 {"id": "1", "name": "Pizza Vegetaria", "price": 5 },
 {"id": "2", "name": "Pizza Salami",    "price": 5.5 },
 {"id": "3", "name": "Pizza Thunfisch", "price": 6 },
 {"id": "4", "name": "Aktueller Flyer", "price": 0 }
 ]);

 var articles = articleService.query(function(){
 expect(articles).toBeDefined();

 });

 $httpBackend.flush();
 });
 });

 *
*
* */

