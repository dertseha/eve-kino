/**
The SimpleCamera is a very basic camera for the scene. It has the minimal
implementation to provide the projection and view matrices.

@module Client
@class SimpleCamera
*/
define(["lib/gl-matrix"], function(glMatrix) {
  "use strict";

  var SimpleCamera = function() {
    this.fov = 60;
    this.nearPlane = 1;
    this.farPlane = 100000;

    this.rotation = glMatrix.quat4.identity();
    this.position = glMatrix.vec3.create();

    this.projection = glMatrix.mat4.create();
    this.view = glMatrix.mat4.create();
  };

  SimpleCamera.prototype.getProjection = function(aspect) {
    glMatrix.mat4.perspective(this.fov, aspect, this.nearPlane, this.farPlane, this.projection);

    return this.projection;
  };

  SimpleCamera.prototype.getView = function() {
    glMatrix.mat4.fromRotationTranslation(this.rotation, this.position, this.view);

    return this.view;
  };

  SimpleCamera.prototype.update = function(dt) {

  };

  return SimpleCamera;
});