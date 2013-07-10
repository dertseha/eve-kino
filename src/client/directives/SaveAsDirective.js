/* global Blob */
/**
The data-save-as directive handles saving of the session to a file.

@module Client
@class SaveAsDirective
*/
define(["util/BrowserHelper"], function(browserHelper) {
  "use strict";

  var register = function(angular, appModule) {
    appModule.directive("saveAs", function($window) {
      return function(scope, element, attrs) {
        var rawElement = element[0];
        var url = $window.URL;

        if (!url) {
          url = browserHelper.findPrefixProperty($window, "URL", {
            createObjectURL: function() {
              return "#";
            }
          });
        }

        rawElement.target = "_blank";
        rawElement.download = "session.json";
        element.bind("click", function(event) {
          rawElement.href = "#";
        });

        element.bind("click", function() {
          var textToWrite = scope.encodeSession();
          var textFileAsBlob = new Blob([textToWrite], {
            type: "application/json;charset=utf-8"
          });

          rawElement.href = url.createObjectURL(textFileAsBlob);
        });

      };
    });

  };

  var directive = {
    register: register
  };

  return directive;
});