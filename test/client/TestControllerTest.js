/* global buster */
define(["TestController"], function(amd) {
  "use strict";

  var assert = buster.assert;

  buster.testCase("TestController", {
    setUp: function() {},

    "Factory create()": {
      setUp: function() {
        this.controller = amd.create({});
      },

      "should return a function": function() {
        assert.isFunction(this.controller);
      }
    },

    "Controller": {
      setUp: function() {
        this.scope = {};
      },

      "should reference config value": function() {
        var testValue = 1;
        var controller = amd.create({
          test: testValue
        });

        controller(this.scope);

        assert.equals(this.scope.testName, testValue);
      }
    }
  });
});