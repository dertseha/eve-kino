/* global console */
/**
An animator is responsible for updating the state of a prop

@module Client
@class Animator
*/
define(["lib/gl-matrix", "util/GlHelper"], function(glMatrix, helper) {
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