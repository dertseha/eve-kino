/* global buster */
define(["ApplicationController"], function(amd) {
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
    }
  });
});