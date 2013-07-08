/* global __dirname */
"use strict";

var path = require("path");
var http = require("http");

var express = require("express");

var winston = require("winston");
var logger = winston.loggers.get("root");

var WebServer = function(configuration) {

  var httpConfig = configuration.get("http");
  var cookieSecret = httpConfig.cookieSecret;
  var wwwRootPath = path.join(__dirname, "../../wwwroot");

  var webServer = express();

  webServer.configure(function() {
    var defaultSessionSecret = "Some other secret";
    var sessionSecret = httpConfig.sessionSecret || defaultSessionSecret;

    if ((cookieSecret === "") || (sessionSecret === defaultSessionSecret)) {
      logger.warn("HTTP configuration uses some defaults that should not be used");
    }

    webServer.set("port", httpConfig.port);
    webServer.set("views", __dirname + "/views");
    webServer.set("view engine", "jade");
    webServer.use(express.favicon(path.normalize(wwwRootPath + '/images/favicon_16.ico')));
    // webServer.use(logger);
    webServer.use(express.cookieParser(cookieSecret));
    webServer.use(express.bodyParser());
    webServer.use(express.methodOverride());
    webServer.use(express.session({
      secret: sessionSecret
    }));
    webServer.use(webServer.router);
    webServer.use(express["static"](wwwRootPath));
  });

  // webServer.configure("development", function() {
  // webServer.use(express.errorHandler());
  // });

  webServer.get("/", function(req, res) {
    var clientConfig = {
      test: "World"
    };
    var pageOptions = {
      clientConfig: JSON.stringify(clientConfig),
      build: req.query.build || "full"
    };

    res.render("root", pageOptions);
  });

  var httpServer = http.createServer(webServer);

  httpServer.listen(webServer.get("port"), function() {
    logger.info("Express server listening on port " + webServer.get("port"));
  });
};

module.exports = WebServer;