
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
  addActionInput("moveForward", "RIGHT_TOP_SHOULDER");
  addActionInput("moveBackward", "LEFT_TOP_SHOULDER");
  addActionInput("moveLeft", "FACE_3");
  addActionInput("moveRight", "FACE_2");
  addActionInput("moveUp", "FACE_4");
  addActionInput("moveDown", "FACE_1");

  return defaults;
});
define('jade',[], function() {
  // This file is needed so that the generated UiTemplates can work.
});
define('ui/UiTemplates',['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["UiTemplates"] = this["UiTemplates"] || {};

this["UiTemplates"]["CreateSessionDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>Create a Session</h3><span>eve-kino v.{{version}}</span></div><div class=\"modal-body\"><tabset><tab heading=\"Background\"><div class=\"btn-group\"><button type=\"button\" ng-model=\"set.type\" btn-radio=\"'space'\" class=\"btn\">Space</button><button type=\"button\" ng-model=\"set.type\" btn-radio=\"'chromaKey'\" class=\"btn\">Chroma Key</button></div><div class=\"row-fluid\"><div ng-show=\"(set.type == 'space')\">Select a background:<div class=\"row-fluid\"><select ng-model=\"set.selectedBackground\" ng-options=\"bg as bg.resourceUrl for bg in backgrounds\" size=\"5\" class=\"span12\"></select></div></div><div ng-show=\"(set.type == 'chromaKey')\">Pick a color (RGB values):<div class=\"row-fluid\"><div class=\"span4\"><input type=\"text\" ng-model=\"set.chromaKey.color\" placeholder=\"#0044BB or #0F0\"/></div><div class=\"span4\"></div><div ng-style=\"{ 'backgroundColor': set.chromaKey.color }\" class=\"span4 container\"></div></div></div></div></tab><tab heading=\"By File\"><div data-file-input=\"file\" on-change=\"readFile(file)\">Choose File</div></tab></tabset></div><div class=\"modal-footer\"><button ng-click=\"create(set.type)\" ng-disabled=\"!canBeCreated()\" class=\"btn btn-primary\">Create</button></div>");;return buf.join("");
};

this["UiTemplates"]["SplashDialog"] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"modal-header\"><h3>{{ title }}</h3></div><div class=\"modal-body\">{{ message }}</div>");;return buf.join("");
};

return this["UiTemplates"];

});
/* global console */
/**
This dialog is a display field that can not be interrupted. It is application
controlled.

@module Client
@class SplashDialog
*/
define('ui/SplashDialog',["ui/UiTemplates"],

function(templates) {
  

  var name = "SplashDialogController";
  var template = templates.SplashDialog();

  var controller = function($scope, dialog, model) {
    $scope.title = model.title;
    $scope.message = model.message;
  };

  var register = function(module) {
    module.controller(name, ["$scope", "dialog", "model", controller]);
  };

  var getBuilder = function(dialogFactory, model) {
    var options = {
      backdrop: true,
      backdropFade: false,
      backdropClick: false,
      keyboard: false,

      controller: name,
      template: template,
      resolve: {
        model: function() {
          return model;
        }
      }
    };

    return dialogFactory.dialog(options);
  };

  var dialog = {
    controller: controller,
    template: template,

    register: register,
    getBuilder: getBuilder
  };

  return dialog;
});
define('version',[], function() { return "0.0.3"; });
/* global console */
/**
This validator handles session data

@module Client
@class SessionValidator
*/
define('util/validators/SessionValidator',["lib/jski"], function(jski) {
  

  var setSpaceBackground = jski.object({
    space: jski.object({
      background: jski.string()
    }).required("background")
  }).required("space");
  var setChromaKeyBackground = jski.object({
    chromaKey: jski.object({
      color: jski.array(jski.number()).minItems(3).maxItems(3).additionalItems(false)
    }).required("color")
  }).required("chromaKey");

  var schema = jski.object({
    ver: jski.number().minimum(0),
    session: jski.object({
      set: jski.anyOf(setSpaceBackground, setChromaKeyBackground)
    })
  }).required("ver", "session");

  var Validator = function() {

  };

  Validator.prototype.isValid = function(object) {
    var errors = schema.validate(object);

    return errors.length === 0;
  };

  return Validator;
});
/* global console */
/**
This dialog is responsible for determining the parameters of a session to be created.

@module Client
@class CreateSessionDialog
*/
define('ui/CreateSessionDialog',["version", "ui/UiTemplates", "util/validators/SessionValidator"],

  function(version, templates, SessionValidator) {
    

    var name = "CreateSessionDialogController";
    var template = templates.CreateSessionDialog();

    var colorStringParser = {
      "^#([0-9A-Fa-f]){6}$": function(value) {
        var r = parseInt(value.substr(1, 2), 16);
        var g = parseInt(value.substr(3, 2), 16);
        var b = parseInt(value.substr(5, 2), 16);

        return [r / 255.0, g / 255.0, b / 255.0];
      },
      "^#([0-9A-Fa-f]){3}$": function(value) {
        var r = parseInt(value.substr(1, 1), 16);
        var g = parseInt(value.substr(2, 1), 16);
        var b = parseInt(value.substr(3, 1), 16);

        return [r / 15.0, g / 15.0, b / 15.0];
      }
    };

    var forEachMatchingColorStringParser = function(colorString, callback) {
      var expression;
      var regExp;

      for (expression in colorStringParser) {
        regExp = new RegExp(expression);
        if (regExp.test(colorString)) {
          callback(colorStringParser[expression]);
        }
      }
    };

    var parseColor = function(colorString) {
      var result = [0, 0, 0];

      forEachMatchingColorStringParser(colorString, function(parser) {
        result = parser(colorString);
      });

      return result;
    };

    var isColorValid = function(colorString) {
      var result = false;

      forEachMatchingColorStringParser(colorString, function() {
        result = true;
      });

      return result;
    };

    var controller = function($scope, dialog, model, fileReader) {
      var findBackgroundByUrl = function(url) {
        var result = null;

        model.backgrounds.forEach(function(background) {
          if (background.resourceUrl === url) {
            result = background;
          }
        });

        return result;
      };

      $scope.version = version;

      $scope.backgrounds = model.backgrounds;
      $scope.set = {
        type: "space",
        selectedBackground: model.backgrounds[0],
        chromaKey: {
          color: "#00FF00"
        }
      };

      $scope.canBeCreated = function() {
        var result = false;

        if ($scope.set.type === "space") {
          result = !! $scope.set.selectedBackground;
        } else if ($scope.set.type === "chromaKey") {
          result = isColorValid($scope.set.chromaKey.color);
        }

        return result;
      };

      $scope.create = function(setType) {
        var notifier = {};

        notifier.space = function(user) {
          return user.createSpaceSet($scope.set.selectedBackground, $scope.set.sessionData);
        };
        notifier.chromaKey = function(user) {
          return user.createChromaKeyedSet(parseColor($scope.set.chromaKey.color), $scope.set.sessionData);
        };

        dialog.close(notifier[setType]);
      };

      $scope.readFile = function(file) {
        var readPromise = fileReader.readAsText($scope, file, "utf-8");

        readPromise.then(function(data) {
          var validator = new SessionValidator();
          var object;
          var isValid = false;

          try {
            object = JSON.parse(data);
            isValid = validator.isValid(object);
          } catch (ex) {

          }
          if (isValid) {
            $scope.set.sessionData = object;
            if (object.session.set.space) {
              $scope.set.type = "space";
              $scope.set.selectedBackground = findBackgroundByUrl(object.session.set.space.background);
            } else if (object.session.set.chromaKey) {
              $scope.set.type = "chromaKey";
              $scope.set.chromaKey.color = "#";
              object.session.set.chromaKey.color.forEach(function(part) {
                $scope.set.chromaKey.color += ("0" + (part * 255.0).toString(16)).substr(-2);
              });
            }
          }
        });
      };
    };

    var register = function(module) {
      module.controller(name, ["$scope", "dialog", "model", "fileReader", controller]);
    };

    var getBuilder = function(dialogFactory, model) {
      var options = {
        backdrop: true,
        backdropFade: false,
        backdropClick: false,
        keyboard: false,

        controller: name,
        template: template,
        resolve: {
          model: function() {
            return model;
          }
        }
      };

      return dialogFactory.dialog(options);
    };

    var dialog = {
      controller: controller,
      template: template,

      register: register,
      getBuilder: getBuilder
    };

    return dialog;
  });
/**
This is a helper object to collect all dialogs

@module Client
@class Dialogs
*/
define('ui/Dialogs',["ui/SplashDialog", "ui/CreateSessionDialog"],

function(splashDialog, createSessionDialog) {
  

  var dialogs = {
    splashDialog: splashDialog,
    createSessionDialog: createSessionDialog
  };

  return dialogs;
});
/**
The helper is a static object providing some helper constants and functions
for GL related topics.

@module Client
@class GlHelper
*/
define('util/GlHelper',["lib/gl-matrix"], function(glMatrix) {
  

  // ccpwgl extends mat4 with this multiply3x3 function; Since glMatrix is
  // re-loaded, this extension is lost, so reintroduce it here.
  // The function seems to be based on multiplyVec3, but without the translation.
  // For now let's set it equal, until artefacts are discovered.
  glMatrix.mat4.multiply3x3 = glMatrix.mat4.multiplyVec3;

  var oneDegreeInRad = Math.PI / 180.0;
  var viewDirections = {
    forward: -1.0,
    upward: -1.0,
    rightward: 1.0
  };
  var viewRotations = {
    rollClockwise: -1.0,
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
/* global console */
/**
An animator is responsible for updating the state of a prop

@module Client
@class Animator
*/
define('production/Animator',["lib/gl-matrix", "util/GlHelper"], function(glMatrix, helper) {
  

  var tempQuat = glMatrix.quat4.create();
  var tempVec3 = glMatrix.vec3.create();

  var emptyScript = {
    getFrameData: function() {
      return null;
    }
  };

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
    this.script = emptyScript;

    this.commandChannel = null;
    this.lastState = null;
  };

  Animator.prototype.setScript = function(script) {
    this.script = script;
  };

  Animator.prototype.getScript = function() {
    return this.script;
  };

  Animator.prototype.getProp = function() {
    return this.prop;
  };

  Animator.prototype.setCommandChannel = function(commandChannel) {
    this.commandChannel = commandChannel;
    this.resetToScript();
  };

  Animator.prototype.resetToScript = function() {
    var lastState = this.prop.getStateData(this.lastState);
    var resetState = this.script.getFrameData() || lastState;

    this.prop.setStateData(resetState);
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
    tempVec3[2] = forward * helper.MODEL_DIRECTION_FORWARD * 6.6; // ~200 m/s at 60fps
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

  StageManager.prototype.encodeData = function() {
    var data = {
      props: []
    };
    var that = this;

    this.stage.forEachProp(function(prop) {
      var animator = that.findAnimatorByProp(prop);
      var script = animator && animator.getScript();
      var propEntry = {
        //id: prop.id,
        propData: prop.propData,
        script: script ? script.data : []
      };

      data.props.push(propEntry);
    });

    return data;
  };

  StageManager.prototype.updateStage = function() {
    this.animators.forEach(function(animator) {
      animator.update();
    });
  };

  StageManager.prototype.getAnimator = function(prop) {
    var animator = this.findAnimatorByProp(prop);

    if (!animator) {
      animator = new Animator(prop);
      this.animators.push(animator);
    }

    return animator;
  };

  StageManager.prototype.findAnimatorByProp = function(prop) {
    var animator = null;

    this.animators.forEach(function(test) {
      if (test.getProp() === prop) {
        animator = test;
      }
    });

    return animator;
  };

  return StageManager;
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
/* global console */
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

  var tempVec3 = glMatrix.vec3.create();

  var rotateViewOrientation = (function() {
    var tempQuat = glMatrix.quat4.create();

    return function(dest, roll, pitch, yaw) {
      glMatrix.quat4.fromAngleAxis(roll * helper.VIEW_ROTATION_ROLL_CLOCKWISE, helper.VIEW_VECTOR_FORWARD, tempQuat);
      glMatrix.quat4.multiply(tempQuat, dest, dest);
      glMatrix.quat4.fromAngleAxis(pitch * helper.VIEW_ROTATION_PITCH_UP, helper.VIEW_VECTOR_RIGHT, tempQuat);
      glMatrix.quat4.multiply(tempQuat, dest, dest);
      glMatrix.quat4.fromAngleAxis(yaw * helper.VIEW_ROTATION_YAW_RIGHT, helper.VIEW_VECTOR_UP, tempQuat);
      glMatrix.quat4.multiply(tempQuat, dest, dest);
    };
  })();

  var getModelRotationFromViewRotation = function(viewRotation, result) {
    glMatrix.quat4.set(viewRotation, result);
    rotateViewOrientation(result, 0, 0, -Math.PI);
    glMatrix.quat4.inverse(result);
  };

  var rotateModelVectorByViewRotation = (function() {
    var tempQuat = glMatrix.quat4.create();

    return function(viewRotation, modelVector) {
      getModelRotationFromViewRotation(viewRotation, tempQuat);
      glMatrix.quat4.multiplyVec3(tempQuat, modelVector);

      return modelVector;
    };
  })();

  var CameraOperator = function(camera, shotList) {
    this.camera = camera;
    this.shotList = shotList;

    this.commandChannel = null;

    /**
      @private
      @property lastState buffer object to avoid creating new ones each frame
    */
    this.lastState = null;
  };

  CameraOperator.getActionNames = function() {
    return actionNames.slice(0);
  };

  CameraOperator.prototype.getShotList = function() {
    return this.shotList;
  };

  CameraOperator.prototype.setCommandChannel = function(commandChannel) {
    this.commandChannel = commandChannel;
    this.resetToShotList();
  };

  CameraOperator.prototype.setChaseObject = function(object) {
    this.chaseObject = object;
    if (!this.chaseObject) {
      this.resetToShotList();
    }
  };

  CameraOperator.prototype.resetToShotList = function() {
    var camera = this.camera;
    var lastState = camera.getStateData(this.lastState);
    var resetState = this.shotList.getFrameData() || lastState;

    camera.setStateData(resetState);
  };

  CameraOperator.prototype.placeObjectInFrontOfCamera = function(object, distance) {
    var objectState = object.getStateData();
    var cameraState = this.camera.getStateData();
    var offset = distance > 10.0 ? distance : 10.0;

    // align objects rotation to that of camera
    getModelRotationFromViewRotation(cameraState.rotation, objectState.rotation);
    // position object in front
    objectState.position = [0, 0, offset];
    glMatrix.quat4.multiplyVec3(objectState.rotation, objectState.position);
    glMatrix.vec3.subtract(objectState.position, cameraState.position);

    object.setStateData(objectState);
  };

  CameraOperator.prototype.updateCamera = function() {
    var camera = this.camera;
    var lastState = camera.getStateData(this.lastState);
    var newState = camera.getStateData();
    var recordedState = this.shotList.getFrameData() || newState;

    if (this.chaseObject) {
      newState = this.updateByChase(newState, lastState);
    } else if (this.commandChannel) {
      newState = this.updateByCommands(newState, lastState, recordedState);
    } else {
      newState = recordedState;
    }

    camera.setStateData(newState);
    this.shotList.setFrameData(newState);
    this.lastState = lastState;
  };

  CameraOperator.prototype.updateByChase = function(newState, lastState) {
    var chaseData = this.chaseObject.getStateData();
    var radius = this.chaseObject.getBoundingSphereRadius();
    var backDistance = -10 - radius * 2.0;

    glMatrix.vec3.negate(chaseData.position, newState.position);

    glMatrix.quat4.set(chaseData.rotation, newState.rotation);
    glMatrix.quat4.inverse(newState.rotation);
    rotateViewOrientation(newState.rotation, 0, helper.degreeToRad(-1.0) * helper.VIEW_ROTATION_PITCH_UP, Math.PI);

    glMatrix.vec3.set([0, -radius * 0.5, backDistance], newState.viewOffset);

    return newState;
  };

  CameraOperator.prototype.updateByCommands = function(newState, lastState, recordedState) {
    var commands = this.commandChannel.getCommands();
    var roll = (commands.rollClockwise - commands.rollCounter) * 0.02;
    var pitch = (commands.pitchUp - commands.pitchDown) * 0.02;
    var yaw = (commands.yawRight - commands.yawLeft) * 0.02;
    var up = (commands.moveUp - commands.moveDown);
    var right = (commands.moveRight - commands.moveLeft);
    var forward = (commands.moveForward - commands.moveBackward);

    rotateViewOrientation(newState.rotation, roll, pitch, yaw);

    tempVec3[0] = right * helper.VIEW_DIRECTION_RIGHT;
    tempVec3[1] = up * helper.VIEW_DIRECTION_UP;
    tempVec3[2] = forward * helper.VIEW_DIRECTION_FORWARD * 6.6; // ~200 m/s at 60fps
    rotateModelVectorByViewRotation(newState.rotation, tempVec3);
    newState.position[0] += tempVec3[0];
    newState.position[1] += tempVec3[1];
    newState.position[2] += tempVec3[2];
    newState.viewOffset[0] = newState.viewOffset[1] = newState.viewOffset[2] = 0;

    return newState;
  };

  return CameraOperator;
});
/**

@module Client
@class Resource
*/
define('production/Resources',["production/StageManager", "production/Director", "production/CameraOperator"], function(StageManager, Director, CameraOperator) {
  

  var resources = {
    StageManager: StageManager,
    Director: Director,
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
  

  var Ship = function(ccpwgl, obj, id, propData) {
    this.ccpwgl = ccpwgl;
    this.obj = obj;
    this.id = id;
    this.propData = propData;

    this.position = glMatrix.vec3.create();
    this.rotation = glMatrix.quat4.identity();
    this.transform = glMatrix.mat4.identity();
  };

  Ship.prototype.toString = function() {
    return "Ship " + this.id;
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
  

  var ShipArchetype = function(propData) {
    this.propData = propData;
  };

  ShipArchetype.propType = "ship";

  ShipArchetype.prototype.request = function(ccpwgl, scene, deferred, id) {
    var propData = this.propData;

    return scene.loadShip(this.propData.resourceUrl, function() {
      deferred.resolve(new Ship(ccpwgl, this, id, propData));
    });
  };

  ShipArchetype.prototype.setResourceUrl = function(value) {
    this.propData.resourceUrl = value;

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
  

  var Planet = function(obj, id, propData) {
    this.obj = obj;
    this.id = id;
    this.propData = propData;

    this.position = glMatrix.vec3.create();
    this.rotation = glMatrix.quat4.identity();
    this.transform = glMatrix.mat4.identity();

    this.radius = 60 * 1000;
  };

  Planet.prototype.toString = function() {
    return "Planet " + this.id;
  };

  Planet.prototype.getBoundingSphereRadius = function() {
    return this.radius;
  };

  Planet.prototype.getStateData = function(dest) {
    var result = dest || {};

    result.position = glMatrix.vec3.set(this.position, result.position || [0, 0, 0]);
    result.rotation = glMatrix.quat4.set(this.rotation, result.rotation || [0, 0, 0, 1]);

    return result;
  };

  Planet.prototype.setStateData = function(data) {
    glMatrix.vec3.set(data.position, this.position);
    glMatrix.quat4.set(data.rotation, this.rotation);

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
  

  var PlanetArchetype = function(propData) {
    this.propData = propData;
  };

  PlanetArchetype.propType = "planet";

  PlanetArchetype.prototype.request = function(ccpwgl, scene, deferred, id) {
    var propData = this.propData;
    var obj = scene.loadPlanet(this.propData.itemId, this.propData.resourceUrl,
      this.propData.atmosphereUrl, this.propData.heightMap1Url, this.propData.heightMap2Url);

    deferred.resolve(new Planet(obj, id, propData));
  };

  PlanetArchetype.prototype.setItemId = function(value) {
    this.propData.itemId = value;

    return this;
  };

  PlanetArchetype.prototype.setResourceUrl = function(value) {
    this.propData.resourceUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setAtmosphereUrl = function(value) {
    this.propData.atmosphereUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setHeightMap1Url = function(value) {
    this.propData.heightMap1Url = value;

    return this;
  };

  PlanetArchetype.prototype.setHeightMap2Url = function(value) {
    this.propData.heightMap2Url = value;

    return this;
  };

  return PlanetArchetype;
});
/**
The Scenery wrapper

@module Client
@class Scenery
*/
define('production/ccp/res/Scenery',["lib/gl-matrix"], function(glMatrix) {
  

  var Scenery = function(ccpwgl, obj, id, propData) {
    this.ccpwgl = ccpwgl;
    this.obj = obj;
    this.id = id;
    this.propData = propData;

    this.position = glMatrix.vec3.create();
    this.rotation = glMatrix.quat4.identity();
    this.transform = glMatrix.mat4.identity();
  };

  Scenery.prototype.toString = function() {
    return "Scenery " + this.id;
  };

  Scenery.prototype.getBoundingSphereRadius = function() {
    return this.obj.getBoundingSphere()[1];
  };

  Scenery.prototype.getStateData = function(dest) {
    var result = dest || {};

    result.position = glMatrix.vec3.set(this.position, result.position || [0, 0, 0]);
    result.rotation = glMatrix.quat4.set(this.rotation, result.rotation || [0, 0, 0, 1]);

    return result;
  };

  Scenery.prototype.setStateData = function(data) {
    glMatrix.vec3.set(data.position, this.position);
    glMatrix.quat4.set(data.rotation, this.rotation);

    glMatrix.mat4.fromRotationTranslation(this.rotation, this.position, this.transform);
    this.obj.setTransform(this.transform);
  };

  return Scenery;
});
/**
An archetype for sceneries (generic objects that can only be placed/rotated)

@module Client
@class SceneryArchetype
*/
define('production/ccp/res/SceneryArchetype',["production/ccp/res/Scenery"], function(Scenery) {
  

  var SceneryArchetype = function(propData) {
    this.propData = propData;
  };

  SceneryArchetype.propType = "scenery";

  SceneryArchetype.prototype.request = function(ccpwgl, scene, deferred, id) {
    var propData = this.propData;

    return scene.loadObject(this.propData.resourceUrl, function() {
      deferred.resolve(new Scenery(ccpwgl, this, id, propData));
    });
  };

  SceneryArchetype.prototype.setResourceUrl = function(value) {
    this.propData.resourceUrl = value;

    return this;
  };

  return SceneryArchetype;
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
define('ApplicationController',["lib/q", "Defaults", "ui/Dialogs", "production/Resources", "controls/GamepadApi",
    "production/ccp/res/ShipArchetype", "production/ccp/res/PlanetArchetype", "production/ccp/res/SceneryArchetype",
    "production/Track", "production/Reel"
  ],

  function(q, defaults, uiDialogs, Resources, GamepadApi, ShipArchetype, PlanetArchetype, SceneryArchetype, Track, Reel) {
    

    var addShip = function(modelView, resourceUrl) {
      var arch = new ShipArchetype({
        propType: ShipArchetype.propType
      });

      arch.setResourceUrl(resourceUrl);

      modelView.props.push(arch);
    };

    var addPlanet = function(modelView, itemId, resourceUrl, atmosphereUrl, heightMap1Url, heightMap2Url) {
      var arch = new PlanetArchetype({
        propType: PlanetArchetype.propType
      });

      arch.setItemId(itemId);
      arch.setResourceUrl(resourceUrl);
      arch.setAtmosphereUrl(atmosphereUrl);
      arch.setHeightMap1Url(heightMap1Url);
      arch.setHeightMap2Url(heightMap2Url);

      modelView.props.push(arch);
    };

    var addScenery = function(modelView, resourceUrl) {
      var arch = new SceneryArchetype({
        propType: SceneryArchetype.propType
      });

      arch.setResourceUrl(resourceUrl);

      modelView.props.push(arch);
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
      modelView.addProp = function(arch) {
        controller.addProp(arch);
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

      modelView.stageProps = [];

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

    var ApplicationController = function(modelView, dialogFactory, config, productionManager, mainScreen) {
      var that = this;
      var sessionMeta = {
        set: {}
      };

      this.productionManager = productionManager;
      this.modelView = modelView;
      this.dialogFactory = dialogFactory;
      this.sessionMeta = sessionMeta;

      initModelView(modelView, this, config);

      productionManager.setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

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
        backgrounds: [{
          resourceUrl: "res:/dx9/scene/universe/a01_cube.red"
        }]
      };
      var dialogTemplate = uiDialogs.createSessionDialog.getBuilder(this.dialogFactory, dialogParams);
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
        }
      };

      return JSON.stringify(session);
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

    ApplicationController.prototype.onSessionCreated = function(session) {
      var that = this;
      var set = session.set;

      this.set = set;

      this.director = new Resources.Director();
      this.reel = new Reel();
      this.stopReelTransmission();

      this.camCommands = this.director.getCommandChannel("camera", Resources.CameraOperator.getActionNames());

      var shotList = null;
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
      this.cameraOperator = new Resources.CameraOperator(set.getSceneCamera(), shotList);
      this.setFocusOnCamera();

      this.stageManager = new Resources.StageManager(set.getStage());

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

    this.propCounter = 1;
    this.props = [];
  };

  /**
   * Iterates through all props and passes them to a callback
   *
   * @method forEachProp
   * @param {Function} callback to receive each prop in succession
   */
  Stage.prototype.forEachProp = function(callback) {
    this.props.forEach(callback);
  };

  /**
   * @method enter
   * @param {Object} archetype the archetype to request
   * @return {Promise} for the creation
   */
  Stage.prototype.enter = function(archetype) {
    var deferred = q.defer();
    var that = this;

    archetype.request(this.ccpwgl, this.scene, deferred, this.propCounter++);
    deferred.promise.then(function(prop) {
      that.props.push(prop);
    });

    return deferred.promise;
  };

  Stage.prototype.getProps = function() {
    return this.props;
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

    result.viewOffset = this.getViewOffset(result.viewOffset);
    result.position = this.getPosition(result.position);
    result.rotation = this.getRotation(result.rotation);

    return result;
  };

  SceneCamera.prototype.setStateData = function(data) {
    glMatrix.vec3.set(data.viewOffset, this.viewOffset);
    glMatrix.vec3.set(data.position, this.position);
    glMatrix.quat4.set(data.rotation, this.rotation);
    this.onViewChanged();
  };

  SceneCamera.prototype.getViewOffset = function(dest) {
    return glMatrix.vec3.set(this.viewOffset, dest || [0, 0, 0]);
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
/**
A list of archetypes

@module Client
@class ArchetypeList
*/
define('production/ccp/res/ArchetypeList',["production/ccp/res/PlanetArchetype", "production/ccp/res/SceneryArchetype", "production/ccp/res/ShipArchetype"], function() {
  

  var list = [];
  var i;

  for (i = 0; i < arguments.length; i++) {
    list.push(arguments[i]);
  }

  return list;
});
/*jshint maxparams:10 */

/**
The production manager is responsible for creating a set with all necessary
deparments. 

@module Client
@class ProductionManager
*/
define('production/ccp/ProductionManager',["lib/q", "production/ccp/SyncSource", "production/ccp/Set", "production/ccp/Stage",
    "production/ccp/SceneCamera", "production/ccp/LightBoard", "production/ccp/res/ArchetypeList"
  ],

  function(q, SyncSource, Set, Stage, SceneCamera, LightBoard, archetypeList) {
    

    var archetypesByType = {};

    archetypeList.forEach(function(Constructor) {
      archetypesByType[Constructor.propType] = Constructor;
    });

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

    ProductionManager.prototype.getArchetypeForProp = function(propData) {
      var Constructor = archetypesByType[propData.propType];
      var arch = null;

      if (Constructor) {
        arch = new Constructor(propData);
      }

      return arch;
    };

    return ProductionManager;
  });
/* global FileReader */
/**
This service wraps the FileReader and transforms an evented API into a promise API.

Source: http://odetocode.com/blogs/scott/archive/2013/07/03/building-a-filereader-service-for-angularjs-the-service.aspx

@module Client
@class FileInputDirective
*/
define('services/FileReaderService',[], function() {
  

  var fileReader = function($q) {

    var onLoad = function(scope, deferred, reader) {
      return function() {
        scope.$apply(function() {
          deferred.resolve(reader.result);
        });
      };
    };

    var onError = function(scope, deferred, reader) {
      return function() {
        scope.$apply(function() {
          deferred.reject(reader.result);
        });
      };
    };

    var getReader = function(scope, deferred) {
      var reader = new FileReader();

      reader.onload = onLoad(scope, deferred, reader);
      reader.onerror = onError(scope, deferred, reader);

      return reader;
    };

    var readAsText = function(scope, file, encoding) {
      var deferred = $q.defer();
      var reader = getReader(scope, deferred);

      reader.readAsText(file, encoding);

      return deferred.promise;
    };

    return {
      readAsText: readAsText
    };
  };

  var register = function(angular, appModule) {
    appModule.factory("fileReader", ["$q", fileReader]);
  };

  var service = {
    register: register
  };

  return service;
});
/**
The Service list collects all services

@module Client
@class DirectiveList
*/
define('services/ServiceList',["services/FileReaderService"],
  function() {
    

    var directives = [];
    var i;

    for (i = 0; i < arguments.length; i++) {
      directives.push(arguments[i]);
    }

    return directives;
  });
/**
The Controller list collects all controller modules

@module Client
@class Controller
*/
define('ui/ControllerList',["ui/SplashDialog", "ui/CreateSessionDialog"],

function(splashDialog, createSessionDialog) {
  

  var controller = [
    splashDialog,
    createSessionDialog
  ];

  return controller;
});
/**
The helper is a static object providing some helper constants and functions
for browser access.

@module Client
@class BrowserHelper
*/
define('util/BrowserHelper',[], function() {
  

  /**
   * Tries to find a property with prefixes for the common browsers on a
   * specific target.
   *
   * @method findPrefixProperty
   * @param {Object} target in which target object to look for
   * @param {String} name the name of the property (without prefix)
   * @param {Object} [shim] optional shim to return if none found
   * @return {Object} the found property if existing or shim
   */
  var findPrefixProperty = function(target, name, shim) {
    var prefixes = ["webkit", "moz", "ms", "o"];
    var result = shim;

    prefixes.forEach(function(prefix) {
      var fullName = prefix + name;
      var temp = target[fullName];

      if (typeof(temp) !== "undefined") {
        result = temp;
      }
    });

    return result;
  };

  var helper = {
    findPrefixProperty: findPrefixProperty
  };

  return helper;
});
/**
The data-film-view directive handles the correct display of a film view and
its contained port.

@module Client
@class FilmViewDirective
*/
define('directives/FilmViewDirective',["util/BrowserHelper"], function(browserHelper) {
  

  var register = function(angular, appModule) {
    appModule.directive("filmView", function($window) {
      return function(scope, element) {
        var area = element[0];
        var win = angular.element($window);
        var ratio = 16.0 / 9.0;

        scope.getAreaDimension = function() {
          return {
            width: area.clientWidth,
            height: area.clientHeight
          };
        };

        scope.goFullscreen = function() {
          if (!area.requestFullScreen) {
            area.requestFullScreen = browserHelper.findPrefixProperty(area, "RequestFullScreen", function() {});
          }
          area.requestFullScreen();
        };

        scope.$watch(scope.getAreaDimension, function(newValue, oldValue) {
          scope.style = function() {
            var height = (newValue.width / ratio).toFixed(0);
            var top = 0;

            if (newValue.height > height) {
              top = ((newValue.height - height) / 2).toFixed(0);
            }

            return {
              position: "relative",
              top: top + "px",
              width: newValue.width + "px",
              height: height + "px"
            };
          };
        }, true);

        win.bind("resize", function() {
          scope.$apply();
        });
      };
    });

  };

  var directive = {
    register: register
  };

  return directive;
});
/* global Blob */
/**
The data-save-as directive handles saving of the session to a file.

@module Client
@class SaveAsDirective
*/
define('directives/SaveAsDirective',["util/BrowserHelper"], function(browserHelper) {
  

  var register = function(angular, appModule) {
    appModule.directive("saveAs", function($window) {
      return function(scope, element, attrs) {
        var rawElement = element[0];
        var url = $window.URL;

        if (!url) {
          url = browserHelper.findPrefixProperty($window, "URL", {
            createObjectURL: function() {
              return "#";
            }
          });
        }

        rawElement.target = "_blank";
        rawElement.download = "session.json";
        element.bind("click", function(event) {
          rawElement.href = "#";
        });

        element.bind("click", function() {
          var textToWrite = scope.encodeSession();
          var textFileAsBlob = new Blob([textToWrite], {
            type: "application/json;charset=utf-8"
          });

          rawElement.href = url.createObjectURL(textFileAsBlob);
        });

      };
    });

  };

  var directive = {
    register: register
  };

  return directive;
});
/**
The data-file-input directive is for adding a change event to a file input.

@module Client
@class FileInputDirective
*/
define('directives/FileInputDirective',[], function() {
  

  var register = function(angular, appModule) {
    appModule.directive("fileInput", function($parse) {
      return {
        restrict: "EA",
        template: "<input type=\"file\" />",
        replace: true,
        link: function(scope, element, attrs) {
          var modelGet = $parse(attrs.fileInput || attrs.dataFileInpu);
          var modelSet = modelGet.assign;
          var onChange = $parse(attrs.onChange);

          var updateModel = function() {
            scope.$apply(function() {
              modelSet(scope, element[0].files[0]);
              onChange(scope);
            });
          };

          element.bind("change", updateModel);
        }
      };
    });
  };

  var directive = {
    register: register
  };

  return directive;
});
/**
The Directive list collects all directives

@module Client
@class DirectiveList
*/
define('directives/DirectiveList',["directives/FilmViewDirective", "directives/SaveAsDirective", "directives/FileInputDirective"],

function() {
  

  var directives = [];
  var i;

  for (i = 0; i < arguments.length; i++) {
    directives.push(arguments[i]);
  }

  return directives;
});
/* jshint maxparams:10 */
/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define('ClientApp',["module", "angular", "lib/ccpwgl", "ApplicationController", "production/ccp/ProductionManager", "services/ServiceList", "ui/ControllerList", "directives/DirectiveList"],

  function(module, angular, ccpwgl, appController, ProductionManager, serviceList, controllerList, directiveList) {
    

    var config = module.config();

    var main = function(mainScreen) {
      var appModule = angular.module("ClientApp", ["ui.bootstrap"]);
      var productionManager = new ProductionManager(ccpwgl);

      appModule.controller("ApplicationController", ["$scope", "$dialog", appController.create(config, productionManager, mainScreen)]);

      serviceList.forEach(function(service) {
        service.register(angular, appModule);
      });

      directiveList.forEach(function(directive) {
        directive.register(angular, appModule);
      });

      controllerList.forEach(function(controller) {
        controller.register(appModule);
      });

      return [appModule.name];
    };

    return main;
  });