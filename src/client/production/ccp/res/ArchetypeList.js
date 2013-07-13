/**
A list of archetypes

@module Client
@class ArchetypeList
*/
define(["production/ccp/res/PlanetArchetype", "production/ccp/res/SceneryArchetype", "production/ccp/res/ShipArchetype"], function() {
  "use strict";

  var list = [];
  var i;

  for (i = 0; i < arguments.length; i++) {
    list.push(arguments[i]);
  }

  return list;
});