/**
The planet wrapper

@module Client
@class Planet
*/
define(["lib/gl-matrix"], function(glMatrix) {
  "use strict";

  var Planet = function(obj) {
    this.obj = obj;

    this.position = glMatrix.vec3.create();
    this.rotation = glMatrix.quat4.identity();
    this.radius = 1;
    this.transform = glMatrix.mat4.identity();
  };

  Planet.prototype.getBoundingSphereRadius = function() {
    return this.radius;
  };

  Planet.prototype.getStateData = function(dest) {
    var result = dest || {};

    result.position = glMatrix.vec3.set(this.position, result.position || [0, 0, 0]);
    result.rotation = glMatrix.quat4.set(this.rotation, result.rotation || [0, 0, 0, 1]);
    result.radius = this.radius;

    return result;
  };

  Planet.prototype.setStateData = function(data) {
    glMatrix.vec3.set(data.position, this.position);
    glMatrix.quat4.set(data.rotation, this.rotation);
    this.radius = data.radius;

    glMatrix.mat4.fromRotationTranslation(this.rotation, [0, 0, 0], this.transform);
    glMatrix.mat4.scale(this.transform, [this.radius / 2, this.radius / 2, this.radius / 2]);
    this.transform[12] = this.position[0];
    this.transform[13] = this.position[1];
    this.transform[14] = this.position[2];

    this.obj.setTransform(this.transform);
  };

  return Planet;
});