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

    this.resources = {};
  };

  ResourceLibrary.prototype.getNamespace = function() {
    return this.namespace;
  };

  ResourceLibrary.prototype.addResource = function(type, entry) {
    var list = this.resources[type];

    if (!list) {
      this.resources[type] = list = [];
    }
    list.push(entry);
  };

  ResourceLibrary.prototype.forEachResource = function(type, callback) {
    if (type in this.resources) {
      this.resources[type].forEach(callback);
    }
  };

  return ResourceLibrary;
});