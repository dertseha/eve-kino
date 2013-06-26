/**
Containing defaults

@module Client
@class Defaults
*/
define([], function() {
  "use strict";

  var defaults = {
    inputsByAction: {}
  };

  var addActionInput = function(actionName, inputName) {
    defaults.inputsByAction[actionName] = inputName;
  };

  addActionInput("yawLeft", "RIGHT_STICK_X_NEG");
  addActionInput("yawRight", "RIGHT_STICK_X_POS");
  addActionInput("pitchUp", "RIGHT_STICK_Y_POS");
  addActionInput("pitchDown", "RIGHT_STICK_Y_NEG");
  addActionInput("rollClockwise", "LEFT_STICK_X_POS");
  addActionInput("rollCounter", "LEFT_STICK_X_NEG");
  addActionInput("moveForward", "RB");
  addActionInput("moveBackward", "LB");
  addActionInput("moveLeft", "X");
  addActionInput("moveRight", "B");
  addActionInput("moveUp", "Y");
  addActionInput("moveDown", "A");

  return defaults;
});