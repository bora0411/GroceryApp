'use strict';

describe('Service: groceryService', function () {

  // load the controller's module
  beforeEach(module('groceryApp'));

  it('checks if Product factory exists', inject(function (Product) {
    expect(Product).toBeDefined();
  }));
});