/**
A camera operator handles a camera when directed to

@module Client
@class Director
*/
define(["3d/Helper"], function(Helper) {
  "use strict";

  var actionNames = ["pitchUpDown", "rollClockwise", "yawRightLeft", "moveUpDown", "moveForwardBackward", "moveRightLeft"];

  var CameraOperator = function(commandChannel) {
    this.commandChannel = commandChannel;
  };

  CameraOperator.getActionNames = function() {
    return actionNames.slice(0);
  };

  CameraOperator.prototype.getCameraStateData = function(lastState) {
    var newState = lastState;
    var commands = this.commandChannel.getCommands();

    newState.rotation[0] += commands.rollClockwise * Helper.VIEW_ROTATION_ROLL_CLOCKWISE * 0.02;
    newState.rotation[1] += commands.pitchUpDown * Helper.VIEW_ROTATION_PITCH_UP * 0.02;
    newState.rotation[2] += commands.yawRightLeft * Helper.VIEW_ROTATION_YAW_RIGHT * 0.02;

    return newState;
  };

  return CameraOperator;
});