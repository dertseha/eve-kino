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

      this.camera = {
        cameraState: createEmptyCameraState(),
        getStateData: function() {
          return this.cameraState;
        },
        setStateData: function(state) {
          this.cameraState = state;
        }
      };

      this.track = new Track([]);

      this.commandChannel = {
        getCommands: function() {
          return commands;
        }
      };
      this.operator = new CameraOperator(this.camera, this.track);
      this.operator.setCommandChannel(this.commandChannel);
    },

    "should leave camera state intact when no new commands": function() {
      this.operator.updateCamera();

      assert.equals(this.camera.cameraState, createEmptyCameraState());
    },

    "should apply commands to camera state if given": function() {
      this.commands.moveRight = 0.01;
      this.commands.moveUp = 0.02;
      this.commands.moveForward = 0.03;

      this.operator.updateCamera();

      refute.equals(this.camera.cameraState.position, [0, 0, 0]);
    }
  });
});