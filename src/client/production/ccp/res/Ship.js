/**
The ship wrapper

@module Client
@class Ship
*/
define(["lib/gl-matrix"], function(glMatrix) {
  "use strict";

  var Ship = function(ccpwgl, obj) {
    this.ccpwgl = ccpwgl;
    this.obj = obj;

    this.position = glMatrix.vec3.create();
    this.rotation = glMatrix.quat4.identity();
    this.transform = glMatrix.mat4.identity();
  };

  Ship.prototype.getStateData = function(dest) {
    var result = dest || {};

    result.position = glMatrix.vec3.set(this.position, result.position || [0, 0, 0]);
    result.rotation = glMatrix.quat4.set(this.rotation, result.rotation || [0, 0, 0, 1]);

    return result;
  };

  Ship.prototype.setStateData = function(data) {
    glMatrix.vec3.set(data.position, this.position);
    glMatrix.quat4.set(data.rotation, this.rotation);

    glMatrix.mat4.fromRotationTranslation(this.rotation, this.position, this.transform);
    this.obj.setTransform(this.transform);
  };

  return Ship;
});