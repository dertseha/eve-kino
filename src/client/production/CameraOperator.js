/* global console */
/**
A camera operator handles a camera when directed to

@module Client
@class Director
*/
define(["lib/gl-matrix", "util/GlHelper"], function(glMatrix, helper) {
  "use strict";

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