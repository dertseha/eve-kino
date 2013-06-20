/**
The Scene is the actual scene wrapper that contains all scene objects
and the render control.

@module Client
@class Scene
*/
define(["lib/ccpwgl", "3d/SimpleCamera", "lib/gl-matrix"], function(ccpwgl, SimpleCamera, glMatrix) {
  "use strict";

  // var ship;
  var Scene = function() {
    this.camera = new SimpleCamera();

    ccpwgl.setCamera(this.camera);

  };

  Scene.prototype.setBackgroundBox = function(resPath) {
    this.scene = ccpwgl.loadScene(resPath);

    // ship = this.scene.loadShip("res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red", undefined);
    // ship.loadBoosters("res:/dx9/model/ship/booster/booster_amarr.red");
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

    // function() {
    //   var shipMat = ship.getTransform();

    //   glMatrix.mat4.identity(shipMat);

    //   //      glMatrix.mat4.translate(shipMat, [1000, 0, 0]);
    //   ship.setTransform(shipMat);

    //   callback();
    // };
  };

  return Scene;
});