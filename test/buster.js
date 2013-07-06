/* global process */
"use strict";
var fs = require("fs");
var path = require("path");

var config = module.exports;

/**
  Returns an array specifying all sources for the server process, excluding
  the actual server.js file. Collecting all the sources is necessary for coverage,
  but all these files get required immediately. In case of server.js, this would
  start up the actual server process.

  @return {Array} sources parameter
*/
var getServerSourcesWithoutMain = function() {
  var relativePath = "src/server";
  var serverPath = path.resolve(process.cwd(), relativePath);
  var allFiles = fs.readdirSync(serverPath);
  var result = [];

  allFiles.forEach(function(fileName) {
    var fullFilePath = serverPath + "/" + fileName;
    var relFilePath = relativePath + "/" + fileName;
    var stat = fs.statSync(fullFilePath);

    if (fileName !== "server.js") {
      if (stat.isFile()) {
        result.push(relFilePath);
      } else if (stat.isDirectory()) {
        result.push(relFilePath + "/**/*.js");
      }
    }
  });

  return result;
};

config["Server tests raw"] = {
  rootPath: "../",
  environment: "node",
  tests: ["test/server/**/*Test.js"]
};

config["Server tests coverage"] = {
  rootPath: "../",
  environment: "node",
  sources: getServerSourcesWithoutMain(),
  tests: ["test/server/**/*Test.js"],

  extensions: [require("buster-istanbul")],

  "buster-istanbul": {
    outputDirectory: "./build/reports/istanbul/server"
  }
};

config["Client tests raw"] = {
  rootPath: "../",
  environment: "browser",
  libs: ["src/wwwroot/javascripts/min/lib/require.js", "test/client/requireConfigRaw.js",
      "test/client/stubs/*.js"
  ],
  sources: ["src/client/**/*.js", "src/client/**/*.html", "src/wwwroot/javascripts/full/lib/gl-matrix.js", "src/wwwroot/javascripts/full/lib/q.js"],
  tests: ["test/client/**/*Test.js"],

  extensions: [require("buster-amd")],

  "buster-amd": {
    pathMapper: function(path) {
      var resolved = path;

      resolved = resolved.replace(/\.js$/, ""); // remove extension
      resolved = resolved.replace(/^\//, "../../"); // path base from require:baseUrl to root

      return resolved;
    }
  }
};

config["Client tests coverage"] = {
  rootPath: "../",
  environment: "browser",
  libs: ["src/wwwroot/javascripts/min/lib/require.js", "test/client/requireConfigRaw.js",
      "test/client/stubs/*.js"
  ],
  sources: ["src/client/**/*.js", "src/client/**/*.html", "src/wwwroot/javascripts/full/lib/gl-matrix.js", "src/wwwroot/javascripts/full/lib/q.js"],
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
      "test/client/stubs/*.js", "src/wwwroot/javascripts/min/client/ClientApp.js"
  ],
  sources: ["src/wwwroot/javascripts/min/lib/gl-matrix.js", "src/wwwroot/javascripts/min/lib/q.js"],
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