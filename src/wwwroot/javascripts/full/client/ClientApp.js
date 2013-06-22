
/**
The TestController is the factory for the controller (why not naming it ...Factory?)

@module Client
@class TestController
*/
define('TestController',[], function() {
  


  /**
    Creates a controller function

    @method create
    @param config {Object} the configuration to use
    @return {Function} Controller function
  */
  var create = function(config) {
    return function($scope) {
      $scope.testName = config.test;
    };
  };

  return {
    create: create
  };
});
/**
The ResourceManager is a wrapper interface over the ccpwgl accessor functions
(which internally again delegate to the dedicated resource manager)

@module Client
@class ResourceManager
*/
define('3d/ResourceManager',["lib/ccpwgl"], function(ccpwgl) {
  

  /**
    See ccpwgl.setResourcePath()

    @method setResourcePath
    @param {string} namespace Resource namespace.
    @param {string} url URL to resource root. Needs to have a trailing slash.
    @return {ResourceManager} this instance
  */
  var setResourcePath = function(namespace, url) {
    ccpwgl.setResourcePath(namespace, url);

    return this;
  };

  var manager = {
    setResourcePath: setResourcePath
  };

  return manager;
});
/**
The helper is a static object providing some helper constants and functions.

@module Client
@class Helper
*/
define('3d/Helper',["lib/gl-matrix"], function(glMatrix) {
  

  var oneDegreeInRad = Math.PI / 180.0;
  var viewDirections = {
    forward: 1.0,
    upward: -1.0,
    rightward: -1.0
  };
  var viewRotations = {
    rollClockwise: 1.0,
    pitchUp: -1.0,
    yawRight: 1.0
  };
  var modelDirections = {
    forward: 1.0,
    upward: 1.0,
    rightward: -1.0
  };

  var helper = {
    VIEW_DIRECTION_FORWARD: viewDirections.forward,
    VIEW_DIRECTION_UP: viewDirections.upward,
    VIEW_DIRECTION_RIGHT: viewDirections.rightward,

    VIEW_ROTATION_ROLL_CLOCKWISE: viewRotations.rollClockwise,
    VIEW_ROTATION_PITCH_UP: viewRotations.pitchUp,
    VIEW_ROTATION_YAW_RIGHT: viewRotations.yawRight,

    VIEW_VECTOR_FORWARD: glMatrix.vec3.create([0, 0, viewDirections.forward]),
    VIEW_VECTOR_UP: glMatrix.vec3.create([0, viewDirections.upward, 0]),
    VIEW_VECTOR_RIGHT: glMatrix.vec3.create([viewDirections.rightward, 0, 0]),

    MODEL_DIRECTION_FORWARD: modelDirections.forward,
    MODEL_DIRECTION_UP: modelDirections.upward,
    MODEL_DIRECTION_RIGHT: modelDirections.rightward,

    MODEL_VECTOR_FORWARD: glMatrix.vec3.create([0, 0, modelDirections.forward]),
    MODEL_VECTOR_UP: glMatrix.vec3.create([0, modelDirections.upward, 0]),
    MODEL_VECTOR_RIGHT: glMatrix.vec3.create([modelDirections.rightward, 0, 0]),

    /**
      Converts given degree number to radians
      @method degreeToRad
      @param degrees {Number} Degrees (0..360) to convert to radians
      @return {Number} radians for given degrees
    */
    degreeToRad: function(degrees) {
      return degrees * oneDegreeInRad;
    }
  };

  return helper;
});
/**
The SceneCamera is a very basic camera for the scene. It has the minimal
implementation to provide the projection and view matrices.

@module Client
@class SceneCamera
*/
define('3d/SceneCamera',["lib/gl-matrix", "3d/Helper"], function(glMatrix, helper) {
  

  var SceneCamera = function() {
    function createAxis(vector) {
      var axis = {
        rawValue: 0.0,
        quat: glMatrix.quat4.identity(),
        vector: vector
      };

      return axis;
    }

    this.fov = 60;
    this.nearPlane = 1;
    this.farPlane = 100000;

    this.pitch = createAxis(helper.VIEW_VECTOR_RIGHT);
    this.roll = createAxis(helper.VIEW_VECTOR_FORWARD);
    this.yaw = createAxis(helper.VIEW_VECTOR_UP);

    this.rotation = glMatrix.quat4.identity();
    this.position = glMatrix.vec3.create();
    this.viewOffset = glMatrix.vec3.create();

    this.projection = glMatrix.mat4.create();
    this.view = glMatrix.mat4.create();

    this.updateView = this.calculateView;
  };

  SceneCamera.prototype.nullFunction = function() {

  };

  SceneCamera.prototype.calculateView = function() {
    glMatrix.quat4.identity(this.rotation);

    glMatrix.quat4.multiply(this.roll.quat, this.rotation, this.rotation);
    glMatrix.quat4.multiply(this.pitch.quat, this.rotation, this.rotation);
    glMatrix.quat4.multiply(this.yaw.quat, this.rotation, this.rotation);

    glMatrix.mat4.fromRotationTranslation(this.rotation, this.viewOffset, this.view);
    glMatrix.mat4.translate(this.view, this.position);

    this.updateView = this.nullFunction;
  };

  SceneCamera.prototype.onViewChanged = function() {
    this.updateView = this.calculateView;
  };

  SceneCamera.prototype.getProjection = function(aspect) {
    glMatrix.mat4.perspective(this.fov, aspect, this.nearPlane, this.farPlane, this.projection);

    return this.projection;
  };

  SceneCamera.prototype.getView = function() {
    this.updateView();

    return this.view;
  };

  SceneCamera.prototype.update = function(dt) {

  };

  SceneCamera.prototype.getStateData = function(dest) {
    var result = dest || {};

    result.position = this.getPosition(result.position);
    if (!result.rotation) {
      result.rotation = [0, 0, 0];
    }
    result.rotation[0] = this.roll.rawValue;
    result.rotation[1] = this.pitch.rawValue;
    result.rotation[2] = this.yaw.rawValue;

    return result;
  };

  SceneCamera.prototype.setStateData = function(data) {
    this.setRoll(data.rotation[0]);
    this.setPitch(data.rotation[1]);
    this.setYaw(data.rotation[2]);
    this.setPosition(data.position);
  };

  SceneCamera.prototype.getPosition = function(dest) {
    return glMatrix.vec3.set(this.position, dest || [0, 0, 0]);
  };

  SceneCamera.prototype.setPosition = function(pos) {
    glMatrix.vec3.set(pos, this.position);
    this.onViewChanged();
  };

  SceneCamera.prototype.changeRotation = function(axis, value) {
    if (axis.rawValue !== value) {
      axis.rawValue = value;
      glMatrix.quat4.fromAngleAxis(value, axis.vector, axis.quat);
      this.onViewChanged();
    }
  };

  SceneCamera.prototype.getPitch = function() {
    return this.pitch.rawValue;
  };

  SceneCamera.prototype.setPitch = function(value) {
    this.changeRotation(this.pitch, value);
  };

  SceneCamera.prototype.getRoll = function() {
    return this.roll.rawValue;
  };

  SceneCamera.prototype.setRoll = function(value) {
    this.changeRotation(this.roll, value);
  };

  SceneCamera.prototype.getYaw = function() {
    return this.yaw.rawValue;
  };

  SceneCamera.prototype.setYaw = function(value) {
    this.changeRotation(this.yaw, value);
  };

  return SceneCamera;
});
/**
The Scene is the actual scene wrapper that contains all scene objects
and the render control.

@module Client
@class Scene
*/
define('3d/Scene',["lib/ccpwgl", "3d/SceneCamera", "lib/gl-matrix"], function(ccpwgl, SceneCamera, glMatrix) {
  

  var Scene = function() {
    this.camera = new SceneCamera();

    ccpwgl.setCamera(this.camera);

  };

  Scene.prototype.setBackgroundBox = function(resPath) {
    this.scene = ccpwgl.loadScene(resPath);
  };

  Scene.prototype.getCamera = function() {
    return this.camera;
  };

  /**
    This method registers a callback that is called before a new picture is
    rendered.
    @method setPreRenderCallback
    @param callback {function() void} the function to call for each new picture
  */
  Scene.prototype.setPreRenderCallback = function(callback) {
    ccpwgl.onPreRender = callback;
  };

  return Scene;
});
/**
The SceneProducer is a factory for a scene and provides access to the resource
manager. 

@module Client
@class SceneProducer
*/
define('3d/SceneProducer',["lib/ccpwgl", "3d/ResourceManager", "3d/Scene"], function(ccpwgl, resourceManager, Scene) {
  

  var sceneOptions = {

  };

  /**
    @method createScene
    @return {Scene} a scene object
    @throws {ccpwgl.NoWebGLError} If no WebGL context is available
  */
  var createScene = function(canvas) {
    ccpwgl.initialize(canvas, sceneOptions);

    return new Scene();
  };

  /**
    @method getResourceManager
    @return {ResourceManager} The resource manager for the producer
  */
  var getResourceManager = function() {
    return resourceManager;
  };

  var producer = {
    createScene: createScene,
    getResourceManager: getResourceManager
  };

  return producer;
});
/**
The Stage Manager updates the stage according to the script and/or input

@module Client
@class StageManager
*/
define('StageManager',[], function() {
  

  var StageManager = function() {

  };

  StageManager.prototype.updateStage = function() {

    // The input from the user can control only one actor and/or the current camera
    // i.e. actor.update(), camera.update()
    // the rest comes from the film

  };

  return StageManager;
});
/**
The camera combines the scene camera (viewport) with an operator and a film.

@module Client
@class Camera
*/
define('Camera',[], function() {
  

  var nullOperator = {
    getCameraStateData: function(lastState) {
      return lastState;
    }
  };

  var Camera = function(sceneCamera) {
    this.sceneCamera = sceneCamera;
    this.operator = nullOperator;

    /**
      @private
      @property lastState buffer object to avoid creating new ones each frame
    */
    this.lastState = null;

    //camera.setPosition([0, 0, -2000.0]);

  };

  Camera.getNullOperator = function() {
    return Object.create(nullOperator);
  };

  Camera.prototype.setOperator = function(operator) {
    this.operator = operator || nullOperator;
  };

  Camera.prototype.updateFrame = function() {

    // onPlayback:
    //   getRotation(), getPosition()
    // onRecord/Rehearse:
    //   rotation = Operator.update(currentRotation, recordedRotation)
    //
    // recordedState = film.getCameraStateData();
    // currentState = camera.getStateData();
    // newState = operator.getCameraStateData({}, currentState, recordedState)
    // camera.setStateData(newState);

    var sceneCamera = this.sceneCamera;
    var lastState = sceneCamera.getStateData(this.lastState);
    var newState = this.operator.getCameraStateData(lastState);

    sceneCamera.setStateData(newState);
    this.lastState = lastState;
  };

  return Camera;
});
/**
A command channel provides commands based on inputs

@module Client
@class CommandChannel
*/
define('controls/CommandChannel',[], function() {
  

  var CommandChannel = function(owner, id, type, actions) {
    this.owner = owner;
    this.id = id;
    this.type = type;
    this.actions = actions;

    this.resetCommands();
  };

  CommandChannel.prototype.resetCommands = function() {
    var that = this;

    this.commands = {};
    this.actions.forEach(function(actionName) {
      that.commands[actionName] = 0.0;
    });
  };

  CommandChannel.prototype.close = function() {
    this.owner.removeCommandChannel(this.id);
  };

  CommandChannel.prototype.hasAction = function(actionName) {
    return this.actions.indexOf(actionName) >= 0;
  };

  CommandChannel.prototype.setCommandIntensity = function(actionName, intensity) {
    this.commands[actionName] = intensity;
  };

  CommandChannel.prototype.getCommands = function() {
    return this.commands;
  };

  return CommandChannel;
});
/**
An input channel delivers inputs from a source

@module Client
@class InputChannel
*/
define('controls/InputChannel',[], function() {
  

  var InputChannel = function(owner, id, type) {
    this.owner = owner;
    this.id = id;
    this.type = type;
  };

  InputChannel.prototype.close = function() {
    this.owner.removeInputChannel(this.id);
  };

  InputChannel.prototype.setIntensity = function(inputName, intensity) {
    this.owner.setInputIntensity(this.type, inputName, intensity);
  };

  return InputChannel;
});
/**
A director issues directions

@module Client
@class Director
*/
define('Director',["controls/CommandChannel", "controls/InputChannel"], function(CommandChannel, InputChannel) {
  

  var Director = function() {
    this.bindings = {};
    this.commandChannels = {};
    this.inputChannels = {};
    this.idCounter = 0;
  };

  Director.prototype.getNextId = function() {
    return "" + this.idCounter++;
  };

  Director.prototype.getInputChannel = function(type) {
    var id = this.getNextId();
    var inputChannel = new InputChannel(this, id, type);

    this.inputChannels[id] = inputChannel;

    return inputChannel;
  };

  Director.prototype.removeInputChannel = function(id) {
    delete this.inputChannels[id];
  };

  Director.prototype.getCommandChannel = function(type, actions) {
    var id = this.getNextId();
    var commandChannel = new CommandChannel(this, id, type, actions);

    this.commandChannels[id] = commandChannel;

    return commandChannel;
  };

  Director.prototype.removeCommandChannel = function(id) {
    delete this.commandChannels[id];
  };

  Director.prototype.getBindings = function() {
    return this.bindings;
  };


  Director.prototype.addBinding = function(actionId, inputId) {
    this.bindings[actionId.actionName] = [inputId];
  };

  Director.prototype.setInputIntensity = function(inputType, inputName, intensity) {
    var that = this;
    var checkBindings = function(actionName) {
      var bindingList = that.bindings[actionName];

      if (bindingList) {
        bindingList.forEach(function(boundInputId) {
          if (inputName === boundInputId.inputName) {
            that.setActionIntensity(actionName, intensity);
          }
        });
      }
    };

    for (var actionName in this.bindings) {
      checkBindings(actionName);
    }
  };

  Director.prototype.setActionIntensity = function(actionName, intensity) {
    var id;
    var channel;

    for (id in this.commandChannels) {
      channel = this.commandChannels[id];
      if (channel.hasAction(actionName)) {
        channel.setCommandIntensity(actionName, intensity);
      }
    }
  };

  return Director;
});
/**
A camera operator handles a camera when directed to

@module Client
@class Director
*/
define('CameraOperator',[], function() {
  

  var actionNames = ["pitchUpDown", "rollClockwise", "yawRightLeft", "moveUpDown", "moveForwardBackward", "moveRightLeft"];

  var CameraOperator = function(commandChannel) {
    this.commandChannel = commandChannel;
  };

  CameraOperator.getActionNames = function() {
    return actionNames.slice(0);
  };

  CameraOperator.prototype.getCameraStateData = function(lastState) {
    var newState = lastState;
    var commands = this.commandChannel.getCommands();

    newState.rotation[0] += commands.rollClockwise;
    newState.rotation[1] += commands.pitchUpDown;
    newState.rotation[2] += commands.yawRightLeft;

    return newState;
  };

  return CameraOperator;
});
/**

@module Client
@class Resource
*/
define('Resources',["StageManager", "Camera", "Director", "CameraOperator"], function(StageManager, Camera, Director, CameraOperator) {
  

  var resources = {
    StageManager: StageManager,
    Director: Director,
    Camera: Camera,
    CameraOperator: CameraOperator
  };

  return resources;
});
/**
The gamepad API provides a wrapper around the used gamepad interface

@module Client
@class GamepadApi
*/
define('controls/Gamepad',["lib/gamepad"], function(GamepadLib) {
  

  var Gamepad = function(runtimeId) {
    this.listeners = [];
  };

  Gamepad.prototype.getRuntimeId = function() {
    return this.runtimeId;
  };

  Gamepad.prototype.addListener = function(listener) {
    this.listeners.push(listener);
  };

  Gamepad.prototype.onDeviceDisconnected = function() {
    this.listeners.forEach(function(listener) {
      listener.onGamepadDisconnected();
    });
  };

  Gamepad.prototype.onControlValueChanged = function(controlName, value) {
    this.listeners.forEach(function(listener) {
      listener.onControlValueChanged(controlName, value);
    });
  };

  return Gamepad;
});
/**
The gamepad API provides a wrapper around the used gamepad interface

@module Client
@class GamepadApi
*/
define('controls/GamepadApi',["lib/gamepad", "controls/Gamepad"], function(GamepadLib, Gamepad) {
  

  var GamepadApi = function() {
    this.lib = new GamepadLib();
    this.gamepads = {};
    this.idCounter = 0;
    this.connectionListeners = [];
  };

  GamepadApi.prototype.init = function() {
    var that = this;

    this.lib.bind(GamepadLib.Event.CONNECTED, function(device) {
      that.onDeviceConnected(device);
    });
    this.lib.bind(GamepadLib.Event.DISCONNECTED, function(device) {
      that.onDeviceDisonnected(device);
    });
    this.lib.bind(GamepadLib.Event.BUTTON_DOWN, function(param) {
      that.onControlValueChanged(param.gamepad.index, param.control, 1.0);
    });
    this.lib.bind(GamepadLib.Event.BUTTON_UP, function(param) {
      that.onControlValueChanged(param.gamepad.index, param.control, 0.0);
    });
    this.lib.bind(GamepadLib.Event.AXIS_CHANGED, function(param) {
      that.onControlValueChanged(param.gamepad.index, param.axis, param.value);
    });

    return this.lib.init();
  };

  GamepadApi.prototype.getGamepads = function() {
    var result = [];
    var index;

    for (index in this.gamepads) {
      result.push(this.gamepads[index]);
    }

    return result;
  };

  GamepadApi.prototype.addGamepadListener = function(listener) {
    this.connectionListeners.push(listener);
  };

  GamepadApi.prototype.onDeviceConnected = function(device) {
    var gamepad = new Gamepad(this.idCounter++);

    this.gamepads[device.index] = gamepad;
    this.connectionListeners.forEach(function(listener) {
      listener.onGamepadConnected(gamepad);
    });
  };

  GamepadApi.prototype.onDeviceDisonnected = function(device) {
    var gamepad = this.gamepads[device.index];

    if (gamepad) {
      delete this.gamepads[device.index];
      gamepad.onDeviceDisconnected();
      this.connectionListeners.forEach(function(listener) {
        listener.onGamepadDisconnected(gamepad);
      });
    }
  };

  GamepadApi.prototype.onControlValueChanged = function(deviceKey, controlName, value) {
    var gamepad = this.gamepads[deviceKey];

    if (gamepad) {
      gamepad.onControlValueChanged(controlName, value);
    }
  };

  return GamepadApi;
});
/*jshint maxparams:100 */

/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define('ClientApp',["module", "angular", "TestController", "3d/SceneProducer", "Resources", "controls/GamepadApi"], function(module, angular, testController, sceneProducer, Resources, GamepadApi) {
  

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
    var camCommands = director.getCommandChannel("camera", Resources.CameraOperator.getActionNames());
    var cameraOperator = new Resources.CameraOperator(camCommands);
    var gamepadInput = director.getInputChannel("gamepad");

    camera.setOperator(cameraOperator);

    director.addBinding({
      actionName: "yawRightLeft"
    }, {
      inputName: "RIGHT_STICK_X"
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

    //var director = new Resources.Director();

    scene.setPreRenderCallback(function() {
      // TODO: move this to some general time keeper

      // stageManager.updateStage() // perform blocking... by stage manager?
      camera.updateFrame();
      // recordHead.saveStage() // could also be called continuity; done by camera?

    });

    return [appModule.name];
  };

  return main;
});