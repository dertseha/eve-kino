/**
The Scene is the actual scene wrapper that contains all scene objects
and the render control.

@module Client
@class Scene
*/
define(["lib/ccpwgl", "3d/SceneCamera", "lib/gl-matrix"], function(ccpwgl, SceneCamera, glMatrix) {
  "use strict";

  var Scene = function() {
    this.camera = new SceneCamera();

    ccpwgl.setCamera(this.camera);

  };

  Scene.prototype.setBackgroundBox = function(resPath) {
    this.scene = ccpwgl.loadScene(resPath);
  };

  Scene.prototype.getCamera = function() {
    return this.camera;
  };

  /**
    This method registers a callback that is called before a new picture is
    rendered.
    @method setPreRenderCallback
    @param callback {function() void} the function to call for each new picture
  */
  Scene.prototype.setPreRenderCallback = function(callback) {
    ccpwgl.onPreRender = callback;
  };

  return Scene;
});