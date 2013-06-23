/* global buster */
define(["production/ccp/SceneCamera", "util/GlHelper", "lib/gl-matrix"], function(SceneCamera, helper, glMatrix) {
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

    "should have a default rotation of identity": function() {
      var expected = [0, 0, 0, 1];
      var result = this.camera.getRotation();

      assert.equals(result, expected);
    },

    "should have a changed view after changing rotation": function() {
      var expected = glMatrix.mat4.identity();
      var radians = helper.degreeToRad(45);
      var rotation = glMatrix.quat4.fromAngleAxis(radians, helper.VIEW_VECTOR_RIGHT, glMatrix.quat4.create());

      glMatrix.mat4.rotate(expected, radians, helper.VIEW_VECTOR_RIGHT);

      this.camera.setRotation(rotation);

      var result = this.camera.getView();

      assert.equals(result, expected);
    },

    "should have a changed view after changing position": function() {
      var expected = glMatrix.mat4.identity();
      var position = glMatrix.vec3.create([10, 20, 30]);

      glMatrix.mat4.translate(expected, position);

      this.camera.setPosition(position);

      var result = this.camera.getView();

      assert.equals(result, expected);
    }

  });
});