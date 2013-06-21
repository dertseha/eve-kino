/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define(["module", "angular", "TestController", "3d/SceneProducer", "Resources"], function(module, angular, testController, sceneProducer, Resources) {
  "use strict";

  var config = module.config();

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);

    appModule.controller("TestController", ["$scope", testController.create(config)]);

    sceneProducer.getResourceManager().setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

    var scene = sceneProducer.createScene(mainScreen);
    scene.setBackgroundBox("res:/dx9/scene/universe/a01_cube.red");

    var ship = scene.scene.loadShip("res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red", undefined);
    ship.loadBoosters("res:/dx9/model/ship/booster/booster_amarr.red");

    var camera = new Resources.Camera(scene.getCamera());
    var director = new Resources.Director();

    this.scene.setPreRenderCallback(function() {
      // TODO: move this to some general time keeper

      // stageManager.updateStage() // perform blocking... by stage manager?
      camera.updateFrame();
      // recordHead.saveStage() // could also be called continuity; done by camera?

    });

    return [appModule.name];
  };

  return main;
});