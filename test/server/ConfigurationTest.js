"use strict";

var buster = require("buster");
var assert = buster.assert;

buster.testCase("Configuration", {

  setUp: function() {
    this.config = require("../../src/server/Configuration.js");
  },

  "http": {
    setUp: function() {
      this.http = this.config.get("http");
    },

    "should have default port 3000": function() {
      assert.equals(this.http.port, 3000);
    }
  }
});