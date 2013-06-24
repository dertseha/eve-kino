/**
The Stage Manager updates the stage according to the script and/or input

@module Client
@class StageManager
*/
define(["production/Animator"], function(Animator) {
  "use strict";

  var StageManager = function(stage) {
    this.stage = stage;

    this.animators = [];
  };

  StageManager.prototype.updateStage = function() {
    this.animators.forEach(function(animator) {
      animator.update();
    });
  };

  StageManager.prototype.getAnimator = function(prop) {
    var animator = new Animator(prop);

    this.animators.push(animator);

    return animator;
  };

  return StageManager;
});