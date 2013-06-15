
/**
The TestController is the factory for the controller (why not naming it ...Factory?)

@module Client
@class TestController
*/
define('TestController',[], function() {
  


  /**
    Creates a controller function

    @method create
    @param config {Object} the configuration to use
    @return {Function} Controller function
  */
  var create = function(config) {
    return function($scope) {
      $scope.testName = config.test;
    };
  };

  return {
    create: create
  };
});
define('3d/SimpleCamera',["lib/gl-matrix"], function(glMatrix) {
  

  var SimpleCamera = function() {
    this.fov = 60;
    this.nearPlane = 1;
    this.farPlane = 100000;

    this.rotation = glMatrix.quat4.identity();
    this.position = glMatrix.vec3.create();

    this.projection = glMatrix.mat4.create();
    this.view = glMatrix.mat4.create();
  };

  SimpleCamera.prototype.getProjection = function(aspect) {
    glMatrix.mat4.perspective(this.fov, aspect, this.nearPlane, this.farPlane, this.projection);

    return this.projection;
  };

  SimpleCamera.prototype.getView = function() {
    glMatrix.mat4.fromRotationTranslation(this.rotation, this.position, this.view);

    return this.view;
  };

  SimpleCamera.prototype.update = function(dt) {

  };

  return SimpleCamera;
});
/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define('ClientApp',["module", "angular", "TestController", "3d/SimpleCamera", "lib/ccpwgl"], function(module, angular, testController, SimpleCamera, ccpwgl) {
  

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