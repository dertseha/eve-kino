/**
A director watches over the scene and directs the actors as well as the camera.

@module Client
@class Director
*/
define([], function() {
  "use strict";

  var Director = function(scene) {
    var that = this;

    this.scene = scene;

    var camera = this.scene.getCamera();

    // camera.setPosition([0, 0, -5000.0]); back
    // camera.setPosition([0, 1000, -2000.0]); down
    //camera.setPosition([1000, 0, -2000.0]);
    camera.setPosition([0, 0, -2000.0]);

    this.scene.setPreRenderCallback(function() {
      that.onPreFrame();
    });
  };

  Director.prototype.onPreFrame = function() {
    var camera = this.scene.getCamera();

    //camera.setRoll(camera.getRoll() + 0.01);
  };

  return Director;
});