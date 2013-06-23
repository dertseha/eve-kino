/**
A camera operator handles a camera when directed to

@module Client
@class Director
*/
define(["lib/gl-matrix", "3d/Helper"], function(glMatrix, helper) {
  "use strict";

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
    // TODO: determine the proper rotation factors, see if they match to those of model rotation
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