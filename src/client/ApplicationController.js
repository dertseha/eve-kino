/* jshint maxparams:20 */
/* global console */
/**
The ApplicationController is the master controller for the app

@module Client
@class ApplicationController
*/
define(["lib/q", "Defaults", "ui/Dialogs", "production/Resources", "controls/GamepadApi",
    "production/ccp/res/ShipArchetype", "production/ccp/res/PlanetArchetype", "production/ccp/res/SceneryArchetype",
    "production/Track", "production/Reel", "util/time/SystemTimeSource", "util/time/ClockedTimeSource", "util/time/TimeWatch"
  ],

  function(q, defaults, uiDialogs, Resources, GamepadApi, ShipArchetype, PlanetArchetype, SceneryArchetype, Track, Reel,
    SystemTimeSource, ClockedTimeSource, TimeWatch) {
    "use strict";

    var addPlanet = function(resLibrary, itemId, resourceUrl, atmosphereUrl, heightMap1Url, heightMap2Url) {
      var arch = new PlanetArchetype({
        propType: PlanetArchetype.propType
      });

      arch.setItemId(itemId);
      arch.setResourceUrl(resourceUrl);
      arch.setAtmosphereUrl(atmosphereUrl);
      arch.setHeightMap1Url(heightMap1Url);
      arch.setHeightMap2Url(heightMap2Url);

      resLibrary.addResource("planet", arch);
    };

    var initModelView = function(modelView, controller, config) {
      modelView.status = "Initializing...";
      modelView.record = function() {
        controller.record();
      };
      modelView.stop = function() {
        controller.stop();
      };
      modelView.play = function() {
        controller.play();
      };
      modelView.newProp = function() {
        controller.newProp();
      };
      modelView.setFocusOnCamera = function() {
        controller.setFocusOnCamera();
      };
      modelView.setFocusOnProp = function(prop) {
        controller.setFocusOnProp(prop);
      };

      modelView.encodeSession = function() {
        return controller.encodeSession();
      };

      modelView.starLightColorChanged = function() {
        controller.setStarLightColor(modelView.set.lighting.starLightColor);
      };
      modelView.requestStar = function(starDesc) {
        controller.requestStar(starDesc);
      };

      modelView.set = {
        lighting: {
          starLightColor: [0, 0, 0]
        }
      };

      modelView.stars = [];
      var noStar = {
        resourceUrl: "",
        toString: function() {
          return "(no star)";
        }
      };
      modelView.stars.push(noStar);
      modelView.selectedStar = noStar;

      modelView.stageProps = [];
    };

    var ApplicationController = function(modelView, dialogFactory, config, productionManager, mainScreen) {
      var that = this;
      var sessionMeta = {
        set: {}
      };

      this.systemTimeSource = new SystemTimeSource();
      this.timeWatch = new TimeWatch();

      this.mainScreen = mainScreen;
      this.productionManager = productionManager;
      this.modelView = modelView;
      this.dialogFactory = dialogFactory;
      this.sessionMeta = sessionMeta;

      initModelView(modelView, this, config);

      var resPromise = productionManager.setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

      resPromise.then(function(resLibrary) {

        that.resourceLibrary = resLibrary;

        resLibrary.forEachResource("star", function(entry) {
          that.modelView.stars.push(entry);
        });

        addPlanet(resLibrary, 40000002,
          "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_61.red",
          undefined,
          "res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial03_H.png",
          "res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial04_H.png");
        addPlanet(resLibrary, 40000100,
          "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_12.red",
          undefined,
          "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant01_D.png",
          "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant03_D.png");

        modelView.$apply(function() {
          that.showCreationDialog(resLibrary);
        });
      });
    };

    ApplicationController.prototype.showCreationDialog = function(resLibrary) {
      var productionManager = this.productionManager;
      var mainScreen = this.mainScreen;
      var sessionMeta = this.sessionMeta;
      var modelView = this.modelView;
      var that = this;

      var createSession = function(creation, sessionData) {
        var deferred = q.defer();
        var session = {
          set: null,
          data: sessionData
        };

        creation.then(function(set) {
          session.set = set;
          deferred.resolve(session);
        }, function(err) {
          deferred.reject(err);
        });

        return deferred.promise;
      };

      var createDialogListener = {
        setQualityOptions: function(options) {
          productionManager.setQualityOptions(options);
        },

        createSpaceSet: function(background, sessionData) {
          var creation = productionManager.createSet(mainScreen, background.resourceUrl);

          sessionMeta.set = {
            space: {
              background: background.resourceUrl
            }
          };

          return createSession(creation, sessionData);
        },
        createChromaKeyedSet: function(color, sessionData) {
          var creation = productionManager.createChromaKeyedSet(mainScreen, color);

          sessionMeta.set = {
            chromaKey: {
              color: color
            }
          };

          return createSession(creation, sessionData);
        }
      };

      var dialogParams = {
        backgrounds: [],
        qualityOptions: productionManager.getQualityOptions()
      };

      resLibrary.forEachResource("sceneBg", function(entry) {
        dialogParams.backgrounds.push(entry);
      });
      dialogParams.backgrounds.sort(function(a, b) {
        return a.toString().localeCompare(b.toString());
      });

      var dialogTemplate = uiDialogs.createSessionDialog.getBuilder(that.dialogFactory, dialogParams);
      var loadingDialog = null;

      dialogTemplate.open().then(function(result) {
        loadingDialog = that.showSplash("Creating set...", "Please wait.");

        return result(createDialogListener);
      }).then(function(session) {
        loadingDialog.close();
        loadingDialog = null;
        that.onSessionCreated(session);
        modelView.status = "Set created";
        modelView.$apply();
      }, function(err) {
        var reason = (err && (err.message || err)) || "Unknown reason. That's bad.";

        loadingDialog.close();
        loadingDialog = null;
        that.showSplash("Failed to create a set. Try Reloading.", reason);
      });
    };

    ApplicationController.prototype.showSplash = function(title, message) {
      var params = {
        title: title,
        message: message
      };
      var dialog = uiDialogs.splashDialog.getBuilder(this.dialogFactory, params);
      var result = dialog.open();

      if (!this.modelView.$$phase) {
        this.modelView.$apply();
      }

      return dialog;
    };

    ApplicationController.prototype.encodeSession = function() {
      var session = {
        ver: 0,
        session: this.sessionMeta,
        stage: this.stageManager.encodeData(),
        videography: {
          cameras: [{
            shotList: this.cameraOperator.getShotList().data
          }]
        },
        lighting: this.set.getLightBoard().getStateData()
      };

      return JSON.stringify(session);
    };

    ApplicationController.prototype.newProp = function() {
      var that = this;
      var params = {
        resLibrary: this.resourceLibrary
      };
      var dialog = uiDialogs.addPropDialog.getBuilder(this.dialogFactory, params);

      dialog.open().then(function(callback) {
        callback(that);
      });

    };

    ApplicationController.prototype.addProp = function(arch, scriptData) {
      var that = this;
      var propPromise = this.set.getStage().enter(arch);

      propPromise.then(function(prop) {
        var radius = prop.getBoundingSphereRadius();

        that.createScriptedAnimatorForProp(prop, scriptData);

        if (!scriptData) {
          that.cameraOperator.placeObjectInFrontOfCamera(prop, radius);
          that.setFocusOnProp(prop);
        }

        that.modelView.stageProps.push(prop);
        that.modelView.$apply();
      });
    };

    ApplicationController.prototype.createScriptedAnimatorForProp = function(prop, scriptData) {
      var track = new Track(scriptData || []);
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

    ApplicationController.prototype.findStarDescByResourceUrl = function(resourceUrl) {
      var result = null;

      this.modelView.stars.forEach(function(starDesc) {
        if (starDesc.resourceUrl === resourceUrl) {
          result = starDesc;
        }
      });

      return result;
    };

    ApplicationController.prototype.onSessionCreated = function(session) {
      var that = this;
      var set = session.set;
      var lightBoard = set.getLightBoard();

      this.set = set;
      this.clockedTimeSource = new ClockedTimeSource(this.set.getSyncSource().getRate());
      this.timeWatch.reset(that.clockedTimeSource.now());

      this.director = new Resources.Director();
      this.reel = new Reel();
      this.stopReelTransmission();

      this.camCommands = this.director.getCommandChannel("camera", Resources.CameraOperator.getActionNames());

      var shotList = null;
      if (session.data && session.data.lighting) {
        this.modelView.set.lighting.starLightColor = session.data.lighting.starLightColor;
        lightBoard.setStarLightColor(session.data.lighting.starLightColor);
        if (session.data.lighting.starResourceUrl !== "") {
          this.modelView.selectedStar = this.findStarDescByResourceUrl(session.data.lighting.starResourceUrl);
          lightBoard.requestStar(session.data.lighting.starResourceUrl);
        }
      }
      if (session.data && session.data.videography) {
        session.data.videography.cameras.forEach(function(cameraEntry) {
          var track = new Track(cameraEntry.shotList);

          that.reel.addTrack(track);
          if (!shotList) {
            shotList = track;
          }
        });
      }
      if (!shotList) {
        shotList = new Track([]);
        this.reel.addTrack(shotList);
      }
      this.cameraOperator = new Resources.CameraOperator(set.getSceneCamera(), shotList, this.timeWatch);
      this.setFocusOnCamera();

      this.stageManager = new Resources.StageManager(set.getStage(), this.timeWatch);

      this.createDefaultBindings();
      this.setupGamepadInput();

      if (session.data) {
        session.data.stage.props.forEach(function(propEntry) {
          var arch = that.productionManager.getArchetypeForProp(propEntry.propData);

          that.addProp(arch, propEntry.script);
        });
      }

      // TODO: The command channel must come from the prop archetype!
      this.animCommands = that.director.getCommandChannel("animator", Resources.CameraOperator.getActionNames()); // TODO: proper action names

      set.getSyncSource().setCallback(function() {
        // TODO: move this to some general time keeper

        // this is part of the callback from the intermittent mechanism; onNewFrame
        that.clockedTimeSource.tick();
        that.timeWatch.setTime(that.clockedTimeSource.now());
        //that.timeWatch.setTime(that.systemTimeSource.now());
        //console.log("time: " + that.timeWatch.getDelta());
        that.stageManager.updateStage();
        that.cameraOperator.updateCamera();

        // this is part of the intermittent mechanism
        that.reelTransmission.update();
      });

    };

    ApplicationController.prototype.setStarLightColor = function(rgb) {
      var lightBoard = this.set.getLightBoard();

      lightBoard.setStarLightColor(rgb);
    };

    ApplicationController.prototype.requestStar = function(starDesc) {
      var lightBoard = this.set.getLightBoard();

      if (starDesc.resourceUrl !== "") {
        lightBoard.requestStar(starDesc.resourceUrl);
      } else {
        lightBoard.removeStar();
      }
    };

    ApplicationController.prototype.clearFocus = function() {
      if (this.focusTarget) {
        this.focusTarget.setCommandChannel(null);
        this.focusTarget = null;
        this.focusTrack.setRecording(false);
        this.focusTrack = null;
        this.focusCommandChannel = null;

        this.modelView.selectedFocus = null;
        this.modelView.$apply();
      }
    };

    ApplicationController.prototype.setFocusOnCamera = function() {
      this.clearFocus();
      this.focusTarget = this.cameraOperator;
      this.focusTrack = this.cameraOperator.getShotList();
      this.focusCommandChannel = this.camCommands;

      this.cameraOperator.setChaseObject(null);
      this.focusTarget.setCommandChannel(this.focusCommandChannel);
    };

    ApplicationController.prototype.setFocusOnProp = function(prop) {
      this.clearFocus();
      this.focusTarget = this.stageManager.getAnimator(prop);
      this.focusTrack = this.focusTarget.getScript();
      this.focusCommandChannel = this.animCommands;

      this.cameraOperator.setChaseObject(prop);
      this.focusTarget.setCommandChannel(this.focusCommandChannel);

      this.modelView.selectedFocus = prop;
      this.modelView.$apply();
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
        this.focusTarget.resetToRecording();
        this.focusTarget.setCommandChannel(this.focusCommandChannel);
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
      return function($scope, $dialog) {
        return new ApplicationController($scope, $dialog, config, productionManager, mainScreen);
      };
    };

    return {
      ApplicationController: ApplicationController,
      create: create
    };
  });