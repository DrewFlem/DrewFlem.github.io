'use strict';

/**
 * @ngdoc directive
 * @name slideshowApp.directive:slideControls
 * @description
 * # slideControls
 */
angular.module('slideshowApp')
  .directive('slideControls', function () {
    return {
      templateUrl: '../../views/slideControls.html',
      restrict: 'E',
      scope: false
    };
  });
