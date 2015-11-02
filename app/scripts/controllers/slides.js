'use strict';

/**
 * @ngdoc function
 * @name slideshowApp.controller:SlidesCtrl
 * @description
 * # SlidesCtrl
 * Controller of the slideshowApp
 */
angular.module('slideshowApp')
  .controller('SlidesCtrl', ['$scope', '$interval', '$location', function ($scope, $interval, $location) {
    var autoPlay;
    $scope.playLabel = 'Play';
    // to create new slide:
    // yo angular:route slide00 !change 00 to whatever you want!
    // add whatever is after 'slide' to the slides array below (slideHello you would add 'Hello' to array)
    $scope.slides = ['00', '01'];
    $scope.currentSlideIndex = $scope.slides[0];
    $scope.seconds = 5;

    // set initial prev and next slides
    var slidesLength = $scope.slides.length;
    $scope.prevSlideIndex = slidesLength - 1;
    $scope.prevSlide = $scope.slides[$scope.prevSlideIndex];
    $scope.nextSlideIndex = slidesLength > 1 ? 1 : 0;
    $scope.nextSlide = $scope.slides[$scope.nextSlideIndex];


    $scope.prevClick = function() {
        updatePages('prev');
        $interval.cancel(autoPlay);
    };
    $scope.playClick = function() {
        if ($scope.playLabel === 'Play') {
            $scope.playLabel = 'Pause';
            // start autoplay
            autoPlay = $interval(function() {
                updatePages('next');
                $location.path('slide' + $scope.nextSlide);
            }, $scope.seconds * 1000);
        } else if ($scope.playLabel === 'Pause') {
            $scope.playLabel = 'Play';
            $interval.cancel(autoPlay);
        }
    };
    $scope.nextClick = function() {
        updatePages('next');
        $interval.cancel(autoPlay);
    };

    function updatePages(direction) {
        if (direction === 'prev') {
            $scope.currentSlideIndex = $scope.prevSlideIndex;
        } else if (direction === 'next') {
            $scope.currentSlideIndex = $scope.nextSlideIndex;
        }

        $scope.prevSlideIndex = $scope.currentSlideIndex === 0 ? slidesLength - 1 : $scope.currentSlideIndex - 1;
        $scope.prevSlide = $scope.slides[$scope.prevSlideIndex];
        $scope.nextSlideIndex = $scope.currentSlideIndex === slidesLength - 1 ? 0 : $scope.currentSlideIndex + 1;
        $scope.nextSlide = $scope.slides[$scope.nextSlideIndex];
    }
}]);
