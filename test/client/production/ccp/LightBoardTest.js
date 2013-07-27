/* global buster, setTimeout */
define(["production/ccp/LightBoard"], function(LightBoard) {
  "use strict";

  var assert = buster.assert;
  var refute = buster.refute;

  var givenSunLoaded = function(lightBoard) {
    lightBoard.activateSunState(new LightBoard.SunStates.Loaded());
  };

  buster.testCase("LightBoard", {
    setUp: function() {
      var ccpwgl = {};
      var scene = {
        setSunLightColor: function() {},

        loadSun: function() {},
        removeSun: function() {},
        setSunDirection: function() {}
      };

      this.scene = scene;
      this.lightBoard = new LightBoard(ccpwgl, scene);
    },

    "should call loadSun when requestStar is called": function() {
      var spy = this.spy(this.scene, "loadSun");

      this.lightBoard.requestStar("");

      assert.called(spy);
    },

    "should call removeSun when removeStar is called for loaded sun": function() {
      givenSunLoaded(this.lightBoard);

      var spy = this.spy(this.scene, "removeSun");

      this.lightBoard.removeStar();

      assert.called(spy);
    },

    "should return promise for loading a star": function(done) {
      this.scene.loadSun = function(resourceUrl, callback) {
        setTimeout(callback, 0);
      };

      var promise = this.lightBoard.requestStar("");

      promise.then(function() {
        assert(true);
        done();
      });
    },

    "should not try to removeSun while not yet loaded": function() {
      var spy = this.spy(this.scene, "removeSun");

      this.lightBoard.requestStar("");
      this.lightBoard.removeStar();

      refute.called(spy);
    },

    "should remove star after being loaded when requested": function(done) {
      this.scene.loadSun = function(resourceUrl, callback) {
        setTimeout(callback, 0);
      };

      var spy = this.spy(this.scene, "removeSun");
      var promise = this.lightBoard.requestStar("");

      this.lightBoard.removeStar();

      promise.then(function() {
        assert.called(spy);
        done();
      });
    }

  });
});