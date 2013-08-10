/* global buster */
define(["simulation/Actuator", "util/time/TimeWatch"], function(Actuator, TimeWatch) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("Actuator", {
    setUp: function() {
      this.timeWatch = new TimeWatch();
    },

    "should have a current value of 0 when created": function() {
      var actuator = new Actuator();
      var result = actuator.getCurrentValue();

      assert.equals(result, 0.0);
    },

    "should reach maximum when requested and maximum time passed": function() {
      var actuator = new Actuator(this.timeWatch, 10);

      this.timeWatch.setTime(10);

      actuator.moveTo(1.0);

      var result = actuator.getCurrentValue();

      assert.equals(result, 1.0);
    },

    "should be half way there when maximum requested and half time passed": function() {
      var actuator = new Actuator(this.timeWatch, 10);

      this.timeWatch.setTime(5);

      actuator.moveTo(1.0);

      var result = actuator.getCurrentValue();

      assert.equals(result, 0.5);
    },

    "should be able to go down as well": function() {
      var actuator = new Actuator(this.timeWatch, 10);
      this.timeWatch.setTime(5);
      actuator.moveTo(1.0);

      this.timeWatch.setTime(7.5);
      actuator.moveTo(0.125);

      var result = actuator.getCurrentValue();

      assert.equals(result, 0.25);
    }

  });
});