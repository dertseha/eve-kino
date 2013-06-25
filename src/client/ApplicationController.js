/* global console */
/**
The ApplicationController is the master controller for the app

@module Client
@class ApplicationController
*/
define(["production/Resources", "controls/GamepadApi", "production/ccp/res/ShipArchetype", "production/ccp/res/PlanetArchetype", "production/Track"],

function(Resources, GamepadApi, ShipArchetype, PlanetArchetype, Track) {
  "use strict";

  var initModelView = function(modelView, controller, config) {
    modelView.testName = config.test;
    modelView.record = function() {
      controller.record();
    };
    modelView.pause = function() {
      controller.stop();
    };
    modelView.play = function() {
      controller.play();
    };

  };

  var ApplicationController = function(modelView, config, productionManager, mainScreen) {
    var that = this;

    this.productionManager = productionManager;

    initModelView(modelView, this, config);

    productionManager.setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

    var promisedSet = productionManager.createSet(mainScreen, "res:/dx9/scene/universe/a01_cube.red");
    //var promisedSet = productionManager.createChromaKeyedSet(mainScreen, [0.0, 1.0, 0.0, 1.0]);

    promisedSet.then(function(set) {
      that.onSetCreated(set);
    }, function(err) {
      console.log("Init error: " + err);
      modelView.testName = err;
      modelView.$apply();
    });

    this.frameIndex = 0;
    this.track = new Track([]);
  };

  ApplicationController.prototype.testCreatePlanet = function() {
    var planetArch = new PlanetArchetype();

    planetArch.setItemId(40000100);
    planetArch.setResourceUrl("res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_12.red");
    planetArch.setHeightMap1Url("res:/dx9/model/worldobject/planet/Gasgiant/GasGiant01_D.png");
    planetArch.setHeightMap2Url("res:/dx9/model/worldobject/planet/Gasgiant/GasGiant03_D.png");

    this.set.getStage().enter(planetArch);
  };

  ApplicationController.prototype.testCreateShip = function() {
    var shipArch = new ShipArchetype();
    var that = this;

    shipArch.setResourceUrl("res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red");

    var shipPromise = this.set.getStage().enter(shipArch);

    shipPromise.then(function(ship) {
      var animator = that.stageManager.getAnimator(ship);
      var animCommands = that.director.getCommandChannel("animator", Resources.CameraOperator.getActionNames()); // TODO: proper action names

      animator.setCommandChannel(animCommands);
    });
    //ship.loadBoosters("res:/dx9/model/ship/booster/booster_amarr.red");
  };

  ApplicationController.prototype.createDefaultBindings = function() {
    this.director.addBinding({
      actionName: "yawLeft"
    }, {
      inputName: "RIGHT_STICK_X_NEG"
    });
    this.director.addBinding({
      actionName: "yawRight"
    }, {
      inputName: "RIGHT_STICK_X_POS"
    });

    this.director.addBinding({
      actionName: "pitchUp"
    }, {
      inputName: "RIGHT_STICK_Y_POS"
    });
    this.director.addBinding({
      actionName: "pitchDown"
    }, {
      inputName: "RIGHT_STICK_Y_NEG"
    });

    this.director.addBinding({
      actionName: "rollClockwise"
    }, {
      inputName: "LEFT_STICK_X_POS"
    });
    this.director.addBinding({
      actionName: "rollCounter"
    }, {
      inputName: "LEFT_STICK_X_NEG"
    });

    this.director.addBinding({
      actionName: "moveForward"
    }, {
      inputName: "RB"
    });
    this.director.addBinding({
      actionName: "moveBackward"
    }, {
      inputName: "LB"
    });

    this.director.addBinding({
      actionName: "moveLeft"
    }, {
      inputName: "X"
    });
    this.director.addBinding({
      actionName: "moveRight"
    }, {
      inputName: "B"
    });

    this.director.addBinding({
      actionName: "moveUp"
    }, {
      inputName: "Y"
    });
    this.director.addBinding({
      actionName: "moveDown"
    }, {
      inputName: "A"
    });

  };

  ApplicationController.prototype.setupGamepadInput = function() {
    var gamepadInput = this.director.getInputChannel("gamepad");

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

    gamepadApi.init();
  };

  ApplicationController.prototype.onSetCreated = function(set) {
    var that = this;

    this.set = set;

    this.director = new Resources.Director();

    var camCommands = this.director.getCommandChannel("camera", Resources.CameraOperator.getActionNames());

    this.camera = new Resources.Camera(set.getSceneCamera());
    this.cameraOperator = new Resources.CameraOperator(camCommands, this.track);
    this.camera.setOperator(this.cameraOperator);

    this.stageManager = new Resources.StageManager(set.getStage());

    this.testCreateShip();

    this.createDefaultBindings();

    this.setupGamepadInput();

    set.getSyncSource().setCallback(function() {
      // TODO: move this to some general time keeper

      that.track.setCurrentFrame(that.frameCounter++);

      that.stageManager.updateStage();
      that.camera.updateFrame();
    });

  };

  ApplicationController.prototype.record = function() {
    this.frameCounter = 0;
    this.cameraOperator.setManualMode(true);
    this.track.setRecording(true);
  };

  ApplicationController.prototype.stop = function() {
    this.frameCounter = 0;
    this.cameraOperator.setManualMode(true);
    this.track.setRecording(false);
  };

  ApplicationController.prototype.play = function() {
    this.frameCounter = 0;
    this.cameraOperator.setManualMode(false);
    this.track.setRecording(false);
  };

  /**
    Creates a controller function

    @method create
    @param config {Object} the configuration to use
    @return {Function} Controller function
  */
  var create = function(config, productionManager, mainScreen) {
    return function($scope) {
      return new ApplicationController($scope, config, productionManager, mainScreen);
    };
  };

  return {
    ApplicationController: ApplicationController,
    create: create
  };
});