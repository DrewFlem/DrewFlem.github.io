'use strict';

/**
 * @ngdoc overview
 * @name slideshowApp
 * @description
 * # slideshowApp
 *
 * Main module of the application.
 */
angular
  .module('slideshowApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'googlechart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/slide00.html',
        controller: 'Slide00Ctrl',
        controllerAs: 'slide00'
      })
      .when('/slide00', {
        templateUrl: 'views/slide00.html',
        controller: 'Slide00Ctrl',
        controllerAs: 'slide00'
      })
      .when('/slide01', {
        templateUrl: 'views/slide01.html',
        controller: 'Slide01Ctrl',
        controllerAs: 'slide01'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
