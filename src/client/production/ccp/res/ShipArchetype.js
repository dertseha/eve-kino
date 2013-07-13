/**
An archetype for ships

@module Client
@class ShipArchetype
*/
define(["production/ccp/res/Ship"], function(Ship) {
  "use strict";

  var ShipArchetype = function(propData) {
    this.propData = propData;
  };

  ShipArchetype.propType = "ship";

  ShipArchetype.prototype.request = function(ccpwgl, scene, deferred, id) {
    var propData = this.propData;

    return scene.loadShip(this.propData.resourceUrl, function() {
      deferred.resolve(new Ship(ccpwgl, this, id, propData));
    });
  };

  ShipArchetype.prototype.setResourceUrl = function(value) {
    this.propData.resourceUrl = value;

    return this;
  };

  return ShipArchetype;
});