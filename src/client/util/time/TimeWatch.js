/**
This time watch keeps track of deltas between calls of setTime() . 

@module Client
@class TimeWatch
*/
define([], function() {
  "use strict";

  var TimeWatch = function(initTime) {
    this.reset(initTime);
  };

  /**
   * @method reset
   * @param {Number} time the new time
   */
  TimeWatch.prototype.reset = function(time) {
    this.lastTime = time;
    this.delta = 0.0;
  };

  /**
   * @method setTime
   * @param {Number} time the new time
   */
  TimeWatch.prototype.setTime = function(time) {
    this.delta = time - this.lastTime;
    this.lastTime = time;
  };

  /**
   * @method getDelta
   * @return {Number} Delta time since last checkpoint. Unit in seconds.
   */
  TimeWatch.prototype.getDelta = function() {
    return this.delta;
  };

  return TimeWatch;
});