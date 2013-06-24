/**
The set provides access to all necessary set properties

@module Client
@class Set
*/
define([], function() {
  "use strict";

  var Set = function(ccpwgl, scene, stage, sceneCamera, lightBoard) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
    this.stage = stage;
    this.sceneCamera = sceneCamera;
    this.lightBoard = lightBoard;
  };

  /**
    This method registers a callback that is called before a new picture is
    rendered.
    @method setPreRenderCallback
    @param callback {function() void} the function to call for each new picture
  */
  Set.prototype.setPreRenderCallback = function(callback) {
    this.ccpwgl.onPreRender = callback;
  };

  Set.prototype.getStage = function() {
    return this.stage;
  };

  Set.prototype.getSceneCamera = function() {
    return this.sceneCamera;
  };

  return Set;
});