/* global buster, setTimeout */
define(["lib/ccpwgl", "production/ccp/Stage"], function(ccpwgl, Stage) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("Stage", {
    setUp: function() {
      this.stage = new Stage(ccpwgl, ccpwgl.scene);
    },

    "should call archetype to enter stage": function() {
      var archetype = {
        request: function(scene, callback) {}
      };
      var spy = this.spy(archetype, "request");

      this.stage.enter(archetype);

      assert.called(spy);
    },

    "should return promise for entering an archetype": function(done) {
      var archetype = {
        request: function(ccpwgl, scene, deferred) {
          setTimeout(function() {
            deferred.resolve();
          }, 10);
        }
      };
      var spy = this.spy(archetype, "request");

      var promise = this.stage.enter(archetype);

      promise.then(function() {
        assert(true);
        done();
      });
    },

    "should have no props when created": function() {
      var result = this.stage.getProps();

      assert.equals(result, []);
    },

    "should report the prop after being created": function(done) {
      var prop = {};
      var archetype = {
        request: function(ccpwgl, scene, deferred) {
          deferred.resolve(prop);
        }
      };
      var promise = this.stage.enter(archetype);
      var that = this;

      promise.then(function() {
        var result = that.stage.getProps();

        assert.equals(result, [prop]);
        done();
      });
    }
  });
});