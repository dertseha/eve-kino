/**
This dialog is helping to add a prop to the scene

@module Client
@class AddPropDialog
*/
define(["ui/UiTemplates"],

  function(templates) {
    "use strict";

    var name = "AddPropDialogController";
    var template = templates.AddPropDialog();

    var Controller = function($scope, dialog, model) {
      var that = this;

      this.resourceLibrary = model.resLibrary;
      this.modelView = $scope;

      $scope.selected = null;
      $scope.search = {
        text: "",
        selected: null
      };
      $scope.filteredShips = [];
      $scope.filteredPlanets = [];
      $scope.filteredScenery = [];

      $scope.$watch("search.text", function(newValue) {
        that.updateFiltered(newValue);
      });


      $scope.cancel = function() {
        var callback = function() {};

        dialog.close(callback);
      };

      $scope.add = function(archetype) {
        var callback = function(listener) {
          listener.addProp(archetype);
        };

        dialog.close(callback);
      };

      this.updateFiltered("");
    };

    Controller.prototype.updateFiltered = function(filterText) {
      var modelView = this.modelView;
      var filteredShips = modelView.filteredShips = [];
      var filteredPlanets = modelView.filteredPlanets = [];
      var filteredSceneries = modelView.filteredSceneries = [];
      var filters = filterText.toLowerCase().split(" ");
      var predicate = function(arch) {
        var resourceUrl = arch.propData.resourceUrl.toLowerCase();
        var valid = true;

        filters.forEach(function(filter) {
          if (resourceUrl.indexOf(filter) < 0) {
            valid = false;
          }
        });

        return valid;
      };

      this.resourceLibrary.forEachResource("ship", function(arch) {
        if (predicate(arch)) {
          filteredShips.push(arch);
        }
      });
      this.resourceLibrary.forEachResource("planet", function(arch) {
        if (predicate(arch)) {
          filteredPlanets.push(arch);
        }
      });
      this.resourceLibrary.forEachResource("scenery", function(arch) {
        if (predicate(arch)) {
          filteredSceneries.push(arch);
        }
      });
    };

    var register = function(module) {
      module.controller(name, ["$scope", "dialog", "model", Controller]);
    };

    var getBuilder = function(dialogFactory, model) {
      var options = {
        backdrop: true,
        backdropFade: false,
        backdropClick: false,
        keyboard: true,

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
      controller: Controller,
      template: template,

      register: register,
      getBuilder: getBuilder
    };

    return dialog;
  });