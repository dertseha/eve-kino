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
   * Iterates through all props and passes them to a callback
   *
   * @method forEachProp
   * @param {Function} callback to receive each prop in succession
   */
  Stage.prototype.forEachProp = function(callback) {
    this.props.forEach(callback);
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