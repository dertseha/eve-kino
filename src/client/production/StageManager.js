/**
The Stage Manager updates the stage according to the script and/or input

@module Client
@class StageManager
*/
define(["production/Animator"], function(Animator) {
  "use strict";

  var StageManager = function(stage, timeWatch) {
    this.stage = stage;
    this.timeWatch = timeWatch;

    this.animators = [];
  };

  StageManager.prototype.encodeData = function() {
    var data = {
      props: []
    };
    var that = this;

    this.stage.forEachProp(function(prop) {
      var animator = that.findAnimatorByProp(prop);
      var script = animator && animator.getScript();
      var propEntry = {
        //id: prop.id,
        propData: prop.propData,
        script: script ? script.data : []
      };

      data.props.push(propEntry);
    });

    return data;
  };

  StageManager.prototype.updateStage = function() {
    this.animators.forEach(function(animator) {
      animator.update();
    });
  };

  StageManager.prototype.getAnimator = function(prop) {
    var animator = this.findAnimatorByProp(prop);

    if (!animator) {
      animator = new Animator(prop, this.timeWatch);
      this.animators.push(animator);
    }

    return animator;
  };

  StageManager.prototype.findAnimatorByProp = function(prop) {
    var animator = null;

    this.animators.forEach(function(test) {
      if (test.getProp() === prop) {
        animator = test;
      }
    });

    return animator;
  };

  return StageManager;
});