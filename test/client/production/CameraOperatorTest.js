/* global buster */
define(["production/CameraOperator", "production/Track", "util/time/TimeWatch"], function(CameraOperator, Track, TimeWatch) {
  "use strict";

  var assert = buster.assert;
  var refute = buster.refute;

  function createEmptyCameraState() {
    var cameraState = {
      position: [0, 0, 0],
      rotation: [0, 0, 0, 1],
      viewOffset: [0, 0, 0]
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
      this.timeWatch = new TimeWatch();
      this.timeWatch.setTime(1.0);

      this.commandChannel = {
        getCommands: function() {
          return commands;
        }
      };
      this.operator = new CameraOperator(this.camera, this.track, this.timeWatch);
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