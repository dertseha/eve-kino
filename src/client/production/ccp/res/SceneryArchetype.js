/**
An archetype for sceneries (generic objects that can only be placed/rotated)

@module Client
@class SceneryArchetype
*/
define(["production/ccp/res/Scenery"], function(Scenery) {
  "use strict";

  var SceneryArchetype = function(propData) {
    this.propData = propData || {};
    this.propData.propType = SceneryArchetype.propType;
  };

  SceneryArchetype.propType = "scenery";

  SceneryArchetype.prototype.request = function(ccpwgl, scene, deferred, id) {
    var propData = this.propData;

    return scene.loadObject(this.propData.resourceUrl, function() {
      deferred.resolve(new Scenery(ccpwgl, this, id, propData));
    });
  };

  SceneryArchetype.prototype.setResourceUrl = function(value) {
    this.propData.resourceUrl = value;

    return this;
  };

  return SceneryArchetype;
});