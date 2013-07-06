/**
The Controller list collects all controller modules

@module Client
@class Controller
*/
define(["ui/SplashDialog", "ui/CreateSessionDialog"],

function(splashDialog, createSessionDialog) {
  "use strict";

  var controller = [
    splashDialog,
    createSessionDialog
  ];

  return controller;
});