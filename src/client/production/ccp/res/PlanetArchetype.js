/**
An archetype for planets

@module Client
@class PlanetArchetype
*/
define(["production/ccp/res/Planet"], function(Planet) {
  "use strict";

  var PlanetArchetype = function() {
    this.resourceUrl = "";
    this.itemId = 0;
    this.atmosphereUrl = null;
    this.heightMap1Url = null;
    this.heightMap2Url = null;
  };

  PlanetArchetype.prototype.request = function(ccpwgl, scene, deferred) {
    var obj = scene.loadPlanet(this.itemId, this.resourceUrl, this.atmosphereUrl, this.heightMap1Url, this.heightMap2Url);

    deferred.resolve(new Planet(ccpwgl, scene, obj));
  };

  PlanetArchetype.prototype.setItemId = function(value) {
    this.itemId = value;

    return this;
  };

  PlanetArchetype.prototype.setResourceUrl = function(value) {
    this.resourceUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setAtomsphereUrl = function(value) {
    this.atmosphereUrl = value;

    return this;
  };

  PlanetArchetype.prototype.setHeightMap1Url = function(value) {
    this.heightMap1Url = value;

    return this;
  };

  PlanetArchetype.prototype.setHeightMap2Url = function(value) {
    this.heightMap2Url = value;

    return this;
  };

  return PlanetArchetype;
});