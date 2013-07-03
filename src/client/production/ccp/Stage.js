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

    this.propCounter = 1;
    this.props = [];
  };

  /**
   * @method enter
   * @param {Object} archetype the archetype to request
   * @return {Promise} for the creation
   */
  Stage.prototype.enter = function(archetype) {
    var deferred = q.defer();
    var that = this;

    archetype.request(this.ccpwgl, this.scene, deferred, this.propCounter++);
    deferred.promise.then(function(prop) {
      that.props.push(prop);
    });

    return deferred.promise;
  };

  Stage.prototype.getProps = function() {
    return this.props;
  };

  return Stage;
});