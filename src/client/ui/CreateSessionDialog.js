/**
This dialog is responsible for determining the parameters of a session to be created.

@module Client
@class CreateSessionDialog
*/
define(["ui/UiTemplates", "version"],

function(templates, version) {
  "use strict";

  var name = "CreateSessionDialogController";
  var template = templates.CreateSessionDialog();

  var colorStringParser = {
    "^#([0-9A-Fa-f]){6}$": function(value) {
      var r = parseInt(value.substr(1, 2), 16);
      var g = parseInt(value.substr(3, 2), 16);
      var b = parseInt(value.substr(5, 2), 16);

      return [r / 255.0, g / 255.0, b / 255.0];
    },
    "^#([0-9A-Fa-f]){3}$": function(value) {
      var r = parseInt(value.substr(1, 1), 16);
      var g = parseInt(value.substr(2, 1), 16);
      var b = parseInt(value.substr(3, 1), 16);

      return [r / 15.0, g / 15.0, b / 15.0];
    }
  };

  var forEachMatchingColorStringParser = function(colorString, callback) {
    var expression;
    var regExp;

    for (expression in colorStringParser) {
      regExp = new RegExp(expression);
      if (regExp.test(colorString)) {
        callback(colorStringParser[expression]);
      }
    }
  };

  var parseColor = function(colorString) {
    var result = [0, 0, 0];

    forEachMatchingColorStringParser(colorString, function(parser) {
      result = parser(colorString);
    });

    return result;
  };

  var isColorValid = function(colorString) {
    var result = false;

    forEachMatchingColorStringParser(colorString, function() {
      result = true;
    });

    return result;
  };

  var controller = function($scope, dialog, model) {
    $scope.version = version;

    $scope.setType = "space";
    // space set data
    $scope.backgrounds = model.backgrounds;
    $scope.selectedBackground = model.backgrounds[0];
    // chromaKey set data
    $scope.chromaKey = "#00FF00";

    $scope.canBeCreated = function() {
      var result = false;

      if ($scope.setType === "space") {
        result = !! $scope.selectedBackground;
      } else if ($scope.setType === "chromaKey") {
        result = isColorValid($scope.chromaKey);
      }

      return result;
    };

    $scope.create = function(setType) {
      var notifier = {};

      notifier.space = function(user) {
        return user.createSpaceSet($scope.selectedBackground);
      };
      notifier.chromaKey = function(user) {
        return user.createChromaKeyedSet(parseColor($scope.chromaKey));
      };

      dialog.close(notifier[setType]);
    };
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