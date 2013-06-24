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