/**
The production manager is responsible for creating a set with all necessary
deparments. 

@module Client
@class ProductionManager
*/
define(["lib/ccpwgl", "production/ccp/Set", "production/ccp/Stage", "production/ccp/SceneCamera", "production/ccp/LightBoard"], function(ccpwgl, Set, Stage, SceneCamera, LightBoard) {
  "use strict";

  var sceneOptions = {

  };

  var onSceneCreated = function(scene) {
    var stage = new Stage(scene);
    var sceneCamera = new SceneCamera();
    var lightBoard = new LightBoard(scene);

    ccpwgl.setCamera(sceneCamera);

    return new Set(scene, stage, sceneCamera, lightBoard);
  };

  var productionManager = function() {

  };

  /**
    See ccpwgl.setResourcePath()

    @method setResourcePath
    @param {string} namespace Resource namespace.
    @param {string} url URL to resource root. Needs to have a trailing slash.
  */
  productionManager.setResourcePath = function(namespace, url) {
    ccpwgl.setResourcePath(namespace, url);
  };

  productionManager.createSet = function(canvas, backgroundUrl) {
    ccpwgl.initialize(canvas, sceneOptions);

    var scene = ccpwgl.loadScene(backgroundUrl);
    // TODO: create promise & hook up to onLoaded callback

    return onSceneCreated(scene);
  };

  productionManager.createChromaKeyedSet = function(canvas, backgroundColor) {
    ccpwgl.initialize(canvas, sceneOptions);

    var scene = ccpwgl.createScene(backgroundColor);

    return onSceneCreated(scene);
  };

  return productionManager;
});