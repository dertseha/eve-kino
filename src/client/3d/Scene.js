/**
The Scene is the actual scene wrapper that contains all scene objects
and the render control.

@module Client
@class Scene
*/
define(["lib/ccpwgl", "3d/SimpleCamera"], function(ccpwgl, SimpleCamera) {
  "use strict";

  var Scene = function() {
    this.camera = new SimpleCamera();

    ccpwgl.setCamera(this.camera);
  };

  Scene.prototype.setBackgroundBox = function(resPath) {
    ccpwgl.loadScene(resPath);
  };

  return Scene;
});