/**
The SceneCamera is a very basic camera for the scene. It has the minimal
implementation to provide the projection and view matrices.

@module Client
@class SceneCamera
*/
define(["lib/gl-matrix", "util/GlHelper"], function(glMatrix, helper) {
  "use strict";

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