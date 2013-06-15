"use strict";

/**
The server runs the whole show

@module Server
*/

var winston = require("winston");
var logger = winston.loggers.add("root", {});

var config = require("./Configuration.js");

logger.remove(winston.transports.Console);
logger.setLevels(winston.config.cli.levels);
logger.add(winston.transports.Console, {
  level: "verbose",
  colorize: true,
  timestamp: true
});

logger.info("Starting application...");

var WebServer = require("./WebServer/WebServer.js");

var server = new WebServer(config);