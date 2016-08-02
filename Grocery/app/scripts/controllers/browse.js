'use strict';

/**
 * @ngdoc function
 * @name groceryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the groceryApp
 */
 var app = angular.module('browseController', []);
app.controller('BrowseCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app.controller('ProductsCtrl', ['$scope', 'Product', function($scope, Product) {
	$scope.products = Product.query();
	$scope.order = 'product';
}]);