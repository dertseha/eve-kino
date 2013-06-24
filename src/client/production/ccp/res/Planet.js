/**
The planet wrapper

@module Client
@class Planet
*/
define([], function() {
  "use strict";

  var Planet = function(ccpwgl, obj) {
    this.ccpwgl = ccpwgl;
    this.obj = obj;
  };

  return Planet;
});