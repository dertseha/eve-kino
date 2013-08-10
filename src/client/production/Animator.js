/**
An animator is responsible for updating the state of a prop

@module Client
@class Animator
*/
define(["lib/gl-matrix", "util/GlHelper", "simulation/Actuator", "simulation/SimulatedThruster"],
  function(glMatrix, helper, Actuator, SimulatedThruster) {
    "use strict";

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

    var Animator = function(prop, timeWatch) {
      var that = this;

      var addAgility = function(name, maximum, time) {
        that.agility[name] = {
          maximum: maximum,
          time: time
        };
      };

      this.prop = prop;
      this.script = emptyScript;

      this.commandChannel = null;
      this.lastState = null;

      this.timeWatch = timeWatch;
      this.agility = {};
      this.thrusters = {};

      addAgility("forward", 300, 0.5);
      addAgility("navigation", 100, 0.5);
      addAgility("rotation", 2, 0.5);

      this.createThruster("moveForward", "forward");
      ["moveBackward", "moveLeft", "moveRight", "moveUp", "moveDown"].forEach(function(direction) {
        that.createThruster(direction, "navigation");
      });
      ["rollClockwise", "rollCounter", "pitchUp", "pitchDown", "yawLeft", "yawRight"].forEach(function(direction) {
        that.createThruster(direction, "rotation");
      });
    };

    Animator.prototype.createThruster = function(thrusterName, agilityName) {
      var entry = this.agility[agilityName];
      var actuator = new Actuator(this.timeWatch, entry.time);
      var velocityTimeFunction = function(time) {
        return time;
      };
      var thruster = new SimulatedThruster(actuator, entry.maximum, velocityTimeFunction);

      this.thrusters[thrusterName] = thruster;
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
    };

    Animator.prototype.resetToRecording = function() {
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
      var timeDelta = this.timeWatch.getDelta();
      var commands = this.commandChannel.getCommands();
      var roll = (this.thrusters.rollClockwise.getSpeed(commands.rollClockwise) -
        this.thrusters.rollCounter.getSpeed(commands.rollCounter)) * timeDelta;
      var pitch = (this.thrusters.pitchUp.getSpeed(commands.pitchUp) -
        this.thrusters.pitchDown.getSpeed(commands.pitchDown)) * timeDelta;
      var yaw = (this.thrusters.yawRight.getSpeed(commands.yawRight) -
        this.thrusters.yawLeft.getSpeed(commands.yawLeft)) * timeDelta;
      var up = (this.thrusters.moveUp.getSpeed(commands.moveUp) -
        this.thrusters.moveDown.getSpeed(commands.moveDown)) * timeDelta;
      var right = (this.thrusters.moveRight.getSpeed(commands.moveRight) -
        this.thrusters.moveLeft.getSpeed(commands.moveLeft)) * timeDelta;
      var forward = (this.thrusters.moveForward.getSpeed(commands.moveForward) -
        this.thrusters.moveBackward.getSpeed(commands.moveBackward)) * timeDelta;

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