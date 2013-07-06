/* global requirejs */
requirejs.config({
  baseUrl: "src/client/",
  paths: {
    "jade": "lib/jade",
    "lib": ["../wwwroot/javascripts/full/lib"]
  },
  waitSeconds: 20
});

define("version", [], function() {
  "use strict";

  return "(test)";
});