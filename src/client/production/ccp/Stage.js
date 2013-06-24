/**
The Stage holds all the set pieces and actors

@module Client
@class Stage
*/
define(["lib/q"], function(q) {
  "use strict";

  var Stage = function(ccpwgl, scene) {
    this.ccpwgl = ccpwgl;
    this.scene = scene;
  };

  Stage.prototype.enter = function(archetype) {
    var deferred = q.defer();

    archetype.request(this.ccpwgl, this.scene, deferred);

    return deferred.promise;
  };

  return Stage;
});