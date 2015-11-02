'use strict';

describe('Controller: Slide00Ctrl', function () {

  // load the controller's module
  beforeEach(module('slideshowApp'));

  var Slide00Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Slide00Ctrl = $controller('Slide00Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Slide00Ctrl.awesomeThings.length).toBe(3);
  });
});
