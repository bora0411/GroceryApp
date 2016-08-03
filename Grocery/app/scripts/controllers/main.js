'use strict';

/**
 * @ngdoc function
 * @name groceryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the groceryApp
 */
 var app = angular.module('groceryController', ['ngStorage']);
app.controller('MainCtrl', function () {
	    this.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	});


app.controller('AddCtrl', ['$scope', '$localStorage', function ($scope, $localStorage){
		 $scope.$storage = $localStorage;
		 $scope.quantity = 1;
		 
		 // Add an item to localStorage
		$scope.addItem = function(itemName){
			if (itemName =='' || itemName == null) {
					return;
				} else if ($scope.$storage.list == null || $scope.$storage.list == 'undefined') {
					//define a local storage list 
					$localStorage.list = [];
				}
					$localStorage.list.push({
					toDo: itemName,
					check: false,
					number: $scope.quantity
					});

					$scope.itemToAdd = "";
		};

		// $scope.addItem = function(itemName) {
		// 	if ($scope.$storage.list == null || $scope.$storage.list == 'undefined') {
		// 			//define a local storage list 
		// 			$localStorage.list = [];

		// 		} 
		// 			var storageSize = $localStorage.list.length;
		// 			$localStorage.list.splice(storageSize, 0, {
		// 			toDo: $scope.itemToAdd,
		// 			check: false,
		// 			number: $scope.quantity
		// 			});
		// 			$scope.itemToAdd = "";

		// };

		// Remove a completed item from localStorage
		$scope.deleteItem = function() {
			var completedItems = [];
			var incompletedItems = [];
			var listcopy = angular.copy($localStorage.list);
			angular.forEach(listcopy, function(i) {
				if (i == null){
					$localStorage.list.splice(i, 1);
				} else if (i.check == true) {
					completedItems.push(i);
				} else if (i.check == false) {
					incompletedItems.push(i);
				}
			});
			$localStorage.list = incompletedItems;
			
		};

		$scope.deleteAll = function() {
			$localStorage.$reset();
		}

	}]);
