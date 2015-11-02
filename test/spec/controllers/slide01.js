'use strict';

describe('Controller: Slide01Ctrl', function () {

  // load the controller's module
  beforeEach(module('slideshowApp'));

  var Slide01Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Slide01Ctrl = $controller('Slide01Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Slide01Ctrl.awesomeThings.length).toBe(3);
  });
});
