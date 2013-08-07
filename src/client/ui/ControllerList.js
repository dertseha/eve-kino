/**
The Controller list collects all controller modules

@module Client
@class Controller
*/
define(["ui/SplashDialog", "ui/CreateSessionDialog", "ui/AddPropDialog"],
  function() {
    "use strict";

    var controller = [];
    var i;

    for (i = 0; i < arguments.length; i++) {
      controller.push(arguments[i]);
    }

    return controller;
  });