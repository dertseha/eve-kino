/**
An archetype for sceneries (generic objects that can only be placed/rotated)

@module Client
@class SceneryArchetype
*/
define(["production/ccp/res/Scenery"], function(Scenery) {
  "use strict";

  var SceneryArchetype = function() {
    this.resourceUrl = "";
  };

  SceneryArchetype.prototype.request = function(ccpwgl, scene, deferred) {
    return scene.loadObject(this.resourceUrl, function() {
      deferred.resolve(new Scenery(ccpwgl, this));
    });
  };

  SceneryArchetype.prototype.setResourceUrl = function(value) {
    this.resourceUrl = value;

    return this;
  };

  return SceneryArchetype;
});