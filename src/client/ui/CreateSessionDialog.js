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
      $scope.qualityOptions = model.qualityOptions;
      $scope.selectedOptions = {};
      model.qualityOptions.forEach(function(option) {
        $scope.selectedOptions[option.field] = option.defaultValue;
      });

      $scope.set = {
        type: "space",
        selectedBackground: model.backgrounds[0],
        chromaKey: {
          color: [0.0, 1.0, 0.0]
        }
      };

      $scope.canBeCreated = function() {
        var result = false;

        if ($scope.set.type === "space") {
          result = !! $scope.set.selectedBackground;
        } else if ($scope.set.type === "chromaKey") {
          result = !! $scope.set.chromaKey.color;
        }

        return result;
      };

      $scope.create = function(setType) {
        var notifier = {};

        notifier.space = function(user) {
          user.setQualityOptions($scope.selectedOptions);

          return user.createSpaceSet($scope.set.selectedBackground, $scope.set.sessionData);
        };
        notifier.chromaKey = function(user) {
          user.setQualityOptions($scope.selectedOptions);

          return user.createChromaKeyedSet($scope.set.chromaKey.color, $scope.set.sessionData);
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
              $scope.set.chromaKey.color = object.session.set.chromaKey.color;
            }
          } else {
            console.log("!!!!! file not valid");
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