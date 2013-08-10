/*jshint maxparams:10 */

/**
The production manager is responsible for creating a set with all necessary
deparments. 

@module Client
@class ProductionManager
*/
define(["lib/q", "production/ccp/SyncSource", "production/ccp/Set", "production/ccp/Stage",
    "production/ccp/SceneCamera", "production/ccp/LightBoard", "production/ccp/res/ArchetypeList",
    "production/ResourceLibrary", "lib/ccpStandardGraphicIds"
  ],

  function(q, SyncSource, Set, Stage, SceneCamera, LightBoard, archetypeList, ResourceLibrary, ccpStandardGraphicIds) {
    "use strict";

    var archetypesByType = {};
    var standardResourceLibrary = null;

    archetypeList.forEach(function(Constructor) {
      archetypesByType[Constructor.propType] = Constructor;
    });

    var forEachCcpStandardId = function(callback) {
      var id;
      var entry;

      for (id in ccpStandardGraphicIds) {
        entry = ccpStandardGraphicIds[id];
        if (entry.graphicFile) {
          callback(parseInt(id, 10), entry);
        }
      }
    };

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

    ProductionManager.STANDARD_RES_NAMESPACE = "res";
    ProductionManager.STANDARD_RES_URL = "//web.ccpgamescdn.com/ccpwgl/res/";

    var sceneRegExp = /.*\/scene\/.*red$/i;
    var shipRegExp = /.*\/model\/ship\/.*red$/i;
    var wreckRegExp = /.*wreck.*/i;
    var planetRegExp = /.*\/planet\/.*red$/i;
    var starRegExp = /.*\/model\/lensflare\/.*red$/i;
    var turretRegExp = /.*\/model\/turret\/.*red$/i;
    var objRegExp = /.*red$/i;
    var ignoredRegExp = /.*(character|interior|placeable).*/i;

    var isSceneBackground = function(entry) {
      return sceneRegExp.test(entry.graphicFile);
    };

    var isShip = function(entry) {
      return shipRegExp.test(entry.graphicFile) && !wreckRegExp.test(entry.graphicFile);
    };

    var isPlanet = function(entry) {
      return planetRegExp.test(entry.graphicFile);
    };

    var isStar = function(entry) {
      return starRegExp.test(entry.graphicFile);
    };

    var isTurret = function(entry) {
      return turretRegExp.test(entry.graphicFile);
    };

    var isObject = function(entry) {
      return objRegExp.test(entry.graphicFile) && !ignoredRegExp.test(entry.graphicFile);
    };

    var createSceneBackgroundEntry = (function() {
      var entryPrototype = {
        toString: function() {
          return this.resourceUrl;
        }
      };

      return function(entry) {
        var bgEntry = Object.create(entryPrototype);

        bgEntry.resourceUrl = entry.graphicFile;

        return bgEntry;
      };
    })();

    var createStarEntry = (function() {
      var entryPrototype = {
        toString: function() {
          return this.resourceUrl;
        }
      };

      return function(entry) {
        var starEntry = Object.create(entryPrototype);

        starEntry.resourceUrl = entry.graphicFile;

        return starEntry;
      };
    })();

    var createShipArchetype = function(entry) {
      var Constructor = archetypesByType.ship;
      var propData = {
        resourceUrl: entry.graphicFile
      };

      return new Constructor(propData, entry.description);
    };

    var createSceneryArchetype = function(entry) {
      var Constructor = archetypesByType.scenery;
      var propData = {
        resourceUrl: entry.graphicFile
      };

      return new Constructor(propData, entry.description);
    };

    ProductionManager.getStandardResourceLibrary = function() {

      if (!standardResourceLibrary) {
        standardResourceLibrary = new ResourceLibrary(ProductionManager.STANDARD_RES_NAMESPACE);
        forEachCcpStandardId(function(id, entry) {
          if (isSceneBackground(entry)) {
            standardResourceLibrary.addResource("sceneBg", createSceneBackgroundEntry(entry));
          } else if (isShip(entry)) {
            standardResourceLibrary.addResource("ship", createShipArchetype(entry));
          } else if (isPlanet(entry)) {
            // TODO
          } else if (isStar(entry)) {
            standardResourceLibrary.addResource("star", createStarEntry(entry));
          } else if (isTurret(entry)) {
            // TODO
          } else if (isObject(entry)) {
            standardResourceLibrary.addResource("scenery", createSceneryArchetype(entry));
          }
        });
      }

      return standardResourceLibrary;
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
     * @return {Deferred} A deferred that will resolve with a resource library
     */
    ProductionManager.prototype.setResourcePath = function(namespace, url) {
      var deferred = q.defer();

      this.ccpwgl.setResourcePath(namespace, url);
      if (namespace === ProductionManager.STANDARD_RES_NAMESPACE) {
        deferred.resolve(ProductionManager.getStandardResourceLibrary());
      } else {
        deferred.reject("Not supported");
      }

      return deferred.promise;
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