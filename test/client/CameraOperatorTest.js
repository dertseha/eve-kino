/* global buster */
define(["CameraOperator"], function(CameraOperator) {
  "use strict";

  var assert = buster.assert;

  function createEmptyCameraState() {
    var cameraState = {
      position: [0, 0, 0],
      rotation: [0, 0, 0]
    };

    return cameraState;
  }

  buster.testCase("CameraOperator", {
    setUp: function() {
      var commands = {};
      this.commands = commands;
      CameraOperator.getActionNames().forEach(function(actionName) {
        commands[actionName] = 0.0;
      });

      this.commandChannel = {
        getNewCommands: function() {
          return commands;
        }
      };
      this.operator = new CameraOperator(this.commandChannel);

      this.cameraState = createEmptyCameraState();
    },

    "should leave camera state intact when no new commands": function() {
      var result = this.operator.getCameraStateData(this.cameraState);

      assert.equals(result, createEmptyCameraState());
    },

    "should apply commands to camera state if given": function() {
      this.commands.rollClockwise = -0.01;
      this.commands.pitchUpDown = 0.02;
      this.commands.yawRightLeft = 0.03;

      var result = this.operator.getCameraStateData(this.cameraState);

      assert.equals(result.rotation, [-0.01, 0.02, 0.03]);
    }
  });
});