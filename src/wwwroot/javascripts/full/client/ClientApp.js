
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
/**
The ResourceManager is a wrapper interface over the ccpwgl accessor functions
(which internally again delegate to the dedicated resource manager)

@module Client
@class ResourceManager
*/
define('3d/ResourceManager',["lib/ccpwgl"], function(ccpwgl) {
  

  /**
    See ccpwgl.setResourcePath()

    @method setResourcePath
    @param {string} namespace Resource namespace.
    @param {string} url URL to resource root. Needs to have a trailing slash.
    @return {ResourceManager} this instance
  */
  var setResourcePath = function(namespace, url) {
    ccpwgl.setResourcePath(namespace, url);

    return this;
  };

  var manager = {
    setResourcePath: setResourcePath
  };

  return manager;
});
/**
The SimpleCamera is a very basic camera for the scene. It has the minimal
implementation to provide the projection and view matrices.

@module Client
@class SimpleCamera
*/
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
The Scene is the actual scene wrapper that contains all scene objects
and the render control.

@module Client
@class Scene
*/
define('3d/Scene',["lib/ccpwgl", "3d/SimpleCamera"], function(ccpwgl, SimpleCamera) {
  

  var Scene = function() {
    this.camera = new SimpleCamera();

    ccpwgl.setCamera(this.camera);
  };

  Scene.prototype.setBackgroundBox = function(resPath) {
    ccpwgl.loadScene(resPath);
  };

  return Scene;
});
/**
The SceneProducer is a factory for a scene and provides access to the resource
manager. 

@module Client
@class SceneProducer
*/
define('3d/SceneProducer',["lib/ccpwgl", "3d/ResourceManager", "3d/Scene"], function(ccpwgl, resourceManager, Scene) {
  

  var sceneOptions = {

  };

  /**
    @method createScene
    @return {Scene} a scene object
    @throws {ccpwgl.NoWebGLError} If no WebGL context is available
  */
  var createScene = function(canvas) {
    ccpwgl.initialize(canvas, sceneOptions);

    return new Scene();
  };

  /**
    @method getResourceManager
    @return {ResourceManager} The resource manager for the producer
  */
  var getResourceManager = function() {
    return resourceManager;
  };

  var producer = {
    createScene: createScene,
    getResourceManager: getResourceManager
  };

  return producer;
});
/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define('ClientApp',["module", "angular", "TestController", "3d/SceneProducer"], function(module, angular, testController, sceneProducer) {
  

  var config = module.config();

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);

    appModule.controller("TestController", ["$scope", testController.create(config)]);

    sceneProducer.getResourceManager().setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

    var scene = sceneProducer.createScene(mainScreen);
    scene.setBackgroundBox("res:/dx9/scene/universe/a01_cube.red");

    return [appModule.name];
  };

  return main;
});