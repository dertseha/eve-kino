"use strict";
var config = module.exports;

config["Server tests"] = {
  rootPath: "../",
  environment: "node",
  sources: ["src/server/**/*.js"],
  tests: ["test/server/**/*Test.js"],

  extensions: [require("buster-istanbul")],

  "buster-istanbul": {
    outputDirectory: "./build/reports/istanbul/server"
  }
};

config["Client tests raw"] = {
  rootPath: "../",
  environment: "browser",
  libs: ["src/wwwroot/javascripts/min/lib/require.js", "test/client/requireConfigRaw.js"],
  sources: ["src/client/**/*.js"],
  tests: ["test/client/**/*Test.js"],

  extensions: [require("buster-istanbul"), require("buster-amd")],

  "buster-istanbul": {
    outputDirectory: "./build/reports/istanbul/clientRaw"
  },
  "buster-amd": {
    pathMapper: function(path) {
      var resolved = path;

      resolved = resolved.replace(/\.js$/, ""); // remove extension
      resolved = resolved.replace(/^\//, "../../"); // path base from require:baseUrl to root

      return resolved;
    }
  }
};

config["Client tests minified"] = {
  rootPath: "../",
  environment: "browser",
  libs: ["src/wwwroot/javascripts/min/lib/require.js", "test/client/requireConfigMin.js",
    "src/wwwroot/javascripts/min/client/ClientApp.js"],
  sources: [],
  tests: ["test/client/**/*Test.js"],

  extensions: [require("buster-amd")],

  "buster-amd": {
    pathMapper: function(path) {
      var resolved = path;

      resolved = resolved.replace(/\.js$/, ""); // remove extension
      resolved = resolved.replace(/^\//, "../../../../../"); // path base from require:baseUrl to root

      return resolved;
    }
  }
};