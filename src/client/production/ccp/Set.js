/**
The set provides access to all necessary set properties

@module Client
@class Set
*/
define([], function() {
  "use strict";

  var Set = function(components) {
    this.ccpwgl = components.ccpwgl;
    this.scene = components.scene;
    this.syncSource = components.syncSource;
    this.stage = components.stage;
    this.sceneCamera = components.sceneCamera;
    this.lightBoard = components.lightBoard;
  };

  Set.prototype.getSyncSource = function() {
    return this.syncSource;
  };

  Set.prototype.getStage = function() {
    return this.stage;
  };

  Set.prototype.getSceneCamera = function() {
    return this.sceneCamera;
  };

  Set.prototype.getLightBoard = function() {
    return this.lightBoard;
  };

  return Set;
});