
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
The helper is a static object providing some helper constants and functions.

@module Client
@class Helper
*/
define('3d/Helper',["lib/gl-matrix"], function(glMatrix) {
  

  var oneDegreeInRad = Math.PI / 180.0;
  var viewDirections = {
    forward: 1.0,
    upward: -1.0,
    rightward: -1.0
  };
  var viewRotations = {
    rollClockwise: 1.0,
    pitchUp: -1.0,
    yawRight: 1.0
  };
  var modelDirections = {
    forward: 1.0,
    upward: 1.0,
    rightward: -1.0
  };

  var helper = {
    VIEW_DIRECTION_FORWARD: viewDirections.forward,
    VIEW_DIRECTION_UP: viewDirections.upward,
    VIEW_DIRECTION_RIGHT: viewDirections.rightward,

    VIEW_ROTATION_ROLL_CLOCKWISE: viewRotations.rollClockwise,
    VIEW_ROTATION_PITCH_UP: viewRotations.pitchUp,
    VIEW_ROTATION_YAW_RIGHT: viewRotations.yawRight,

    VIEW_VECTOR_FORWARD: glMatrix.vec3.create([0, 0, viewDirections.forward]),
    VIEW_VECTOR_UP: glMatrix.vec3.create([0, viewDirections.upward, 0]),
    VIEW_VECTOR_RIGHT: glMatrix.vec3.create([viewDirections.rightward, 0, 0]),

    MODEL_DIRECTION_FORWARD: modelDirections.forward,
    MODEL_DIRECTION_UP: modelDirections.upward,
    MODEL_DIRECTION_RIGHT: modelDirections.rightward,

    MODEL_VECTOR_FORWARD: glMatrix.vec3.create([0, 0, modelDirections.forward]),
    MODEL_VECTOR_UP: glMatrix.vec3.create([0, modelDirections.upward, 0]),
    MODEL_VECTOR_RIGHT: glMatrix.vec3.create([modelDirections.rightward, 0, 0]),

    /**
      Converts given degree number to radians
      @method degreeToRad
      @param degrees {Number} Degrees (0..360) to convert to radians
      @return {Number} radians for given degrees
    */
    degreeToRad: function(degrees) {
      return degrees * oneDegreeInRad;
    }
  };

  return helper;
});
/**
The SimpleCamera is a very basic camera for the scene. It has the minimal
implementation to provide the projection and view matrices.

@module Client
@class SimpleCamera
*/
define('3d/SimpleCamera',["lib/gl-matrix", "3d/Helper"], function(glMatrix, helper) {
  

  var SimpleCamera = function() {
    function createAxis(vector) {
      var axis = {
        rawValue: 0.0,
        quat: glMatrix.quat4.identity(),
        vector: vector
      };

      return axis;
    }

    this.fov = 60;
    this.nearPlane = 1;
    this.farPlane = 100000;

    this.pitch = createAxis(helper.VIEW_VECTOR_RIGHT);
    this.roll = createAxis(helper.VIEW_VECTOR_FORWARD);
    this.yaw = createAxis(helper.VIEW_VECTOR_UP);

    this.rotation = glMatrix.quat4.identity();
    this.position = glMatrix.vec3.create();
    this.viewOffset = glMatrix.vec3.create();

    this.projection = glMatrix.mat4.create();
    this.view = glMatrix.mat4.create();

    this.updateView = this.calculateView;
  };

  SimpleCamera.prototype.nullFunction = function() {

  };

  SimpleCamera.prototype.calculateView = function() {
    glMatrix.quat4.identity(this.rotation);

    glMatrix.quat4.multiply(this.roll.quat, this.rotation, this.rotation);
    glMatrix.quat4.multiply(this.pitch.quat, this.rotation, this.rotation);
    glMatrix.quat4.multiply(this.yaw.quat, this.rotation, this.rotation);

    glMatrix.mat4.fromRotationTranslation(this.rotation, this.viewOffset, this.view);
    glMatrix.mat4.translate(this.view, this.position);

    this.updateView = this.nullFunction;
  };

  SimpleCamera.prototype.onViewChanged = function() {
    this.updateView = this.calculateView;
  };

  SimpleCamera.prototype.getProjection = function(aspect) {
    glMatrix.mat4.perspective(this.fov, aspect, this.nearPlane, this.farPlane, this.projection);

    return this.projection;
  };

  SimpleCamera.prototype.getView = function() {
    this.updateView();

    return this.view;
  };

  SimpleCamera.prototype.update = function(dt) {

  };

  SimpleCamera.prototype.getPosition = function(dest) {
    return glMatrix.vec3.set(this.position, dest || glMatrix.vec3.create());
  };

  SimpleCamera.prototype.setPosition = function(pos) {
    glMatrix.vec3.set(pos, this.position);
    this.onViewChanged();
  };

  SimpleCamera.prototype.changeRotation = function(axis, value) {
    if (axis.rawValue !== value) {
      axis.rawValue = value;
      glMatrix.quat4.fromAngleAxis(value, axis.vector, axis.quat);
      this.onViewChanged();
    }
  };

  SimpleCamera.prototype.getPitch = function() {
    return this.pitch.rawValue;
  };

  SimpleCamera.prototype.setPitch = function(value) {
    this.changeRotation(this.pitch, value);
  };

  SimpleCamera.prototype.getRoll = function() {
    return this.roll.rawValue;
  };

  SimpleCamera.prototype.setRoll = function(value) {
    this.changeRotation(this.roll, value);
  };

  SimpleCamera.prototype.getYaw = function() {
    return this.yaw.rawValue;
  };

  SimpleCamera.prototype.setYaw = function(value) {
    this.changeRotation(this.yaw, value);
  };

  return SimpleCamera;
});
/**
The Scene is the actual scene wrapper that contains all scene objects
and the render control.

@module Client
@class Scene
*/
define('3d/Scene',["lib/ccpwgl", "3d/SimpleCamera", "lib/gl-matrix"], function(ccpwgl, SimpleCamera, glMatrix) {
  

  // var ship;
  var Scene = function() {
    this.camera = new SimpleCamera();

    ccpwgl.setCamera(this.camera);

  };

  Scene.prototype.setBackgroundBox = function(resPath) {
    this.scene = ccpwgl.loadScene(resPath);

    // ship = this.scene.loadShip("res:/dx9/model/ship/amarr/battleship/ab3/ab3_t1.red", undefined);
    // ship.loadBoosters("res:/dx9/model/ship/booster/booster_amarr.red");
  };

  Scene.prototype.getCamera = function() {
    return this.camera;
  };

  /**
    This method registers a callback that is called before a new picture is
    rendered.
    @method setPreRenderCallback
    @param callback {function() void} the function to call for each new picture
  */
  Scene.prototype.setPreRenderCallback = function(callback) {
    ccpwgl.onPreRender = callback;

    // function() {
    //   var shipMat = ship.getTransform();

    //   glMatrix.mat4.identity(shipMat);

    //   //      glMatrix.mat4.translate(shipMat, [1000, 0, 0]);
    //   ship.setTransform(shipMat);

    //   callback();
    // };
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
A director watches over the scene and directs the actors as well as the camera.

@module Client
@class Director
*/
define('Director',[], function() {
  

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
/**
ClientApp is the primary entry point for the main client side application

@module Client
@class ClientApp
*/
define('ClientApp',["module", "angular", "TestController", "3d/SceneProducer", "Director"], function(module, angular, testController, sceneProducer, Director) {
  

  var config = module.config();

  var main = function(mainScreen) {
    var appModule = angular.module("ClientApp", []);

    appModule.controller("TestController", ["$scope", testController.create(config)]);

    sceneProducer.getResourceManager().setResourcePath("res", "//web.ccpgamescdn.com/ccpwgl/res/");

    var scene = sceneProducer.createScene(mainScreen);
    scene.setBackgroundBox("res:/dx9/scene/universe/a01_cube.red");

    var director = new Director(scene);

    return [appModule.name];
  };

  return main;
});