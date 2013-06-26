/* jshint maxparams:10 */
/* global console */
/**
The ApplicationController is the master controller for the app

@module Client
@class ApplicationController
*/
define(["Defaults", "production/Resources", "controls/GamepadApi", "production/ccp/res/ShipArchetype", "production/ccp/res/PlanetArchetype", "production/Track", "production/Reel"],

function(defaults, Resources, GamepadApi, ShipArchetype, PlanetArchetype, Track, Reel) {
  "use strict";

  var addShip = function(modelView, url) {
    var ship = {
      url: url
    };

    modelView.ships.push(ship);
  };

  var addPlanet = function(modelView, itemId, resourceUrl, atmosphereUrl, heightMap1Url, heightMap2Url) {
    var arch = new PlanetArchetype();

    arch.setItemId(itemId);
    arch.setResourceUrl(resourceUrl);
    arch.setAtmosphereUrl(atmosphereUrl);
    arch.setHeightMap1Url(heightMap1Url);
    arch.setHeightMap2Url(heightMap2Url);

    modelView.planets.push(arch);
  };

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

    modelView.loadShip = function(ship) {
      controller.testCreateShip(ship.url);
    };

    modelView.loadPlanet = function(arch) {
      controller.testCreatePlanet(arch);
    };

    modelView.ships = [];
    addShip(modelView, "res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red");
    addShip(modelView, "res:/dx9/model/ship/gallente/Cruiser/GC3/CreoDron/GC3_T2_CreoDron.red");
    addShip(modelView, "res:/dx9/model/ship/amarr/at1/at1.red");
    addShip(modelView, "res:/dx9/model/ship/jove/capsule/capsule.red");

    modelView.planets = [];
    addPlanet(modelView, 40000002,
      "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_61.red",
      undefined,
      "res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial03_H.png",
      "res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial04_H.png");
    addPlanet(modelView, 40000100,
      "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_12.red",
      undefined,
      "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant01_D.png",
      "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant03_D.png");
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
  };

  ApplicationController.prototype.testCreatePlanet = function(arch) {
    var planetPromise = this.set.getStage().enter(arch);
    var sceneCamera = this.set.getSceneCamera();

    planetPromise.then(function(planet) {
      var stateData = planet.getStateData();
      var cameraPos = sceneCamera.getPosition();

      stateData.radius = 5000;

      sceneCamera.rotateModelVectorByModelRotation(stateData.position, 0.0, 0.0, -stateData.radius * 1.0);
      stateData.position[0] += cameraPos[0] * -1;
      stateData.position[1] += cameraPos[1] * -1;
      stateData.position[2] += cameraPos[2] * -1;
      planet.setStateData(stateData);
    });
  };

  ApplicationController.prototype.testCreateShip = function(resourceUrl) {
    var shipArch = new ShipArchetype();
    var that = this;
    var sceneCamera = this.set.getSceneCamera();

    shipArch.setResourceUrl(resourceUrl);

    var shipPromise = this.set.getStage().enter(shipArch);

    this.animCommands = that.director.getCommandChannel("animator", Resources.CameraOperator.getActionNames()); // TODO: proper action names

    shipPromise.then(function(ship) {
      var track = new Track([]);
      var animator = that.stageManager.getAnimator(ship, track);
      var stateData = ship.getStateData();
      var radius = ship.getBoundingSphereRadius();
      var cameraPos = sceneCamera.getPosition();

      if (radius < 10.0) {
        radius = 10.0;
      }

      sceneCamera.rotateModelVectorByModelRotation(stateData.position, 0.0, 0.0, -radius * 1.5);
      stateData.position[0] += cameraPos[0] * -1;
      stateData.position[1] += cameraPos[1] * -1;
      stateData.position[2] += cameraPos[2] * -1;
      ship.setStateData(stateData);

      that.reel.addTrack(track);
      if (that.selectedShipAnim) {
        that.selectedShipAnim.setCommandChannel(null);
      }
      //animator.setCommandChannel(that.animCommands);
      //that.selectedShipAnim = animator;
    });
    //ship.loadBoosters("res:/dx9/model/ship/booster/booster_amarr.red");
  };

  ApplicationController.prototype.createDefaultBindings = function() {
    for (var actionName in defaults.inputsByAction) {
      this.director.addBinding({
        actionName: actionName
      }, {
        inputName: defaults.inputsByAction[actionName]
      });
    }
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
    this.reel = new Reel();

    var camCommands = this.director.getCommandChannel("camera", Resources.CameraOperator.getActionNames());

    this.camera = new Resources.Camera(set.getSceneCamera());
    this.cameraOperator = new Resources.CameraOperator(camCommands, new Track([]));
    this.camera.setOperator(this.cameraOperator);

    this.stageManager = new Resources.StageManager(set.getStage());

    this.createDefaultBindings();

    this.setupGamepadInput();

    set.getSyncSource().setCallback(function() {
      // TODO: move this to some general time keeper

      that.stageManager.updateStage();
      that.camera.updateFrame();

      that.reel.nextFrame();
    });

  };

  ApplicationController.prototype.record = function() {
    this.reel.skipTo(0);
    //this.cameraOperator.setManualMode(true);

    var track = this.selectedShipAnim.getScript();
    this.selectedShipAnim.setCommandChannel(this.animCommands);
    track.setRecording(true);
  };

  ApplicationController.prototype.stop = function() {
    this.reel.skipTo(0);
    //this.cameraOperator.setManualMode(true);

    var track = this.selectedShipAnim.getScript();
    this.selectedShipAnim.setCommandChannel(null);
    track.setRecording(false);
  };

  ApplicationController.prototype.play = function() {
    this.reel.skipTo(0);
    //this.cameraOperator.setManualMode(false);

    var track = this.selectedShipAnim.getScript();
    this.selectedShipAnim.setCommandChannel(null);
    track.setRecording(false);
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