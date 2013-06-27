/* jshint maxparams:10 */
/* global console */
/**
The ApplicationController is the master controller for the app

@module Client
@class ApplicationController
*/
define(["Defaults", "production/Resources", "controls/GamepadApi",
    "production/ccp/res/ShipArchetype", "production/ccp/res/PlanetArchetype", "production/ccp/res/SceneryArchetype",
    "production/Track", "production/Reel"
],

function(defaults, Resources, GamepadApi, ShipArchetype, PlanetArchetype, SceneryArchetype, Track, Reel) {
  "use strict";

  var addShip = function(modelView, resourceUrl) {
    var arch = new ShipArchetype();

    arch.setResourceUrl(resourceUrl);

    modelView.props.push(arch);
  };

  var addPlanet = function(modelView, itemId, resourceUrl, atmosphereUrl, heightMap1Url, heightMap2Url) {
    var arch = new PlanetArchetype();

    arch.setItemId(itemId);
    arch.setResourceUrl(resourceUrl);
    arch.setAtmosphereUrl(atmosphereUrl);
    arch.setHeightMap1Url(heightMap1Url);
    arch.setHeightMap2Url(heightMap2Url);

    modelView.props.push(arch);
  };

  var addScenery = function(modelView, resourceUrl) {
    var arch = new SceneryArchetype();

    arch.setResourceUrl(resourceUrl);

    modelView.props.push(arch);
  };

  var initModelView = function(modelView, controller, config) {
    modelView.status = "Initializing...";
    modelView.record = function() {
      controller.record();
    };
    modelView.pause = function() {
      controller.stop();
    };
    modelView.play = function() {
      controller.play();
    };
    modelView.addProp = function(arch) {
      controller.addProp(arch);
    };
    modelView.setFocusOnCamera = function() {
      controller.setFocusOnCamera();
    };

    modelView.props = [];
    addShip(modelView, "res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red");
    addShip(modelView, "res:/dx9/model/ship/gallente/Cruiser/GC3/CreoDron/GC3_T2_CreoDron.red");
    addShip(modelView, "res:/dx9/model/ship/amarr/at1/at1.red");
    addShip(modelView, "res:/dx9/model/ship/jove/capsule/capsule.red");

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

    addScenery(modelView, "res:/dx9/Model/station/gallente/gs2/gs2.red");
    addScenery(modelView, "res:/dx9/model/jumpgate/amarr/abg.red");
    addScenery(modelView, "res:/dx9/model/worldobject/asteroid/zuthrine/shards/zuthrine_shard01_unmined.red");
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
      modelView.status = "Set created";
      modelView.$apply();
    }, function(err) {
      modelView.status = err;
      modelView.$apply();
    });
  };

  ApplicationController.prototype.placeObjectInFrontOfCamera = function(obj, distance) {
    var sceneCamera = this.set.getSceneCamera();
    var stateData = obj.getStateData();
    var cameraPos = sceneCamera.getPosition();
    var offset = distance > 10.0 ? distance : 10.0;

    sceneCamera.rotateModelVectorByModelRotation(stateData.position, 0.0, 0.0, -offset);
    stateData.position[0] += cameraPos[0] * -1;
    stateData.position[1] += cameraPos[1] * -1;
    stateData.position[2] += cameraPos[2] * -1;
    obj.setStateData(stateData);
  };

  ApplicationController.prototype.addProp = function(arch) {
    var that = this;
    var propPromise = this.set.getStage().enter(arch);

    propPromise.then(function(prop) {
      var radius = prop.getBoundingSphereRadius();

      that.placeObjectInFrontOfCamera(prop, radius);

      that.createScriptedAnimatorForProp(prop);
      that.setFocusOnProp(prop);
    });
  };

  ApplicationController.prototype.createScriptedAnimatorForProp = function(prop) {
    var track = new Track([]);
    var animator = this.stageManager.getAnimator(prop);

    animator.setScript(track);
    this.reel.addTrack(track);
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
    this.stopReelTransmission();

    this.camCommands = this.director.getCommandChannel("camera", Resources.CameraOperator.getActionNames());

    var shotList = new Track([]);
    this.reel.addTrack(shotList);
    this.cameraOperator = new Resources.CameraOperator(set.getSceneCamera(), shotList);
    this.setFocusOnCamera();

    this.stageManager = new Resources.StageManager(set.getStage());

    this.createDefaultBindings();

    this.setupGamepadInput();

    // TODO: The command channel must come from the prop archetype!
    this.animCommands = that.director.getCommandChannel("animator", Resources.CameraOperator.getActionNames()); // TODO: proper action names

    set.getSyncSource().setCallback(function() {
      // TODO: move this to some general time keeper

      that.stageManager.updateStage();
      that.cameraOperator.updateCamera();

      that.reelTransmission.update();
    });

  };

  ApplicationController.prototype.clearFocus = function() {
    if (this.focusTarget) {
      this.focusTarget.setCommandChannel(null);
      this.focusTarget = null;
      this.focusTrack.setRecording(false);
      this.focusTrack = null;
      this.focusCommandChannel = null;
    }
  };

  ApplicationController.prototype.setFocusOnCamera = function() {
    this.clearFocus();
    this.focusTarget = this.cameraOperator;
    this.focusTrack = this.cameraOperator.getShotList();
    this.focusCommandChannel = this.camCommands;

    this.focusTarget.setCommandChannel(this.focusCommandChannel);
  };

  ApplicationController.prototype.setFocusOnProp = function(prop) {
    this.clearFocus();
    this.focusTarget = this.stageManager.getAnimator(prop);
    this.focusTrack = this.focusTarget.getScript();
    this.focusCommandChannel = this.animCommands;

    this.focusTarget.setCommandChannel(this.focusCommandChannel);
  };

  ApplicationController.prototype.record = function() {
    this.startReelTransmission();
    this.reel.skipTo(0);

    if (this.focusTarget) {
      this.focusTarget.setCommandChannel(this.focusCommandChannel);
      this.focusTrack.setRecording(true);
    }
  };

  ApplicationController.prototype.stop = function() {
    this.stopReelTransmission();
    this.reel.skipTo(0);

    if (this.focusTarget) {
      this.focusTarget.setCommandChannel(null);
      this.focusTrack.setRecording(false);
    }
  };

  ApplicationController.prototype.play = function() {
    this.startReelTransmission();
    this.reel.skipTo(0);

    if (this.focusTarget) {
      this.focusTarget.setCommandChannel(null);
      this.focusTrack.setRecording(false);
    }
  };

  ApplicationController.prototype.startReelTransmission = function() {
    var reel = this.reel;

    this.reelTransmission = {
      update: function() {
        reel.nextFrame();
      }
    };
  };

  ApplicationController.prototype.stopReelTransmission = function() {
    this.reelTransmission = {
      update: function() {}
    };
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