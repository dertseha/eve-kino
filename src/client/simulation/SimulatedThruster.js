/**
The simulated thruster provides velocity according to a function over time.
(Being code, everything is 'simulated', this one is meant to be that if it
were real, it would provide thrust according a table, defying physics)

@module Client
@class SimulatedThruster
*/
define([], function() {
  "use strict";

  /**
   * @constructor
   * @param {Actuator} actuator for the time based index
   * @param {Number} maxSpeed the maximum speed (thrust)
   * @param {Function} velocityTimeFunction a function taking a time index returning speed
   */
  var SimulatedThruster = function(actuator, maxSpeed, velocityTimeFunction) {
    this.actuator = actuator;
    this.maxSpeed = maxSpeed;
    this.velocityTimeFunction = velocityTimeFunction;
  };

  /**
   * @method getSpeed
   * @param {Number} power [0..1] put into the thruster
   * @return {Number} the speed the thruster provides
   */
  SimulatedThruster.prototype.getSpeed = function(power) {
    var time = this.actuator.moveTo(power);
    var speed = this.velocityTimeFunction(time);

    return speed * this.maxSpeed;
  };

  return SimulatedThruster;
});