'use strict';

/**
 * @ngdoc function
 * @name groceryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the groceryApp
 */
 var app = angular.module('browseController', ['ui.bootstrap']);
app.controller('BrowseCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app.controller('ProductsCtrl', ['$scope', 'Product', function($scope, Product) {
	$scope.products = Product.query();
	$scope.order = 'group';
}]);

app.controller('ModalCtrl', ['$scope', '$uibModal', '$log', function ($scope, $uibModal, $log) {

  $scope.quantity = 1;

  $scope.open = function (id) {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'ModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        quantity: function () {
          return $scope.quantity;
        },
        id: function() {
        	return id;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}]);


app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'quantity', 'id', function ($scope, $uibModalInstance, quantity, id) {

  $scope.quantity = quantity;
  $scope.id = id;

  $scope.ok = function () {
    $uibModalInstance.close($scope.quantity);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);