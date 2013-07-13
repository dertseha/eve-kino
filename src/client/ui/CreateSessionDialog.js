/* global console */
/**
This dialog is responsible for determining the parameters of a session to be created.

@module Client
@class CreateSessionDialog
*/
define(["version", "ui/UiTemplates", "util/validators/SessionValidator"],

  function(version, templates, SessionValidator) {
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

    var controller = function($scope, dialog, model, fileReader) {
      var findBackgroundByUrl = function(url) {
        var result = null;

        model.backgrounds.forEach(function(background) {
          if (background.resourceUrl === url) {
            result = background;
          }
        });

        return result;
      };

      $scope.version = version;

      $scope.backgrounds = model.backgrounds;
      $scope.set = {
        type: "space",
        selectedBackground: null, //model.backgrounds[0],
        chromaKey: {
          color: "#00FF00"
        }
      };

      $scope.canBeCreated = function() {
        var result = false;

        if ($scope.set.type === "space") {
          result = !! $scope.set.selectedBackground;
        } else if ($scope.set.type === "chromaKey") {
          result = isColorValid($scope.set.chromaKey.color);
        }

        return result;
      };

      $scope.create = function(setType) {
        var notifier = {};

        notifier.space = function(user) {
          return user.createSpaceSet($scope.set.selectedBackground);
        };
        notifier.chromaKey = function(user) {
          return user.createChromaKeyedSet(parseColor($scope.set.chromaKey.color));
        };

        dialog.close(notifier[setType]);
      };

      $scope.readFile = function(file) {
        var readPromise = fileReader.readAsText($scope, file, "utf-8");

        readPromise.then(function(data) {
          var validator = new SessionValidator();
          var object;
          var isValid = false;

          try {
            object = JSON.parse(data);
            isValid = validator.isValid(object);
          } catch (ex) {

          }
          if (isValid) {
            $scope.set.sessionData = object;
            if (object.session.set.space) {
              $scope.set.type = "space";
              $scope.set.selectedBackground = findBackgroundByUrl(object.session.set.space.background);
            } else if (object.session.set.chromaKey) {
              $scope.set.type = "chromaKey";
              $scope.set.chromaKey.color = "#";
              object.session.set.chromaKey.color.forEach(function(part) {
                $scope.set.chromaKey.color += ("0" + (part * 255.0).toString(16)).substr(-2);
              });
            }
          }
        });
      };
    };

    var register = function(module) {
      module.controller(name, ["$scope", "dialog", "model", "fileReader", controller]);
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