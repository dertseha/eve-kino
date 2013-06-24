/**
The light board provides access to lighting controls

@module Client
@class LightBoard
*/
define([], function() {
  "use strict";

  var LightBoard = function(ccpwgl, scene) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
  };

  return LightBoard;
});