/**
A camera operator handles a camera when directed to

@module Client
@class Director
*/
define([], function() {
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

    newState.rotation[0] += commands.rollClockwise;
    newState.rotation[1] += commands.pitchUpDown;
    newState.rotation[2] += commands.yawRightLeft;

    return newState;
  };

  return CameraOperator;
});