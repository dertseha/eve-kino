/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define(["module", "angular", "TestController", "3d/SceneProducer"], function(module, angular, testController, sceneProducer) {
  "use strict";

  var config = module.config();

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);

    appModule.controller("TestController", ["$scope", testController.create(config)]);

    sceneProducer.getResourceManager().setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

    var scene = sceneProducer.createScene(mainScreen);
    scene.setBackgroundBox("res:/dx9/scene/universe/a01_cube.red");

    return [appModule.name];
  };

  return main;
});