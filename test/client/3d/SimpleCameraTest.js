/* global buster */
define(["3d/SimpleCamera"], function(SimpleCamera) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("SimpleCamera", {
    setUp: function() {
      this.camera = new SimpleCamera();
    },

    "is an object": function() {
      assert.isObject(this.camera);
    }
  });
});