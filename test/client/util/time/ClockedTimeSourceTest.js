/* global buster */
define(["util/time/ClockedTimeSource"], function(ClockedTimeSource) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("ClockedTimeSource", {

    "should have a time of 0.0 after construction": function() {
      var timeSource = new ClockedTimeSource();
      var result = timeSource.now();

      assert.equals(result, 0.0);
    },

    "should have a time of 0.1 after first tick at rate of 10Hz": function() {
      var timeSource = new ClockedTimeSource(10);
      timeSource.tick();

      var result = timeSource.now();

      assert.equals(result, 0.1);
    },

    "should allow to jump to a specific tick count": function() {
      var timeSource = new ClockedTimeSource(10);
      timeSource.setTickCount(5);

      var result = timeSource.now();

      assert.equals(result, 0.5);
    }
  });
});