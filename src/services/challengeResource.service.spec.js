/**
 * Created by gabrielkunkel on 2/6/16 in JavaScript.
 */

/* eslint new-cap:0 */

describe("challenge resource service", function () {

  // todo: change tests to conform with class-based service

  var $httpBackend, challengeResourceService;
  var someData = [
    { id: 1, "des": "This is one."},
    { id: 2, "des": "This is two."},
    { id: 3, "des": "This is three."}
  ];

  beforeEach(angular.mock.module("app"));

  beforeEach(inject(function (_$httpBackend_, _challengeResourceService_) {
    $httpBackend = _$httpBackend_;
    challengeResource = _challengeResourceService_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it("should retrieve all data", function() {
    var dataGrabbed = {};

    $httpBackend.expectGET('api/challenge')
      .respond(200, someData);

    challengeResource.query().$promise.then(function (result) {
      dataGrabbed = result;
    });

    expect($httpBackend.flush).not.toThrow();
    expect(dataGrabbed).toBeDefined();
  }); // end it

  it("should create a new data item", function() {

    $httpBackend.expectPOST('api/challenge', { "id": 4323, "description": "this an item"})
      .respond(201);

    var dataItem = new challengeResource({
      id: 4323,
      description: 'this an item'
    });

    dataItem.$save();

    expect($httpBackend.flush).not.toThrow();
  }); // end it

  it("should update a data item", function() {
    $httpBackend.expectPUT('api/challenge', {
      id: 6666,
      description: 'item putted'
    }).respond(201);

    new challengeResource({
      id: 6666,
      description: 'item putted'
    }).$update();
    
    expect($httpBackend.flush).not.toThrow();
  }); // end it

  it("should retrieve a single data item", function() {
    var dataToCheck;

    $httpBackend.expectGET('api/challenge')
      .respond(201);

    challengeResource.get('api/challenge', {
      id: 6666,
      description: 'item putted'
    }).$promise.then(function (data) {
      dataToCheck = data;
    });

    expect($httpBackend.flush).not.toThrow();
    expect(dataToCheck).toBeDefined();
  }); // end it

}); // end describe