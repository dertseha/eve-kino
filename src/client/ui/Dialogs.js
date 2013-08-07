/**
This is a helper object to collect all dialogs

@module Client
@class Dialogs
*/
define(["ui/SplashDialog", "ui/CreateSessionDialog", "ui/AddPropDialog"],

  function(splashDialog, createSessionDialog, addPropDialog) {
    "use strict";

    var dialogs = {
      splashDialog: splashDialog,
      createSessionDialog: createSessionDialog,
      addPropDialog: addPropDialog
    };

    return dialogs;
  });