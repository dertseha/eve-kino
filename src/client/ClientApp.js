/*jshint maxparams:100 */
/* global console */

/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define(["module", "angular", "lib/ccpwgl", "TestController", "production/ccp/ProductionManager", "production/Resources", "controls/GamepadApi",
    "production/ccp/res/ShipArchetype", "production/ccp/res/PlanetArchetype"
],

function(module, angular, ccpwgl, testController, ProductionManager, Resources, GamepadApi, ShipArchetype, PlanetArchetype) {
  "use strict";

  var config = module.config();

  var onSetCreated = function(set) {
    //var sun = scene.scene.loadSun("res:/dx9/model/lensflare/blue.red");
    //scene.scene.setSunLightColor([0.0, 0.0, 0.0]);
    //scene.scene.setFog(10, 1000, 0.8, [0.0, 0.3, 0.0]);

    var planetArch = new PlanetArchetype();

    planetArch.setItemId(40000100);
    planetArch.setResourceUrl("res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_12.red");
    planetArch.setHeightMap1Url("res:/dx9/model/worldobject/planet/Gasgiant/GasGiant01_D.png");
    planetArch.setHeightMap2Url("res:/dx9/model/worldobject/planet/Gasgiant/GasGiant03_D.png");

    set.getStage().enter(planetArch);

    var shipArch = new ShipArchetype();

    shipArch.setResourceUrl("res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red");

    set.getStage().enter(shipArch);
    //ship.loadBoosters("res:/dx9/model/ship/booster/booster_amarr.red");

    var camera = new Resources.Camera(set.getSceneCamera());
    var director = new Resources.Director();
    var camCommands = director.getCommandChannel("camera", Resources.CameraOperator.getActionNames());
    var cameraOperator = new Resources.CameraOperator(camCommands);
    var gamepadInput = director.getInputChannel("gamepad");

    camera.setOperator(cameraOperator);

    director.addBinding({
      actionName: "yawLeft"
    }, {
      inputName: "RIGHT_STICK_X_NEG"
    });
    director.addBinding({
      actionName: "yawRight"
    }, {
      inputName: "RIGHT_STICK_X_POS"
    });

    director.addBinding({
      actionName: "pitchUp"
    }, {
      inputName: "RIGHT_STICK_Y_POS"
    });
    director.addBinding({
      actionName: "pitchDown"
    }, {
      inputName: "RIGHT_STICK_Y_NEG"
    });

    director.addBinding({
      actionName: "rollClockwise"
    }, {
      inputName: "LEFT_STICK_X_POS"
    });
    director.addBinding({
      actionName: "rollCounter"
    }, {
      inputName: "LEFT_STICK_X_NEG"
    });

    director.addBinding({
      actionName: "moveForward"
    }, {
      inputName: "RB"
    });
    director.addBinding({
      actionName: "moveBackward"
    }, {
      inputName: "LB"
    });

    director.addBinding({
      actionName: "moveLeft"
    }, {
      inputName: "X"
    });
    director.addBinding({
      actionName: "moveRight"
    }, {
      inputName: "B"
    });

    director.addBinding({
      actionName: "moveUp"
    }, {
      inputName: "Y"
    });
    director.addBinding({
      actionName: "moveDown"
    }, {
      inputName: "A"
    });

    var gamepadListener = {
      onGamepadDisconnected: function() {},
      onControlValueChanged: function(controlName, value) {
        gamepadInput.setIntensity(controlName, value);
      }
    };
    var gamepadApi = new GamepadApi();
    gamepadApi.addGamepadListener({
      onGamepadConnected: function(gamepad) {
        gamepad.addListener(gamepadListener);
      },
      onGamepadDisconnected: function() {}
    });
    var gotGamepads = gamepadApi.init();

    set.setPreRenderCallback(function() {
      // TODO: move this to some general time keeper

      // stageManager.updateStage() // perform blocking... by stage manager?
      camera.updateFrame();
      // recordHead.saveStage() // could also be called continuity; done by camera?

    });
  };

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);

    appModule.controller("TestController", ["$scope", testController.create(config)]);

    var productionManager = new ProductionManager(ccpwgl);
    productionManager.setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

    var promise = productionManager.createSet(mainScreen, "res:/dx9/scene/universe/a01_cube.red");

    promise.then(onSetCreated, function(err) {
      console.log("Init error: " + err);
    });


    return [appModule.name];
  };

  return main;
});