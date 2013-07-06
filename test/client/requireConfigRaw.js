/* global requirejs */
requirejs.config({
  baseUrl: "src/client/",
  paths: {
    "jade": "lib/jade",
    "lib": ["../wwwroot/javascripts/full/lib"]
  },
  waitSeconds: 2
});

define("version", [], function() {
  "use strict";

  return "(test)";
});