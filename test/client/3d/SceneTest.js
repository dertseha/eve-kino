/* global buster */
define("lib/ccpwgl", [], function() {
  "use strict";

  var nullFunction = function() {};
  var stub = {
    setCamera: nullFunction,
    loadScene: nullFunction
  };

  return stub;
});

define(["lib/ccpwgl", "3d/Scene"], function(ccpwgl, Scene) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("Scene", {

    "should be an object": function() {
      var scene = new Scene();

      assert.isObject(scene);
    },

    "constructor sets a camera": function() {
      this.stub(ccpwgl, "setCamera");

      var scene = new Scene();

      assert.calledOnce(ccpwgl.setCamera);
    },

    "setBackgroundBox calls loadScene": function() {
      var spy = this.spy(ccpwgl, "loadScene");
      var scene = new Scene();
      var resPath = "test:/1234";

      scene.setBackgroundBox(resPath);
      assert.calledWith(spy, resPath);
    }
  });
});