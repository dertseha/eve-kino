/**
The Stage holds all the set pieces and actors

@module Client
@class Stage
*/
define([], function() {
  "use strict";

  var Stage = function(ccpwgl, scene) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
  };

  return Stage;
});