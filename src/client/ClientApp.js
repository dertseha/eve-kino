/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define(["module", "angular", "TestController", "3d/SceneProducer", "Director"], function(module, angular, testController, sceneProducer, Director) {
  "use strict";

  var config = module.config();

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);

    appModule.controller("TestController", ["$scope", testController.create(config)]);

    sceneProducer.getResourceManager().setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

    var scene = sceneProducer.createScene(mainScreen);
    scene.setBackgroundBox("res:/dx9/scene/universe/a01_cube.red");

    var director = new Director(scene);

    return [appModule.name];
  };

  return main;
});