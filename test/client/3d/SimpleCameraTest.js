/* global buster */
define(["3d/SimpleCamera", "lib/gl-matrix"], function(SimpleCamera, glMatrix) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("SimpleCamera", {
    setUp: function() {
      this.camera = new SimpleCamera();
    },

    "should be an object": function() {
      assert.isObject(this.camera);
    },

    "should implement camera interface": function() {
      assert.isFunction(this.camera.update);
      assert.isFunction(this.camera.getProjection);
      assert.isFunction(this.camera.getView);
    },

    "should have a default view of identity": function() {
      var expected = glMatrix.mat4.identity();
      var result = this.camera.getView();

      assert.equals(result, expected);
    }
  });
});