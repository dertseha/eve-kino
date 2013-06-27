/* global buster */
define(["production/StageManager"], function(StageManager) {
  "use strict";

  var assert = buster.assert;
  var refute = buster.refute;

  buster.testCase("StageManager", {
    setUp: function() {
      this.testProp = {

      };
      this.stage = {};
      this.stageManager = new StageManager(this.stage);
    },

    "should provide animator for a prop": function() {
      var animator = this.stageManager.getAnimator(this.testProp);

      assert.isFunction(animator.update);
    },

    "should provide same animator when queried for same prop": function() {
      var animator1 = this.stageManager.getAnimator(this.testProp);
      var animator2 = this.stageManager.getAnimator(this.testProp);

      assert.same(animator1, animator2);
    },

    "should provide different animator when queried for different prop": function() {
      var testProp2 = {};
      var animator1 = this.stageManager.getAnimator(this.testProp);
      var animator2 = this.stageManager.getAnimator(testProp2);

      refute.same(animator1, animator2);
    }

  });
});