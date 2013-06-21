/* global buster */
define(["3d/SceneCamera", "3d/Helper", "lib/gl-matrix"], function(SceneCamera, helper, glMatrix) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("SceneCamera", {
    setUp: function() {
      this.camera = new SceneCamera();
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
    },

    "should have a default position of zero": function() {
      var result = this.camera.getPosition();
      var expected = [0, 0, 0];

      assert.equals(result, expected);
    },

    "should allow changing of position": function() {
      var expected = [10, 20, 30];

      this.camera.setPosition(expected);
      var result = this.camera.getPosition();

      assert.equals(result, expected);
    },

    "should have a default pitch of 0.0": function() {
      var result = this.camera.getPitch();

      assert.equals(result, 0.0);
    },

    "should have a default roll of 0.0": function() {
      var result = this.camera.getRoll();

      assert.equals(result, 0.0);
    },

    "should have a default yaw of 0.0": function() {
      var result = this.camera.getYaw();

      assert.equals(result, 0.0);
    },

    "should allow changing of rotation, such as pitch": function() {
      var testValue = 90.0;
      this.camera.setPitch(testValue);
      var result = this.camera.getPitch();

      assert.equals(result, testValue);
    },

    "should have a rotated view after changing rotation": function() {
      var expected = glMatrix.mat4.identity();
      var radians = helper.degreeToRad(45);

      glMatrix.mat4.rotate(expected, radians, helper.VIEW_VECTOR_RIGHT);

      this.camera.setPitch(radians);
      var result = this.camera.getView();

      assert.equals(result, expected);
    }
  });
});