/**
This is a time source that provides a second count based on a sync clock.

@module Client
@class ClockedTimeSource
*/
define([], function() {
  "use strict";

  var ClockedTimeSource = function(hertz) {
    this.hertz = hertz;
    this.delta = 1 / hertz;

    this.time = 0.0;
  };

  /**
   * Increments the time by one tick
   * @method tick
   */
  ClockedTimeSource.prototype.tick = function() {
    this.time += this.delta;
  };

  /**
   * sets the time according to a specific amount of ticks
   * @method setTickCount
   * @param {Number} ticks amount of ticks
   */
  ClockedTimeSource.prototype.setTickCount = function(ticks) {
    this.time = ticks / this.hertz;
  };

  /**
   * @method now
   * @return {Number} Seconds (including fractions)
   */
  ClockedTimeSource.prototype.now = function() {
    return this.time;
  };

  return ClockedTimeSource;
});