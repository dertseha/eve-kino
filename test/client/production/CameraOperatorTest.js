/* global buster */
define(["production/CameraOperator", "production/Track"], function(CameraOperator, Track) {
  "use strict";

  var assert = buster.assert;
  var refute = buster.refute;

  function createEmptyCameraState() {
    var cameraState = {
      position: [0, 0, 0],
      rotation: [0, 0, 0, 1],
      modelRotation: [0, 0, 0, 1]
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

      this.track = new Track([]);

      this.commandChannel = {
        getCommands: function() {
          return commands;
        }
      };
      this.operator = new CameraOperator(this.commandChannel, this.track);

      this.cameraState = createEmptyCameraState();
    },

    "should leave camera state intact when no new commands": function() {
      var result = this.operator.getCameraStateData(this.cameraState);

      assert.equals(result, createEmptyCameraState());
    },

    "should apply commands to camera state if given": function() {
      this.commands.moveRight = 0.01;
      this.commands.moveUp = 0.02;
      this.commands.moveForward = 0.03;

      var result = this.operator.getCameraStateData(this.cameraState);

      refute.equals(result.position, [0, 0, 0]);
    }
  });
});