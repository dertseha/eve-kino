/*jshint maxparams:100 */

/**
The production manager is responsible for creating a set with all necessary
deparments. 

@module Client
@class ProductionManager
*/
define(["lib/q", "production/ccp/SyncSource", "production/ccp/Set", "production/ccp/Stage", "production/ccp/SceneCamera", "production/ccp/LightBoard"],

function(q, SyncSource, Set, Stage, SceneCamera, LightBoard) {
  "use strict";

  var sceneOptions = {

  };

  var onSceneCreated = function(ccpwgl, scene) {
    var components = {
      ccpwgl: ccpwgl,
      scene: scene,
      syncSource: new SyncSource(ccpwgl, scene),
      stage: new Stage(ccpwgl, scene),
      sceneCamera: new SceneCamera(),
      lightBoard: new LightBoard(ccpwgl, scene)
    };

    ccpwgl.setCamera(components.sceneCamera);

    return new Set(components);
  };

  var createSceneDeferred = function(ccpwgl, canvas, strategy) {
    var deferred = q.defer();
    var resolveCallback = function(scene) {
      var set = onSceneCreated(ccpwgl, scene);

      deferred.resolve(set);
    };

    try {
      ccpwgl.initialize(canvas, sceneOptions);

      strategy(resolveCallback);
    } catch (ex) {
      deferred.reject(ex);
    }

    return deferred.promise;
  };

  var ProductionManager = function(ccpwgl) {
    this.ccpwgl = ccpwgl;
  };

  /**
    See ccpwgl.setResourcePath()

    @method setResourcePath
    @param {string} namespace Resource namespace.
    @param {string} url URL to resource root. Needs to have a trailing slash.
  */
  ProductionManager.prototype.setResourcePath = function(namespace, url) {
    this.ccpwgl.setResourcePath(namespace, url);
  };

  ProductionManager.prototype.createSet = function(canvas, backgroundUrl) {
    var ccpwgl = this.ccpwgl;

    return createSceneDeferred(ccpwgl, canvas, function(callback) {
      var onLoad = function() {
        callback(this);
      };

      ccpwgl.loadScene(backgroundUrl, onLoad);
    });
  };

  ProductionManager.prototype.createChromaKeyedSet = function(canvas, backgroundColor) {
    var ccpwgl = this.ccpwgl;

    return createSceneDeferred(ccpwgl, canvas, function(callback) {
      var scene = ccpwgl.createScene(backgroundColor);

      callback(scene);
    });
  };

  return ProductionManager;
});