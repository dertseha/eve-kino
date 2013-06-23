/**

@module Client
@class Resource
*/
define(["production/StageManager", "production/Camera", "production/Director", "production/CameraOperator"], function(StageManager, Camera, Director, CameraOperator) {
  "use strict";

  var resources = {
    StageManager: StageManager,
    Director: Director,
    Camera: Camera,
    CameraOperator: CameraOperator
  };

  return resources;
});