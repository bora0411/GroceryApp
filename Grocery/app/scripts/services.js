'use strict';

/* Services */

var groceryService = angular.module('groceryService', ['ngResource']);

groceryService.factory('Product', ['$resource', function($resource){ 
    return $resource('jsn/:productsId.json', {}, {
      query: {
        method:'GET', 
        params: {
          productsId:'products'
        }, 
        isArray: true
      }
    });

  }]);