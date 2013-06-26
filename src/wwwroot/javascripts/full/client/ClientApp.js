
/**
Containing defaults

@module Client
@class Defaults
*/
define('Defaults',[], function() {
  

  var defaults = {
    inputsByAction: {}
  };

  var addActionInput = function(actionName, inputName) {
    defaults.inputsByAction[actionName] = inputName;
  };

  addActionInput("yawLeft", "RIGHT_STICK_X_NEG");
  addActionInput("yawRight", "RIGHT_STICK_X_POS");
  addActionInput("pitchUp", "RIGHT_STICK_Y_POS");
  addActionInput("pitchDown", "RIGHT_STICK_Y_NEG");
  addActionInput("rollClockwise", "LEFT_STICK_X_POS");
  addActionInput("rollCounter", "LEFT_STICK_X_NEG");
  addActionInput("moveForward", "RB");
  addActionInput("moveBackward", "LB");
  addActionInput("moveLeft", "X");
  addActionInput("moveRight", "B");
  addActionInput("moveUp", "Y");
  addActionInput("moveDown", "A");

  return defaults;
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
    },

    rotateVectorByView: function(dest, rotation, right, up, forward) {
      dest[0] = right * viewDirections.rightward;
      dest[1] = up * viewDirections.upward;
      dest[2] = forward * viewDirections.forward;

      return glMatrix.quat4.multiplyVec3(rotation, dest);
    }
  };

  return helper;
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

  var Animator = function(prop, script) {
    this.prop = prop;
    this.script = script;

    this.commandChannel = null;
    this.lastState = null;
  };

  Animator.prototype.getScript = function() {
    return this.script;
  };

  Animator.prototype.setCommandChannel = function(commandChannel) {
    this.commandChannel = commandChannel;
  };

  Animator.prototype.update = function() {
    var lastState = this.prop.getStateData(this.lastState);
    var newState = this.prop.getStateData();
    var recordedState = this.script.getFrameData() || newState;

    if (this.commandChannel) {
      newState = this.updateByCommands(newState, lastState, recordedState);
    } else {
      newState = recordedState;
    }

    this.prop.setStateData(newState);
    this.script.setFrameData(newState);
    this.lastState = lastState;
  };

  Animator.prototype.updateByCommands = function(newState, lastState, recordedState) {
    var commands = this.commandChannel.getCommands();
    var roll = (commands.rollClockwise - commands.rollCounter) * 0.02;
    var pitch = (commands.pitchUp - commands.pitchDown) * 0.02;
    var yaw = (commands.yawRight - commands.yawLeft) * 0.02;
    var up = (commands.moveUp - commands.moveDown);
    var right = (commands.moveRight - commands.moveLeft);
    var forward = (commands.moveForward - commands.moveBackward);

    rotateModelOrientation(newState.rotation, roll, pitch, yaw);

    tempVec3[0] = right * helper.MODEL_DIRECTION_RIGHT;
    tempVec3[1] = up * helper.MODEL_DIRECTION_UP;
    tempVec3[2] = forward * helper.MODEL_DIRECTION_FORWARD;
    glMatrix.quat4.multiplyVec3(newState.rotation, tempVec3);
    newState.position[0] += tempVec3[0];
    newState.position[1] += tempVec3[1];
    newState.position[2] += tempVec3[2];

    return newState;
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

  StageManager.prototype.getAnimator = function(prop, script) {
    var animator = new Animator(prop, script);

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
  };

  Camera.getNullOperator = function() {
    return Object.create(nullOperator);
  };

  Camera.prototype.setOperator = function(operator) {
    this.operator = operator || nullOperator;
  };

  Camera.prototype.updateFrame = function() {
    var sceneCamera = this.sceneCamera;
    var lastState = sceneCamera.getStateData(this.lastState);
    var newState = this.operator.getCameraStateData(sceneCamera.getStateData(), lastState);

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

  var CameraOperator = function(commandChannel, shotList) {
    this.commandChannel = commandChannel;
    this.shotList = shotList;
    this.manualMode = true;
  };

  CameraOperator.getActionNames = function() {
    return actionNames.slice(0);
  };

  CameraOperator.prototype.setManualMode = function(on) {
    this.manualMode = on;
  };

  CameraOperator.prototype.getCameraStateData = function(newState, lastState) {
    var recordedState = this.shotList.getFrameData() || newState;

    if (this.manualMode) {
      newState = this.getNewStateData(newState, lastState, recordedState);
    } else {
      newState = recordedState;
    }

    this.shotList.setFrameData(newState);

    return newState;
  };

  CameraOperator.prototype.getNewStateData = function(newState, lastState, recordedState) {
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

  Ship.prototype.getBoundingSphereRadius = function() {
    return this.obj.getBoundingSphere()[1];
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
define('production/ccp/res/Planet',["lib/gl-matrix"], function(glMatrix) {
  

  var Planet = function(obj) {
    this.obj = obj;

    this.position = glMatrix.vec3.create();
    this.rotation = glMatrix.quat4.identity();
    this.radius = 1;
    this.transform = glMatrix.mat4.identity();
  };

  Planet.prototype.getBoundingSphereRadius = function() {
    return this.radius;
  };

  Planet.prototype.getStateData = function(dest) {
    var result = dest || {};

    result.position = glMatrix.vec3.set(this.position, result.position || [0, 0, 0]);
    result.rotation = glMatrix.quat4.set(this.rotation, result.rotation || [0, 0, 0, 1]);
    result.radius = this.radius;

    return result;
  };

  Planet.prototype.setStateData = function(data) {
    glMatrix.vec3.set(data.position, this.position);
    glMatrix.quat4.set(data.rotation, this.rotation);
    this.radius = data.radius;

    glMatrix.mat4.fromRotationTranslation(this.rotation, [0, 0, 0], this.transform);
    glMatrix.mat4.scale(this.transform, [this.radius / 2, this.radius / 2, this.radius / 2]);
    this.transform[12] = this.position[0];
    this.transform[13] = this.position[1];
    this.transform[14] = this.position[2];

    this.obj.setTransform(this.transform);
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

    deferred.resolve(new Planet(obj));
  };

  PlanetArchetype.prototype.setItemId = function(value) {
    this.itemId = value;

    return this;
  };

  PlanetArchetype.prototype.setResourceUrl = function(value) {
    this.resourceUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setAtmosphereUrl = function(value) {
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
/**
A track stores data for one thing in a recording

@module Client
@class Track
*/
define('production/Track',[], function() {
  

  var Track = function(data) {
    this.data = data;
    this.currentFrame = 0;
  };

  Track.prototype.getLength = function() {
    return this.data.length;
  };

  Track.prototype.setCurrentFrame = function(index) {
    this.currentFrame = index;
  };

  Track.prototype.getFrameData = function() {
    var data = null;
    var dataLength = this.data.length;

    if (dataLength > 0) {
      data = (dataLength > this.currentFrame) ? this.data[this.currentFrame] : this.data[dataLength - 1];
    }

    return data;
  };

  Track.prototype.setRecording = function(state) {
    this.recording = state;
  };

  Track.prototype.setFrameData = function(data) {
    var dataLength = this.data.length;

    if (this.recording) {
      if (dataLength < this.currentFrame) {
        if (dataLength > 0) {
          this.pushFrameUntilCurrentIndex(this.data[dataLength - 1]);
        } else {
          this.pushFrameUntilCurrentIndex(data);
        }
      }
      this.data[this.currentFrame] = data;
    }
  };

  Track.prototype.pushFrameUntilCurrentIndex = function(data) {
    var dataLength = this.data.length;

    while (dataLength < this.currentFrame) {
      this.data.push(data);
      dataLength++;
    }
  };

  return Track;
});
/**
A reel contains one or more tracks and keeps them in sync

@module Client
@class Reel
*/
define('production/Reel',[], function() {
  

  var Reel = function() {
    this.tracks = [];
    this.currentFrame = 0;
  };

  Reel.prototype.getPosition = function() {
    return this.currentFrame;
  };

  Reel.prototype.getLength = function() {
    var length = 0;

    this.tracks.forEach(function(track) {
      var trackLength = track.getLength();

      if (trackLength > length) {
        length = trackLength;
      }
    });

    return length;
  };

  Reel.prototype.addTrack = function(track) {
    this.tracks.push(track);
    track.setCurrentFrame(this.currentFrame);
  };

  Reel.prototype.skipTo = function(frame) {
    this.currentFrame = frame;
    this.tracks.forEach(function(track) {
      track.setCurrentFrame(frame);
    });
  };

  Reel.prototype.nextFrame = function() {
    this.skipTo(this.currentFrame + 1);
  };

  return Reel;
});
/* jshint maxparams:10 */
/* global console */
/**
The ApplicationController is the master controller for the app

@module Client
@class ApplicationController
*/
define('ApplicationController',["Defaults", "production/Resources", "controls/GamepadApi", "production/ccp/res/ShipArchetype", "production/ccp/res/PlanetArchetype", "production/Track", "production/Reel"],

function(defaults, Resources, GamepadApi, ShipArchetype, PlanetArchetype, Track, Reel) {
  

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
      modelView.status = "Set created";
      modelView.$apply();
    }, function(err) {
      console.log("Init error: " + err);
      modelView.status = err;
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
/**
The sync source provides a callback mechanism for black-burst synchronization.

@module Client
@class SyncSource
*/
define('production/ccp/SyncSource',[], function() {
  

  var clockRate = 60; // as per requestAnimFrame

  var SyncSource = function(ccpwgl, scene) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
  };

  /**
    This method registers a callback that is called for each picture.
    @method setCallback
    @param callback {function() void} the function to call for each new picture
  */
  SyncSource.prototype.setCallback = function(callback) {
    // With current ccpwgl implementation, there is no callback happening
    // before rendering AND retrieving the view matrix from the camera.
    // Note: independent of the Update() calls.

    this.ccpwgl.onPostRender = callback;
  };

  SyncSource.prototype.getRate = function() {
    return clockRate;
  };

  return SyncSource;
});
/**
The set provides access to all necessary set properties

@module Client
@class Set
*/
define('production/ccp/Set',[], function() {
  

  var Set = function(components) {
    this.ccpwgl = components.ccpwgl;
    this.scene = components.scene;
    this.syncSource = components.syncSource;
    this.stage = components.stage;
    this.sceneCamera = components.sceneCamera;
    this.lightBoard = components.lightBoard;
  };

  Set.prototype.getSyncSource = function() {
    return this.syncSource;
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

  /**
    This method rotates coordinates in model space according to the view rotation
    
    @method rotateModelVectorByModelRotation
    @param dest {vec3} destination to be filled
    @param right {Number} the right coordinate (in model space)
    @param up {Number} the up coordinate (in model space)
    @param forward {Number} the forward coordinate (in model space)
    @return {vec3} the result (dest)
  */
  SceneCamera.prototype.rotateModelVectorByModelRotation = function(dest, right, up, forward) {
    // The rotation is still in terms of view directions, so the coordinates need to be converted
    return helper.rotateVectorByView(dest, this.modelRotation,
      right * helper.MODEL_DIRECTION_RIGHT * helper.VIEW_DIRECTION_RIGHT,
      up * helper.MODEL_DIRECTION_UP * helper.VIEW_DIRECTION_UP,
      forward * helper.MODEL_DIRECTION_FORWARD * helper.VIEW_DIRECTION_FORWARD);
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
define('production/ccp/ProductionManager',["lib/q", "production/ccp/SyncSource", "production/ccp/Set", "production/ccp/Stage", "production/ccp/SceneCamera", "production/ccp/LightBoard"],

function(q, SyncSource, Set, Stage, SceneCamera, LightBoard) {
  

  var sceneOptions = {

  };

  var onSceneCreated = function(ccpwgl, scene) {
    var components = {
      ccpwgl: ccpwgl,
      scene: scene,
      syncSource: new SyncSource(ccpwgl, scene),
      stage: new Stage(ccpwgl, scene),
      sceneCamera: new SceneCamera(),
      lightBoard: new LightBoard(ccpwgl, scene)
    };

    ccpwgl.setCamera(components.sceneCamera);

    return new Set(components);
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
/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define('ClientApp',["module", "angular", "lib/ccpwgl", "ApplicationController", "production/ccp/ProductionManager"],

function(module, angular, ccpwgl, appController, ProductionManager) {
  

  var config = module.config();

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);
    var productionManager = new ProductionManager(ccpwgl);

    appModule.controller("ApplicationController", ["$scope", appController.create(config, productionManager, mainScreen)]);

    return [appModule.name];
  };

  return main;
});