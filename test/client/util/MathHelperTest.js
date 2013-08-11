/* global buster */
define(["util/MathHelper"], function(helper) {
  "use strict";

  var assert = buster.assert;

  var makePoint = function(x, y) {
    var point = {
      x: x,
      y: y
    };

    return point;
  };

  buster.testCase("MathHelper", {

    "bezierGetY": {

      "should return X of single point in list": function() {
        var result = helper.bezierGetY([makePoint(0.3, 0.75)], 0.25);

        assert.equals(result, 0.75);
      },

      "should return 0.5 for x=0.5 in 0|0, 1|0": function() {
        var result = helper.bezierGetY([makePoint(0.0, 0.0), makePoint(1.0, 1.0)], 0.5);

        assert.equals(result, 0.5);
      },

      "should return 0.75 for x=0.75 in 0|0, 0.5|0.5 1|0": function() {
        var result = helper.bezierGetY([makePoint(0.0, 0.0), makePoint(0.5, 0.5), makePoint(1.0, 1.0)], 0.75);

        assert.equals(result, 0.75);
      }
    }
  });
});