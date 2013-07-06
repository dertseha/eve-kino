/* global console */
/**
This dialog is a display field that can not be interrupted. It is application
controlled.

@module Client
@class SplashDialog
*/
define(["lib/text!ui/SplashDialog.html"],

function(template) {
  "use strict";

  var name = "SplashDialogController";

  var controller = function($scope, dialog, model) {
    $scope.title = model.title;
    $scope.message = model.message;
  };

  var register = function(module) {
    module.controller(name, ["$scope", "dialog", "model", controller]);
  };

  var getBuilder = function(dialogFactory, model) {
    var options = {
      backdrop: true,
      backdropFade: false,
      backdropClick: false,
      keyboard: false,

      controller: name,
      template: template,
      resolve: {
        model: function() {
          return model;
        }
      }
    };

    return dialogFactory.dialog(options);
  };

  var dialog = {
    controller: controller,
    template: template,

    register: register,
    getBuilder: getBuilder
  };

  return dialog;
});