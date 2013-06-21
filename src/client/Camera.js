/**
The camera combines the scene camera (viewport) with an operator and a film.

@module Client
@class Camera
*/
define([], function() {
  "use strict";

  var nullOperator = {
    getCameraStateData: function(lastState) {
      return lastState;
    }
  };

  var Camera = function(sceneCamera) {
    this.sceneCamera = sceneCamera;
    this.operator = nullOperator;

    /**
      @private
      @property lastState buffer object to avoid creating new ones each frame
    */
    this.lastState = null;

    //camera.setPosition([0, 0, -2000.0]);

  };

  Camera.getNullOperator = function() {
    return Object.create(nullOperator);
  };

  Camera.prototype.setOperator = function(operator) {
    this.operator = operator || nullOperator;
  };

  Camera.prototype.updateFrame = function() {

    // onPlayback:
    //   getRotation(), getPosition()
    // onRecord/Rehearse:
    //   rotation = Operator.update(currentRotation, recordedRotation)
    //
    // recordedState = film.getCameraStateData();
    // currentState = camera.getStateData();
    // newState = operator.getCameraStateData({}, currentState, recordedState)
    // camera.setStateData(newState);

    var sceneCamera = this.sceneCamera;
    var lastState = sceneCamera.getStateData(this.lastState);
    var newState = this.operator.getCameraStateData(lastState);

    sceneCamera.setStateData(newState);
    this.lastState = lastState;
  };

  return Camera;
});