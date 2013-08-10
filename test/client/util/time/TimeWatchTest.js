/* global buster */
define(["util/time/TimeWatch"], function(TimeWatch) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("TimeWatch", {
    setUp: function() {
      this.timeWatch = new TimeWatch(0);
    },

    "should have a delta of 0.0 after construction": function() {
      assert.equals(this.timeWatch.getDelta(), 0.0);
    },

    "should update delta after first call of setTime()": function() {
      this.timeWatch.setTime(10);

      assert.equals(this.timeWatch.getDelta(), 10.0);
    },

    "should provide relative delta between consecutive call of setTime()": function() {
      this.timeWatch.setTime(20);
      this.timeWatch.setTime(22);

      assert.equals(this.timeWatch.getDelta(), 2.0);
    },

    "should have a delta of 0.0 after resetting": function() {
      this.timeWatch.setTime(30);

      this.timeWatch.reset(10);

      assert.equals(this.timeWatch.getDelta(), 0.0);
    }
  });
});