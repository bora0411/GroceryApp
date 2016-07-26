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
	$scope.list = [];
		 $scope.$storage = $localStorage;
		 
		 // Add an item to localStorage
		$scope.addItem = function(){
			if ($scope.itemToAdd =='' || $scope.itemToAdd == null) {
					return;
				} else {
					$localStorage.list.push({
					toDo: $scope.itemToAdd,
					check: false
					});
					$scope.itemToAdd = "";
				} 
		};

		// Remove a completed item from localStorage
		$scope.deleteItem = function() {
			var listcopy = angular.copy($localStorage.list);
			for (var i = 0; i < listcopy.length; i++) {
				if (listcopy[i].check == true) {
					$localStorage.list.splice(i, 1);
				}
			};
		};
		// 	// angular.forEach($localStorage.list, function(i) {
		// 	// 	if (i.check == true) {
		// 	// 		$localStorage.list.push(i);
					
		// 	// 	}
		// 	// });
		// };


	}]);
