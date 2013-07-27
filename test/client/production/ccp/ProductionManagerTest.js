/* global buster, setTimeout */
define(["lib/ccpwgl", "production/ccp/ProductionManager"], function(ccpwgl, ProductionManager) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("ProductionManager", {
    setUp: function() {
      this.productionManager = new ProductionManager(ccpwgl);
    },

    "should call ccwpgl for resource paths": function() {
      var spy = this.spy(ccpwgl, "setResourcePath");
      var namespace = "test";
      var url = "path/to/stuff/";

      this.productionManager.setResourcePath(namespace, url);

      assert.calledWith(spy, namespace, url);
    },

    "should call createScene on ccpwgl for creating a chroma keyed set": function() {
      var spy = this.spy(ccpwgl, "createScene");
      var canvas = {};
      var color = [0.0, 0.1, 0.0, 0.1];

      this.productionManager.createChromaKeyedSet(canvas, color);

      assert.calledWith(spy, color);
    },

    "should return a promise for creating a chroma keyed set": function(done) {
      var canvas = {};
      var color = [0.0, 0.1, 0.0, 0.1];

      var promise = this.productionManager.createChromaKeyedSet(canvas, color);

      promise.then(function() {
        assert(true);
        done();
      });
    },

    "should return a promise for creating a standard set": function(done) {
      var canvas = {};
      var backgroundUrl = "test:stuff";

      ccpwgl.loadScene = function(url, callback) {
        setTimeout(function() {
          callback.call(ccpwgl.scene);
        }, 10);
      };

      var promise = this.productionManager.createSet(canvas, backgroundUrl);

      promise.then(function() {
        assert(true);
        done();
      });
    }

  });
});