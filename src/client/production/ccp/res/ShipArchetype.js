/**
An archetype for ships

@module Client
@class ShipArchetype
*/
define(["production/ccp/res/Ship"], function(Ship) {
  "use strict";

  var ShipArchetype = function() {
    this.resourceUrl = "";
  };

  ShipArchetype.prototype.request = function(ccpwgl, scene, deferred) {
    return scene.loadShip(this.resourceUrl, function() {
      deferred.resolve(new Ship(ccpwgl, this));
    });
  };

  ShipArchetype.prototype.setResourceUrl = function(value) {
    this.resourceUrl = value;

    return this;
  };

  return ShipArchetype;
});