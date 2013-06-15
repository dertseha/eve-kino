/**
The TestController is the factory for the controller (why not naming it ...Factory?)

@module Client
@class TestController
*/
define([], function() {
  "use strict";


  /**
    Creates a controller function

    @method create
    @param config {Object} the configuration to use
    @return {Function} Controller function
  */
  var create = function(config) {
    return function($scope) {
      $scope.testName = config.test;
    };
  };

  return {
    create: create
  };
});