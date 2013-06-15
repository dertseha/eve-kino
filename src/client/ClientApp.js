/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define(["module", "angular", "TestController"], function(module, angular, testController) {
  "use strict";

  var config = module.config();

  var appModule = angular.module("ClientApp", []);

  appModule.controller("TestController", ["$scope", testController.create(config)]);

  return [appModule.name];
});