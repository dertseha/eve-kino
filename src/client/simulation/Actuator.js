/**
The actuator is a time-bound "motor" that tries to achieve a certain value
out of a range of 0..1 within a certain time.
The motor moves from one extreme to the other using the maximum time.

@module Client
@class Actuator
*/
define([], function() {
  "use strict";

  var Actuator = function(timeWatch, timeSpan) {
    this.timeWatch = timeWatch;
    this.timeSpan = timeSpan;

    this.currentValue = 0.0;
  };

  /**
   * @method getCurrentValue
   * @return {Number} the current value of the actuator
   */
  Actuator.prototype.getCurrentValue = function() {
    return this.currentValue;
  };

  /**
   * @method moveTo
   * @param {Number} dest the destination to move to
   * @return {Number} the current value of the actuator
   */
  Actuator.prototype.moveTo = function(dest) {
    var timePassed = this.timeWatch.getDelta();
    var distance = timePassed / this.timeSpan;
    var missing = Math.abs(this.currentValue - dest);

    if (distance < missing) {
      this.currentValue += (dest >= this.currentValue) ? distance : -distance;
    } else {
      this.currentValue = dest;
    }

    return this.currentValue;
  };

  return Actuator;
});