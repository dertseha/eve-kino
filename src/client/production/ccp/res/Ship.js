/**
The ship wrapper

@module Client
@class Ship
*/
define([], function() {
  "use strict";

  var Ship = function(ccpwgl, obj) {
    this.ccpwgl = ccpwgl;
    this.obj = obj;
  };

  return Ship;
});