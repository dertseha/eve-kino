/**
The data-file-input directive is for adding a change event to a file input.

@module Client
@class FileInputDirective
*/
define([], function() {
  "use strict";

  var register = function(angular, appModule) {
    appModule.directive("fileInput", function($parse) {
      return {
        restrict: "EA",
        template: "<input type=\"file\" />",
        replace: true,
        link: function(scope, element, attrs) {
          var modelGet = $parse(attrs.fileInput || attrs.dataFileInpu);
          var modelSet = modelGet.assign;
          var onChange = $parse(attrs.onChange);

          var updateModel = function() {
            scope.$apply(function() {
              modelSet(scope, element[0].files[0]);
              onChange(scope);
            });
          };

          element.bind("change", updateModel);
        }
      };
    });
  };

  var directive = {
    register: register
  };

  return directive;
});