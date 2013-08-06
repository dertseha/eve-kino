/**
The resource library contains entries for various set pieces available from
the production manager.

@module Client
@class ResourceLibrary
*/
define([], function() {
  "use strict";

  var ResourceLibrary = function(namespace) {
    this.namespace = namespace;
    this.sceneBackgrounds = [];
    this.ships = [];
    this.sceneries = [];
  };

  ResourceLibrary.prototype.getNamespace = function() {
    return this.namespace;
  };

  ResourceLibrary.prototype.addSceneBackground = function(entry) {
    this.sceneBackgrounds.push(entry);
  };

  ResourceLibrary.prototype.forEachSceneBackground = function(callback) {
    this.sceneBackgrounds.forEach(callback);
  };

  ResourceLibrary.prototype.addShip = function(entry) {
    this.ships.push(entry);
  };

  ResourceLibrary.prototype.forEachShip = function(callback) {
    this.ships.forEach(callback);
  };

  ResourceLibrary.prototype.addScenery = function(entry) {
    this.sceneries.push(entry);
  };

  ResourceLibrary.prototype.forEachScenery = function(callback) {
    this.sceneries.forEach(callback);
  };

  return ResourceLibrary;
});