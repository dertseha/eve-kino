/**
A camera operator handles a camera when directed to

@module Client
@class Director
*/
define(["lib/gl-matrix", "3d/Helper"], function(glMatrix, helper) {
  "use strict";

  var actionNames = [
      "pitchUp", "pitchDown", "rollClockwise", "rollCounter", "yawRight", "yawLeft",
      "moveUp", "moveDown", "moveForward", "moveBackward", "moveRight", "moveLeft"
  ];
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

    rotationHelper[2].rad = (commands.rollClockwise - commands.rollCounter) * helper.VIEW_ROTATION_ROLL_CLOCKWISE * 0.02;
    rotationHelper[0].rad = (commands.pitchUp - commands.pitchDown) * helper.VIEW_ROTATION_PITCH_UP * 0.02;
    rotationHelper[1].rad = (commands.yawRight - commands.yawLeft) * helper.VIEW_ROTATION_YAW_RIGHT * 0.02;
    helper.rotateQuaternion(newState.rotation, rotationHelper);

    // var temp = glMatrix.vec3.create([0, 0, 0]);

    // temp[0] = (commands.moveRight - commands.moveLeft) * helper.VIEW_DIRECTION_RIGHT;
    // temp[1] = (commands.moveUp - commands.moveDown) * helper.VIEW_DIRECTION_UP;
    // temp[2] = (commands.moveForward - commands.moveBackward) * helper.VIEW_DIRECTION_FORWARD;

    // glMatrix.quat4.multiplyVec3(newState.rotation, temp);
    // newState.position[0] += temp[0];
    // newState.position[1] += temp[1];
    // newState.position[2] += temp[2];

    newState.position[0] += (commands.moveRight - commands.moveLeft) * helper.VIEW_DIRECTION_RIGHT;
    newState.position[1] += (commands.moveUp - commands.moveDown) * helper.VIEW_DIRECTION_UP;
    newState.position[2] += (commands.moveForward - commands.moveBackward) * helper.VIEW_DIRECTION_FORWARD;

    return newState;
  };

  return CameraOperator;
});