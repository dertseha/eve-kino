/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define(["module", "angular", "lib/ccpwgl", "ApplicationController", "production/ccp/ProductionManager"],

function(module, angular, ccpwgl, appController, ProductionManager) {
  "use strict";

  var config = module.config();

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);
    var productionManager = new ProductionManager(ccpwgl);

    appModule.controller("ApplicationController", ["$scope", appController.create(config, productionManager, mainScreen)]);

    return [appModule.name];
  };

  return main;
});