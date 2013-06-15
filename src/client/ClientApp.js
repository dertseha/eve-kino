/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define(["module", "angular", "TestController", "3d/SimpleCamera", "lib/ccpwgl"], function(module, angular, testController, SimpleCamera, ccpwgl) {
  "use strict";

  var config = module.config();

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);

    appModule.controller("TestController", ["$scope", testController.create(config)]);

    ccpwgl.setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");
    ccpwgl.initialize(mainScreen);
    var scene = ccpwgl.loadScene("res:/dx9/scene/universe/a01_cube.red");

    var camera = new SimpleCamera();
    camera.fov = 30;
    camera.nearPlane = 1;
    camera.farPlane = 10000000;
    ccpwgl.setCamera(camera);


    return [appModule.name];
  };

  return main;
});