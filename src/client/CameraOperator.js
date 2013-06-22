/**
A camera operator handles a camera when directed to

@module Client
@class Director
*/
define(["3d/Helper"], function(helper) {
  "use strict";

  var actionNames = ["pitchUpDown", "rollClockwise", "yawRightLeft", "moveUpDown", "moveForwardBackward", "moveRightLeft"];
  var rotationHelper = [{
      rad: 0.0,
      vector: helper.VIEW_VECTOR_RIGHT
    }, {
      rad: 0.0,
      vector: helper.VIEW_VECTOR_UP
    }, {
      rad: 0.0,
      vector: helper.VIEW_VECTOR_FORWARD
    }
  ];

  var CameraOperator = function(commandChannel) {
    this.commandChannel = commandChannel;
  };

  CameraOperator.getActionNames = function() {
    return actionNames.slice(0);
  };

  CameraOperator.prototype.getCameraStateData = function(lastState) {
    var newState = lastState;
    var commands = this.commandChannel.getCommands();

    rotationHelper[2].rad = commands.rollClockwise * helper.VIEW_ROTATION_ROLL_CLOCKWISE * 0.02;
    rotationHelper[0].rad = -commands.pitchUpDown * helper.VIEW_ROTATION_PITCH_UP * 0.02;
    rotationHelper[1].rad = commands.yawRightLeft * helper.VIEW_ROTATION_YAW_RIGHT * 0.02;
    helper.rotateQuaternion(newState.rotation, rotationHelper);

    newState.position[0] += commands.moveRightLeft * helper.VIEW_DIRECTION_RIGHT;
    newState.position[1] += commands.moveUpDown * helper.VIEW_DIRECTION_UP;
    newState.position[2] += commands.moveForwardBackward * helper.VIEW_DIRECTION_FORWARD;

    return newState;
  };

  return CameraOperator;
});