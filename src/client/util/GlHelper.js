/**
The helper is a static object providing some helper constants and functions
for GL related topics.

@module Client
@class GlHelper
*/
define(["lib/gl-matrix"], function(glMatrix) {
  "use strict";

  // ccpwgl extends mat4 with this multiply3x3 function; Since glMatrix is
  // re-loaded, this extension is lost, so reintroduce it here.
  // The function seems to be based on multiplyVec3, but without the translation.
  // For now let's set it equal, until artefacts are discovered.
  glMatrix.mat4.multiply3x3 = glMatrix.mat4.multiplyVec3;

  var oneDegreeInRad = Math.PI / 180.0;
  var viewDirections = {
    forward: -1.0,
    upward: -1.0,
    rightward: 1.0
  };
  var viewRotations = {
    rollClockwise: -1.0,
    pitchUp: -1.0,
    yawRight: -1.0
  };
  var modelDirections = {
    forward: 1.0,
    upward: 1.0,
    rightward: -1.0
  };
  var modelRotations = {
    rollClockwise: 1.0,
    pitchUp: 1.0,
    yawRight: -1.0
  };

  var helper = {
    VIEW_DIRECTION_FORWARD: viewDirections.forward,
    VIEW_DIRECTION_UP: viewDirections.upward,
    VIEW_DIRECTION_RIGHT: viewDirections.rightward,

    VIEW_ROTATION_ROLL_CLOCKWISE: viewRotations.rollClockwise,
    VIEW_ROTATION_PITCH_UP: viewRotations.pitchUp,
    VIEW_ROTATION_YAW_RIGHT: viewRotations.yawRight,

    VIEW_VECTOR_FORWARD: glMatrix.vec3.create([0, 0, viewDirections.forward]),
    VIEW_VECTOR_UP: glMatrix.vec3.create([0, viewDirections.upward, 0]),
    VIEW_VECTOR_RIGHT: glMatrix.vec3.create([viewDirections.rightward, 0, 0]),

    MODEL_DIRECTION_FORWARD: modelDirections.forward,
    MODEL_DIRECTION_UP: modelDirections.upward,
    MODEL_DIRECTION_RIGHT: modelDirections.rightward,

    MODEL_ROTATION_ROLL_CLOCKWISE: modelRotations.rollClockwise,
    MODEL_ROTATION_PITCH_UP: modelRotations.pitchUp,
    MODEL_ROTATION_YAW_RIGHT: modelRotations.yawRight,

    MODEL_VECTOR_FORWARD: glMatrix.vec3.create([0, 0, modelDirections.forward]),
    MODEL_VECTOR_UP: glMatrix.vec3.create([0, modelDirections.upward, 0]),
    MODEL_VECTOR_RIGHT: glMatrix.vec3.create([modelDirections.rightward, 0, 0]),

    /**
      Converts given degree number to radians
      @method degreeToRad
      @param degrees {Number} Degrees (0..360) to convert to radians
      @return {Number} radians for given degrees
    */
    degreeToRad: function(degrees) {
      return degrees * oneDegreeInRad;
    }
  };

  return helper;
});