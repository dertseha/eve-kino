/* global buster */
define(["Camera"], function(Camera) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("Camera", {
    setUp: function() {
      this.sceneCamera = {
        getStateData: function() {},
        setStateData: function() {}
      };
      this.camera = new Camera(this.sceneCamera);
    },

    "should not change state without influence": function() {
      var testState = {
        test: 1234
      };
      var spy = this.spy(this.sceneCamera, "setStateData");

      this.sceneCamera.getStateData = function() {
        return Object.create(testState);
      };

      this.camera.updateFrame();

      assert.calledWithExactly(spy, testState);
    },

    "should change camera state from external input": function() {
      var testState = {
        test: 1234
      };
      var operator = {
        getCameraStateData: function() {
          return testState;
        }
      };
      var spy = this.spy(this.sceneCamera, "setStateData");

      this.camera.setOperator(operator);
      this.camera.updateFrame();

      assert.calledWithExactly(spy, testState);
    }

  });
});