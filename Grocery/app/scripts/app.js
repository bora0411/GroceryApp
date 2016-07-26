'use strict';

/**
 * @ngdoc overview
 * @name groceryApp
 * @description
 * # groceryApp
 *
 * Main module of the application.
 */
angular
  .module('groceryApp', [
    'ngResource',
    'ngRoute',
    'ngStorage',
    'groceryController'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl',
        controllerAs: 'browse'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
