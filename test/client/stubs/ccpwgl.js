define("lib/ccpwgl", [], function() {
  "use strict";

  var nullFunction = function() {};
  var ccpwgl = {};

  ccpwgl.scene = {};

  ccpwgl.setResourcePath = nullFunction;
  ccpwgl.initialize = nullFunction;
  ccpwgl.setCamera = nullFunction;

  ccpwgl.createScene = function() {
    return this.scene;
  };
  ccpwgl.loadScene = function() {
    return this.scene;
  };

  return ccpwgl;
});