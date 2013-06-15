/* global process */
"use strict";

/**
This module handles the configuration

@module Server
@class Configuration
**/

var path = require("path");

var nconf = require("nconf");

var configFileBase = process.cwd();

nconf.use("memory");

nconf.argv();
nconf.env();
nconf.file(path.normalize(configFileBase + "/server-config.json"));

nconf.defaults({
  "http": {
    port: 3000,
    cookieSecret: "",
    sessionSecret: null
  }
});

module.exports = nconf;