/**
An archetype for planets

@module Client
@class PlanetArchetype
*/
define(["production/ccp/res/Planet"], function(Planet) {
  "use strict";

  var PlanetArchetype = function(propData) {
    this.propData = propData;
  };

  PlanetArchetype.propType = "planet";

  PlanetArchetype.prototype.request = function(ccpwgl, scene, deferred, id) {
    var propData = this.propData;
    var obj = scene.loadPlanet(this.propData.itemId, this.propData.resourceUrl,
      this.propData.atmosphereUrl, this.propData.heightMap1Url, this.propData.heightMap2Url);

    deferred.resolve(new Planet(obj, id, propData));
  };

  PlanetArchetype.prototype.setItemId = function(value) {
    this.propData.itemId = value;

    return this;
  };

  PlanetArchetype.prototype.setResourceUrl = function(value) {
    this.propData.resourceUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setAtmosphereUrl = function(value) {
    this.propData.atmosphereUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setHeightMap1Url = function(value) {
    this.propData.heightMap1Url = value;

    return this;
  };

  PlanetArchetype.prototype.setHeightMap2Url = function(value) {
    this.propData.heightMap2Url = value;

    return this;
  };

  return PlanetArchetype;
});