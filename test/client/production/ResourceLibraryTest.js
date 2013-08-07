/* global buster */
define(["production/ResourceLibrary"], function(ResourceLibrary) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("ResourceLibrary", {
    setUp: function() {
      this.lib = new ResourceLibrary();
    },

    "should allow addition of resources": function() {

      assert.isFunction(this.lib.addResource);
    },

    "should allow iteration over resources by type": function() {
      var result = null;
      var input = "obj1";

      this.lib.addResource("test", input);

      this.lib.forEachResource("test", function(entry) {
        result = entry;
      });

      assert.equals(result, input);
    }
  });
});