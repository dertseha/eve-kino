/**

@module Client
@class Resource
*/
define(["production/StageManager", "production/Director", "production/CameraOperator"], function(StageManager, Director, CameraOperator) {
  "use strict";

  var resources = {
    StageManager: StageManager,
    Director: Director,
    CameraOperator: CameraOperator
  };

  return resources;
});