/*jshint maxparams:10 */

/**
The production manager is responsible for creating a set with all necessary
deparments. 

@module Client
@class ProductionManager
*/
define(["lib/q", "production/ccp/SyncSource", "production/ccp/Set", "production/ccp/Stage",
    "production/ccp/SceneCamera", "production/ccp/LightBoard", "production/ccp/res/ArchetypeList"
  ],

  function(q, SyncSource, Set, Stage, SceneCamera, LightBoard, archetypeList) {
    "use strict";

    var archetypesByType = {};

    archetypeList.forEach(function(Constructor) {
      archetypesByType[Constructor.propType] = Constructor;
    });

    var sceneOptions = {};

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

    ProductionManager.prototype.getQualityOptions = function() {
      var options = [];
      var valueOption = function(title, id) {
        var opt = {
          title: title,
          id: id
        };

        return opt;
      };

      // Texture quality options are currently disabled, as long as
      // we only have the HIGH ones available.
      //
      // options.push({
      //   title: "Texture Quality",
      //   field: "textureQuality",
      //   defaultValue: this.ccpwgl.TextureQuality.HIGH,
      //   values: [valueOption("High", this.ccpwgl.TextureQuality.HIGH),
      //     valueOption("Medium", this.ccpwgl.TextureQuality.MEDIUM),
      //     valueOption("Low", this.ccpwgl.TextureQuality.LOW)
      //   ]
      // });

      options.push({
        title: "Shader Quality",
        field: "shaderQuality",
        defaultValue: this.ccpwgl.ShaderQuality.HIGH,
        values: [valueOption("High", this.ccpwgl.ShaderQuality.HIGH),
          valueOption("Low", this.ccpwgl.ShaderQuality.LOW)
        ]
      });

      options.push({
        title: "Anisotropic Filter",
        field: "anisotropicFilter",
        defaultValue: true,
        values: [valueOption("Yes", true),
          valueOption("No", false)
        ]
      });

      options.push({
        title: "Postprocessing",
        field: "postprocessing",
        defaultValue: false,
        values: [valueOption("Yes", true),
          valueOption("No", false)
        ]
      });

      return options;
    };

    ProductionManager.prototype.setQualityOptions = function(options) {
      var name;

      for (name in options) {
        sceneOptions[name] = options[name];
      }
    };

    /**
     * See ccpwgl.setResourcePath()
     *
     * @method setResourcePath
     * @param {string} namespace Resource namespace.
     * @param {string} url URL to resource root. Needs to have a trailing slash.
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

    ProductionManager.prototype.getArchetypeForProp = function(propData) {
      var Constructor = archetypesByType[propData.propType];
      var arch = null;

      if (Constructor) {
        arch = new Constructor(propData);
      }

      return arch;
    };

    return ProductionManager;
  });