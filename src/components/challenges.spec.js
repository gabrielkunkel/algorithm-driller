/**
 * Created by gabrielkunkel on 4/4/16 in JavaScript.
 */

describe("Challenges Component", function () {
  var $rootScope, $compile, $window, scope, element, $log, flashCardQueue;

  beforeEach(angular.mock.module("app"));

  beforeEach(inject(function (_$rootScope_, _$compile_) {
    var compileFn;
    $rootScope = _$rootScope_;
    $compile = _$compile_;


    scope = $rootScope.$new();
    compileFn = $compile("<challenges></challenges>")(scope);

    $rootScope.$digest();
  }));

  beforeEach(inject(function (_$log_, _$window_, _flashCardQueue_) {
    $log = _$log_;
    $window = _$window_;
    flashCardQueue = _flashCardQueue_;
  }));

  it("should have all of variables initialized", function() {
    console.log($rootScope.$countChildScopes());
    console.log($rootScope.$countWatchers());
  }); // end it

}); // end describe