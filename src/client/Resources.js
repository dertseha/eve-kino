/**

@module Client
@class Resource
*/
define(["StageManager", "Camera", "Director", "CameraOperator"], function(StageManager, Camera, Director, CameraOperator) {
  "use strict";

  var resources = {
    StageManager: StageManager,
    Director: Director,
    Camera: Camera,
    CameraOperator: CameraOperator
  };

  return resources;
});