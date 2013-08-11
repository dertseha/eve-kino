/**
The helper is a static object providing some helper methods for mathematics.

@module Client
@class MathHelper
*/
define([], function() {
  "use strict";

  var getPointOnLine = function(pointA, pointB, offset) {
    var result = {
      x: pointA.x + ((pointB.x - pointA.x) * offset),
      y: pointA.y + ((pointB.y - pointA.y) * offset)
    };

    return result;
  };

  var bezierFoldEdges = function(points, offset) {
    var result = [];
    var i;

    for (i = 0; i < (points.length - 1); i++) {
      result.push(getPointOnLine(points[i], points[i + 1], offset));
    }

    return result;
  };

  /**
   * Calculate the Y from a given X on a bezier curve. X is not specified in
   * an absolute coordinate, but the offset in the range of 0..1
   *
   * @method bezierGetY
   * @return {Number} The resulting Y
   */
  var bezierGetY = function(points, x) {
    var result = 0.0;
    var temp = points;

    while (temp.length > 1) {
      temp = bezierFoldEdges(temp, x);
    }

    return temp[0].y;
  };

  var helper = {
    bezierGetY: bezierGetY
  };

  return helper;
});