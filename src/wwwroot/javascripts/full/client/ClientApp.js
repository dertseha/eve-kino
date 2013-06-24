
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
The set provides access to all necessary set properties

@module Client
@class Set
*/
define('production/ccp/Set',[], function() {
  

  var Set = function(ccpwgl, scene, stage, sceneCamera, lightBoard) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
    this.stage = stage;
    this.sceneCamera = sceneCamera;
    this.lightBoard = lightBoard;
  };

  /**
    This method registers a callback that is called before a new picture is
    rendered.
    @method setPreRenderCallback
    @param callback {function() void} the function to call for each new picture
  */
  Set.prototype.setPreRenderCallback = function(callback) {
    this.ccpwgl.onPreRender = callback;
  };

  Set.prototype.getStage = function() {
    return this.stage;
  };

  Set.prototype.getSceneCamera = function() {
    return this.sceneCamera;
  };

  return Set;
});
/**
The Stage holds all the set pieces and actors

@module Client
@class Stage
*/
define('production/ccp/Stage',["lib/q"], function(q) {
  

  var Stage = function(ccpwgl, scene) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
  };

  Stage.prototype.enter = function(archetype) {
    var deferred = q.defer();

    archetype.request(this.ccpwgl, this.scene, deferred);

    return deferred.promise;
  };

  return Stage;
});
/**
The helper is a static object providing some helper constants and functions.

@module Client
@class Helper
*/
define('util/GlHelper',["lib/gl-matrix"], function(glMatrix) {
  

  var oneDegreeInRad = Math.PI / 180.0;
  var viewDirections = {
    forward: 1.0,
    upward: -1.0,
    rightward: -1.0
  };
  var viewRotations = {
    rollClockwise: 1.0,
    pitchUp: -1.0,
    yawRight: -1.0
  };
  var modelDirections = {
    forward: 1.0,
    upward: 1.0,
    rightward: -1.0
  };
  var modelRotations = {
    rollClockwise: 1.0,
    pitchUp: 1.0,
    yawRight: -1.0
  };

  var tempQuat = glMatrix.quat4.create();

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

    MODEL_ROTATION_ROLL_CLOCKWISE: modelRotations.rollClockwise,
    MODEL_ROTATION_PITCH_UP: modelRotations.pitchUp,
    MODEL_ROTATION_YAW_RIGHT: modelRotations.yawRight,

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
define('production/ccp/SceneCamera',["lib/gl-matrix", "util/GlHelper"], function(glMatrix, helper) {
  

  var SceneCamera = function() {
    this.fov = 60;
    this.nearPlane = 1;
    this.farPlane = 100000;

    this.rotation = glMatrix.quat4.identity();
    this.modelRotation = glMatrix.quat4.identity();
    this.position = glMatrix.vec3.create();
    this.viewOffset = glMatrix.vec3.create();

    this.projection = glMatrix.mat4.create();
    this.view = glMatrix.mat4.create();

    this.updateView = this.calculateView;
  };

  SceneCamera.prototype.nullFunction = function() {

  };

  SceneCamera.prototype.calculateView = function() {
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
    result.rotation = this.getRotation(result.rotation);
    result.modelRotation = this.getModelRotation(result.modelRotation);

    return result;
  };

  SceneCamera.prototype.setStateData = function(data) {
    glMatrix.vec3.set(data.position, this.position);
    glMatrix.quat4.set(data.rotation, this.rotation);
    glMatrix.quat4.set(data.modelRotation, this.modelRotation);
    this.onViewChanged();
  };

  SceneCamera.prototype.getPosition = function(dest) {
    return glMatrix.vec3.set(this.position, dest || [0, 0, 0]);
  };

  SceneCamera.prototype.setPosition = function(position) {
    glMatrix.vec3.set(position, this.position);
    this.onViewChanged();
  };

  SceneCamera.prototype.getRotation = function(dest) {
    return glMatrix.quat4.set(this.rotation, dest || [0, 0, 0, 0]);
  };

  SceneCamera.prototype.setRotation = function(rotation) {
    glMatrix.quat4.set(rotation, this.rotation);
    this.onViewChanged();
  };

  SceneCamera.prototype.getModelRotation = function(dest) {
    return glMatrix.quat4.set(this.modelRotation, dest || [0, 0, 0, 0]);
  };

  SceneCamera.prototype.setModelRotation = function(rotation) {
    glMatrix.quat4.set(rotation, this.modelRotation);
  };

  return SceneCamera;
});
/**
The light board provides access to lighting controls

@module Client
@class LightBoard
*/
define('production/ccp/LightBoard',[], function() {
  

  var LightBoard = function(ccpwgl, scene) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
  };

  return LightBoard;
});
/*jshint maxparams:100 */

/**
The production manager is responsible for creating a set with all necessary
deparments. 

@module Client
@class ProductionManager
*/
define('production/ccp/ProductionManager',["lib/q", "production/ccp/Set", "production/ccp/Stage", "production/ccp/SceneCamera", "production/ccp/LightBoard"], function(q, Set, Stage, SceneCamera, LightBoard) {
  

  var sceneOptions = {

  };

  var onSceneCreated = function(ccpwgl, scene) {
    var stage = new Stage(ccpwgl, scene);
    var sceneCamera = new SceneCamera();
    var lightBoard = new LightBoard(ccpwgl, scene);

    ccpwgl.setCamera(sceneCamera);

    return new Set(ccpwgl, scene, stage, sceneCamera, lightBoard);
  };

  var createSceneDeferred = function(ccpwgl, canvas, strategy) {
    var deferred = q.defer();
    var resolveCallback = function(scene) {
      var set = onSceneCreated(ccpwgl, scene);

      deferred.resolve(set);
    };

    try {
      ccpwgl.initialize(canvas, sceneOptions);

      strategy(resolveCallback);
    } catch (ex) {
      deferred.reject(ex);
    }

    return deferred.promise;
  };

  var ProductionManager = function(ccpwgl) {
    this.ccpwgl = ccpwgl;
  };

  /**
    See ccpwgl.setResourcePath()

    @method setResourcePath
    @param {string} namespace Resource namespace.
    @param {string} url URL to resource root. Needs to have a trailing slash.
  */
  ProductionManager.prototype.setResourcePath = function(namespace, url) {
    this.ccpwgl.setResourcePath(namespace, url);
  };

  ProductionManager.prototype.createSet = function(canvas, backgroundUrl) {
    var ccpwgl = this.ccpwgl;

    return createSceneDeferred(ccpwgl, canvas, function(callback) {
      var onLoad = function() {
        callback(this);
      };

      ccpwgl.loadScene(backgroundUrl, onLoad);
    });
  };

  ProductionManager.prototype.createChromaKeyedSet = function(canvas, backgroundColor) {
    var ccpwgl = this.ccpwgl;

    return createSceneDeferred(ccpwgl, canvas, function(callback) {
      var scene = ccpwgl.createScene(backgroundColor);

      callback(scene);
    });
  };

  return ProductionManager;
});
/* global console */
/**
An animator is responsible for updating the state of a prop

@module Client
@class Animator
*/
define('production/Animator',["lib/gl-matrix", "util/GlHelper"], function(glMatrix, helper) {
  

  var tempQuat = glMatrix.quat4.create();
  var tempVec3 = glMatrix.vec3.create();

  var rotateModelOrientation = function(dest, roll, pitch, yaw) {
    glMatrix.quat4.fromAngleAxis(roll * helper.MODEL_ROTATION_ROLL_CLOCKWISE, helper.MODEL_VECTOR_FORWARD, tempQuat);
    glMatrix.quat4.multiply(dest, tempQuat, dest);
    glMatrix.quat4.fromAngleAxis(pitch * helper.MODEL_ROTATION_PITCH_UP, helper.MODEL_VECTOR_RIGHT, tempQuat);
    glMatrix.quat4.multiply(dest, tempQuat, dest);
    glMatrix.quat4.fromAngleAxis(yaw * helper.MODEL_ROTATION_YAW_RIGHT, helper.MODEL_VECTOR_UP, tempQuat);
    glMatrix.quat4.multiply(dest, tempQuat, dest);
  };

  var Animator = function(prop) {
    this.prop = prop;
    this.lastState = null;
  };

  Animator.prototype.update = function() {
    var lastState = this.prop.getStateData(this.lastState);
    var newState = lastState;
    var roll = 0.00;
    var pitch = 0.00;
    var yaw = 0.00;
    var right = 0.0;
    var up = 0.0;
    var forward = 0.0;

    rotateModelOrientation(newState.rotation, roll, pitch, yaw);

    tempVec3[0] = right * helper.MODEL_DIRECTION_RIGHT;
    tempVec3[1] = up * helper.MODEL_DIRECTION_UP;
    tempVec3[2] = forward * helper.MODEL_DIRECTION_FORWARD;
    glMatrix.quat4.multiplyVec3(newState.rotation, tempVec3);
    newState.position[0] += tempVec3[0];
    newState.position[1] += tempVec3[1];
    newState.position[2] += tempVec3[2];

    this.prop.setStateData(newState);
    this.lastState = lastState;
  };

  return Animator;
});
/**
The Stage Manager updates the stage according to the script and/or input

@module Client
@class StageManager
*/
define('production/StageManager',["production/Animator"], function(Animator) {
  

  var StageManager = function(stage) {
    this.stage = stage;

    this.animators = [];
  };

  StageManager.prototype.updateStage = function() {
    this.animators.forEach(function(animator) {
      animator.update();
    });
  };

  StageManager.prototype.getAnimator = function(prop) {
    var animator = new Animator(prop);

    this.animators.push(animator);

    return animator;
  };

  return StageManager;
});
/**
The camera combines the scene camera (viewport) with an operator and a film.

@module Client
@class Camera
*/
define('production/Camera',[], function() {
  

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
define('production/Director',["controls/CommandChannel", "controls/InputChannel"], function(CommandChannel, InputChannel) {
  

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
define('production/CameraOperator',["lib/gl-matrix", "util/GlHelper"], function(glMatrix, helper) {
  

  var actionNames = [
      "pitchUp", "pitchDown", "rollClockwise", "rollCounter", "yawRight", "yawLeft",
      "moveUp", "moveDown", "moveForward", "moveBackward", "moveRight", "moveLeft"
  ];
  var tempQuat = glMatrix.quat4.create();
  var tempVec3 = glMatrix.vec3.create();

  var rotateViewOrientation = function(dest, roll, pitch, yaw) {
    glMatrix.quat4.fromAngleAxis(roll * helper.VIEW_ROTATION_ROLL_CLOCKWISE, helper.VIEW_VECTOR_FORWARD, tempQuat);
    glMatrix.quat4.multiply(tempQuat, dest, dest);
    glMatrix.quat4.fromAngleAxis(pitch * helper.VIEW_ROTATION_PITCH_UP, helper.VIEW_VECTOR_RIGHT, tempQuat);
    glMatrix.quat4.multiply(tempQuat, dest, dest);
    glMatrix.quat4.fromAngleAxis(yaw * helper.VIEW_ROTATION_YAW_RIGHT, helper.VIEW_VECTOR_UP, tempQuat);
    glMatrix.quat4.multiply(tempQuat, dest, dest);
  };

  var rotateModelOrientation = function(dest, roll, pitch, yaw) {
    // After determining the model rotations, I have no idea what logic happens here. It just works.
    glMatrix.quat4.fromAngleAxis(roll * -1, helper.VIEW_VECTOR_FORWARD, tempQuat);
    glMatrix.quat4.multiply(dest, tempQuat, dest);
    glMatrix.quat4.fromAngleAxis(pitch, helper.VIEW_VECTOR_RIGHT, tempQuat);
    glMatrix.quat4.multiply(dest, tempQuat, dest);
    glMatrix.quat4.fromAngleAxis(yaw, helper.VIEW_VECTOR_UP, tempQuat);
    glMatrix.quat4.multiply(dest, tempQuat, dest);
  };

  var CameraOperator = function(commandChannel) {
    this.commandChannel = commandChannel;
  };

  CameraOperator.getActionNames = function() {
    return actionNames.slice(0);
  };

  CameraOperator.prototype.getCameraStateData = function(lastState) {
    var newState = lastState;
    var commands = this.commandChannel.getCommands();
    var roll = (commands.rollClockwise - commands.rollCounter) * 0.02;
    var pitch = (commands.pitchUp - commands.pitchDown) * 0.02;
    var yaw = (commands.yawRight - commands.yawLeft) * 0.02;
    var up = (commands.moveUp - commands.moveDown);
    var right = (commands.moveRight - commands.moveLeft);
    var forward = (commands.moveForward - commands.moveBackward);

    rotateViewOrientation(newState.rotation, roll, pitch, yaw);
    rotateModelOrientation(newState.modelRotation, roll, pitch, yaw);

    tempVec3[0] = right * helper.VIEW_DIRECTION_RIGHT;
    tempVec3[1] = up * helper.VIEW_DIRECTION_UP;
    tempVec3[2] = forward * helper.VIEW_DIRECTION_FORWARD;
    glMatrix.quat4.multiplyVec3(newState.modelRotation, tempVec3);
    newState.position[0] += tempVec3[0];
    newState.position[1] += tempVec3[1];
    newState.position[2] += tempVec3[2];

    return newState;
  };

  return CameraOperator;
});
/**

@module Client
@class Resource
*/
define('production/Resources',["production/StageManager", "production/Camera", "production/Director", "production/CameraOperator"], function(StageManager, Camera, Director, CameraOperator) {
  

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
      that.onAxisValueChanged(param.gamepad.index, param.axis, param.value);
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

  GamepadApi.prototype.onAxisValueChanged = function(deviceKey, rawAxisName, value) {
    var gamepad = this.gamepads[deviceKey];

    if (gamepad) {
      if (value < 0) {
        gamepad.onControlValueChanged(rawAxisName + "_POS", 0.0);
        gamepad.onControlValueChanged(rawAxisName + "_NEG", -value);
      } else {
        gamepad.onControlValueChanged(rawAxisName + "_NEG", 0.0);
        gamepad.onControlValueChanged(rawAxisName + "_POS", value);
      }
    }
  };

  return GamepadApi;
});
/**
The ship wrapper

@module Client
@class Ship
*/
define('production/ccp/res/Ship',["lib/gl-matrix"], function(glMatrix) {
  

  var Ship = function(ccpwgl, obj) {
    this.ccpwgl = ccpwgl;
    this.obj = obj;

    this.position = glMatrix.vec3.create();
    this.rotation = glMatrix.quat4.identity();
    this.transform = glMatrix.mat4.identity();
  };

  Ship.prototype.getStateData = function(dest) {
    var result = dest || {};

    result.position = glMatrix.vec3.set(this.position, result.position || [0, 0, 0]);
    result.rotation = glMatrix.quat4.set(this.rotation, result.rotation || [0, 0, 0, 1]);

    return result;
  };

  Ship.prototype.setStateData = function(data) {
    glMatrix.vec3.set(data.position, this.position);
    glMatrix.quat4.set(data.rotation, this.rotation);

    glMatrix.mat4.fromRotationTranslation(this.rotation, this.position, this.transform);
    this.obj.setTransform(this.transform);
  };

  return Ship;
});
/**
An archetype for ships

@module Client
@class ShipArchetype
*/
define('production/ccp/res/ShipArchetype',["production/ccp/res/Ship"], function(Ship) {
  

  var ShipArchetype = function() {
    this.resourceUrl = "";
  };

  ShipArchetype.prototype.request = function(ccpwgl, scene, deferred) {
    return scene.loadShip(this.resourceUrl, function() {
      deferred.resolve(new Ship(ccpwgl, this));
    });
  };

  ShipArchetype.prototype.setResourceUrl = function(value) {
    this.resourceUrl = value;

    return this;
  };

  return ShipArchetype;
});
/**
The planet wrapper

@module Client
@class Planet
*/
define('production/ccp/res/Planet',[], function() {
  

  var Planet = function(ccpwgl, obj) {
    this.ccpwgl = ccpwgl;
    this.obj = obj;
  };

  return Planet;
});
/**
An archetype for planets

@module Client
@class PlanetArchetype
*/
define('production/ccp/res/PlanetArchetype',["production/ccp/res/Planet"], function(Planet) {
  

  var PlanetArchetype = function() {
    this.resourceUrl = "";
    this.itemId = 0;
    this.atmosphereUrl = null;
    this.heightMap1Url = null;
    this.heightMap2Url = null;
  };

  PlanetArchetype.prototype.request = function(ccpwgl, scene, deferred) {
    var obj = scene.loadPlanet(this.itemId, this.resourceUrl, this.atmosphereUrl, this.heightMap1Url, this.heightMap2Url);

    deferred.resolve(new Planet(ccpwgl, scene, obj));
  };

  PlanetArchetype.prototype.setItemId = function(value) {
    this.itemId = value;

    return this;
  };

  PlanetArchetype.prototype.setResourceUrl = function(value) {
    this.resourceUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setAtomsphereUrl = function(value) {
    this.atmosphereUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setHeightMap1Url = function(value) {
    this.heightMap1Url = value;

    return this;
  };

  PlanetArchetype.prototype.setHeightMap2Url = function(value) {
    this.heightMap2Url = value;

    return this;
  };

  return PlanetArchetype;
});
/*jshint maxparams:100 */
/* global console */

/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define('ClientApp',["module", "angular", "lib/ccpwgl", "TestController", "production/ccp/ProductionManager", "production/Resources", "controls/GamepadApi",
    "production/ccp/res/ShipArchetype", "production/ccp/res/PlanetArchetype"
],

function(module, angular, ccpwgl, testController, ProductionManager, Resources, GamepadApi, ShipArchetype, PlanetArchetype) {
  

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

    var camera = new Resources.Camera(set.getSceneCamera());
    var director = new Resources.Director();
    var camCommands = director.getCommandChannel("camera", Resources.CameraOperator.getActionNames());
    var cameraOperator = new Resources.CameraOperator(camCommands);
    var gamepadInput = director.getInputChannel("gamepad");

    camera.setOperator(cameraOperator);

    var stageManager = new Resources.StageManager(set.getStage());
    var shipArch = new ShipArchetype();

    shipArch.setResourceUrl("res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red");

    var shipPromise = set.getStage().enter(shipArch);

    shipPromise.then(function(ship) {
      var animator = stageManager.getAnimator(ship);
    });
    //ship.loadBoosters("res:/dx9/model/ship/booster/booster_amarr.red");


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

      stageManager.updateStage();
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
    //var promise = productionManager.createChromaKeyedSet(mainScreen, [0.0, 1.0, 0.0, 1.0]);

    promise.then(onSetCreated, function(err) {
      console.log("Init error: " + err);
    });


    return [appModule.name];
  };

  return main;
});