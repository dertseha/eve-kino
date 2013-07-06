/**
This is a helper object to collect all dialogs

@module Client
@class Dialogs
*/
define(["ui/SplashDialog", "ui/CreateSessionDialog"],

function(splashDialog, createSessionDialog) {
  "use strict";

  var dialogs = {
    splashDialog: splashDialog,
    createSessionDialog: createSessionDialog
  };

  return dialogs;
});