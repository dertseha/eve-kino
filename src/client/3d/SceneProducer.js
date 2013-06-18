/**
The SceneProducer is a factory for a scene and provides access to the resource
manager. 

@module Client
@class SceneProducer
*/
define(["lib/ccpwgl", "3d/ResourceManager", "3d/Scene"], function(ccpwgl, resourceManager, Scene) {
  "use strict";

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