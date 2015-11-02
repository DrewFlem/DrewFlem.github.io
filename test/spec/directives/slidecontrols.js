'use strict';

describe('Directive: slideControls', function () {

  // load the directive's module
  beforeEach(module('slideshowApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slide-controls></slide-controls>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slideControls directive');
  }));
});
