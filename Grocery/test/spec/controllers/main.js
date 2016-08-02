'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('groceryController'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});


describe('Controller: AddCtrl', function() {
  beforeEach(module('groceryController'));

  var $controller;
  var $localStorage;

  beforeEach(inject(function($injector, _$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $localStorage = $injector.get('$localStorage');
  }));

  describe('$scope.addItem', function() {
    it('adds an item to the local storage', function() {
      var $scope = {};
      var controller = $controller('AddCtrl', { $scope: $scope, $localStorage: $localStorage });
      var itemToAdd = 'food';
      $scope.$storage = $localStorage;
      $scope.$storage.list = [];
      $scope.addItem(itemToAdd);
      expect($scope.$storage.list).toContain({toDo: 'food', check: false, number: 1});
    });
  });

    describe('$scope.deleteItem', function() {
    it('deletes checked item(s) from localStorage', function() {
      var $scope = {};
      var controller = $controller('AddCtrl', { $scope: $scope, $localStorage: $localStorage });
      $scope.$storage = $localStorage;
      $scope.$storage.list = [{toDo: 'food', check: false, number:1}, {toDo: 'drink', check: true, number: 2}]
      $scope.deleteItem();
      expect($scope.$storage.list).not.toContain({toDo: 'drink', check: true, number: 2});
    });
    it('deletes null items from localStorage', function() {
      var $scope = {};
      var controller = $controller('AddCtrl', { $scope: $scope, $localStorage: $localStorage });
      $scope.$storage = $localStorage;
      $scope.$storage.list = [null, {toDo: 'food', check: false, number: 1}, null, {toDo: 'drink', check: false, number: 2}, null]
      $scope.deleteItem();
      expect($scope.$storage.list).not.toContain(null);
    });
  });
});