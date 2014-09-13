'use strict';

angular.module('DevFestMadrid2014App', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider.
          when('/', {templateUrl: 'views/main.html'}).
	  when('/speakers', {templateUrl: 'views/speakers.html'}).
          when('/agenda', {templateUrl: 'views/agenda.html'}).
          when('/location', {templateUrl: 'views/location.html'}).
          when('/inscription', {templateUrl: 'views/inscription.html'}).
          when('/info-sponsors', {templateUrl: 'views/info-sponsors.html'}).
          otherwise({redirectTo: '/'});
  });
