/**
The sync source provides a callback mechanism for black-burst synchronization.

@module Client
@class SyncSource
*/
define([], function() {
  "use strict";

  var clockRate = 60; // as per requestAnimFrame

  var SyncSource = function(ccpwgl, scene) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
  };

  /**
    This method registers a callback that is called for each picture.
    @method setCallback
    @param callback {function() void} the function to call for each new picture
  */
  SyncSource.prototype.setCallback = function(callback) {
    // With current ccpwgl implementation, there is no callback happening
    // before rendering AND retrieving the view matrix from the camera.
    // Note: independent of the Update() calls.

    this.ccpwgl.onPostRender = callback;
  };

  SyncSource.prototype.getRate = function() {
    return clockRate;
  };

  return SyncSource;
});