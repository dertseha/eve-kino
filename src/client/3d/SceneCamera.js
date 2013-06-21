/**
The SceneCamera is a very basic camera for the scene. It has the minimal
implementation to provide the projection and view matrices.

@module Client
@class SceneCamera
*/
define(["lib/gl-matrix", "3d/Helper"], function(glMatrix, helper) {
  "use strict";

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