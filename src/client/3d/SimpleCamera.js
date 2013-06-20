/**
The SimpleCamera is a very basic camera for the scene. It has the minimal
implementation to provide the projection and view matrices.

@module Client
@class SimpleCamera
*/
define(["lib/gl-matrix", "3d/Helper"], function(glMatrix, helper) {
  "use strict";

  var SimpleCamera = function() {
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

  SimpleCamera.prototype.nullFunction = function() {

  };

  SimpleCamera.prototype.calculateView = function() {
    glMatrix.quat4.identity(this.rotation);

    glMatrix.quat4.multiply(this.roll.quat, this.rotation, this.rotation);
    glMatrix.quat4.multiply(this.pitch.quat, this.rotation, this.rotation);
    glMatrix.quat4.multiply(this.yaw.quat, this.rotation, this.rotation);

    glMatrix.mat4.fromRotationTranslation(this.rotation, this.viewOffset, this.view);
    glMatrix.mat4.translate(this.view, this.position);

    this.updateView = this.nullFunction;
  };

  SimpleCamera.prototype.onViewChanged = function() {
    this.updateView = this.calculateView;
  };

  SimpleCamera.prototype.getProjection = function(aspect) {
    glMatrix.mat4.perspective(this.fov, aspect, this.nearPlane, this.farPlane, this.projection);

    return this.projection;
  };

  SimpleCamera.prototype.getView = function() {
    this.updateView();

    return this.view;
  };

  SimpleCamera.prototype.update = function(dt) {

  };

  SimpleCamera.prototype.getPosition = function(dest) {
    return glMatrix.vec3.set(this.position, dest || glMatrix.vec3.create());
  };

  SimpleCamera.prototype.setPosition = function(pos) {
    glMatrix.vec3.set(pos, this.position);
    this.onViewChanged();
  };

  SimpleCamera.prototype.changeRotation = function(axis, value) {
    if (axis.rawValue !== value) {
      axis.rawValue = value;
      glMatrix.quat4.fromAngleAxis(value, axis.vector, axis.quat);
      this.onViewChanged();
    }
  };

  SimpleCamera.prototype.getPitch = function() {
    return this.pitch.rawValue;
  };

  SimpleCamera.prototype.setPitch = function(value) {
    this.changeRotation(this.pitch, value);
  };

  SimpleCamera.prototype.getRoll = function() {
    return this.roll.rawValue;
  };

  SimpleCamera.prototype.setRoll = function(value) {
    this.changeRotation(this.roll, value);
  };

  SimpleCamera.prototype.getYaw = function() {
    return this.yaw.rawValue;
  };

  SimpleCamera.prototype.setYaw = function(value) {
    this.changeRotation(this.yaw, value);
  };

  return SimpleCamera;
});