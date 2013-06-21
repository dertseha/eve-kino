/**

@module Client
@class ProductionStaff
*/
define(["StageManager", "Director", "Camera"], function(StageManager, Director, Camera) {
  "use strict";

  var resources = {
    StageManager: StageManager,
    Director: Director,
    Camera: Camera
  };

  return resources;
});