'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('groceryController', ['ngStorage']));

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


describe('AddCtrl', function() {
  beforeEach(module('groceryController', ['ngStorage']));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.addItem', function() {
    it('adds an item to the list', function() {
      var $scope = {};
      var controller = $controller('AddCtrl', { $scope: $scope });
      $scope.itemToAdd = 'food';
      $scope.addItem();
      expect($scope.list).toContain({toDo: 'food', check: false});
    });
  });

    describe('$scope.deleteItem', function() {
    it('deletes checked item(s) from the list', function() {
      var $scope = {};
      var controller = $controller('AddCtrl', { $scope: $scope });
      $scope.list = [{toDo: 'food', check: false}, {toDo: 'drink', check: true}]
      $scope.deleteItem();
      expect($scope.list).not.toContain({toDo: 'drink', check: true});
    });
  });
});