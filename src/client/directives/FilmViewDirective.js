/**
The data-film-view directive handles the correct display of a film view and
its contained port.

@module Client
@class FilmViewDirective
*/
define(["util/BrowserHelper"], function(browserHelper) {
  "use strict";

  var watchFullScreen = function($window, callback) {
    var document = $window.document;
    var isFullScreen = function() {
      return document.fullScreen;
    };

    if (!("fullScreen" in document)) {
      isFullScreen = browserHelper.findPrefixProperty(document, "FullScreen", false, {
        webkit: "webkitIsFullScreen"
      });
    }

    var lastFullScreen = isFullScreen();

    // This interval is necessary to cover cases where the browser is already in
    // maximized mode (F11, presentation-mode) and switches between fullscreen modes
    $window.setInterval(function() {
      var newFullScreen = isFullScreen();

      if (newFullScreen !== lastFullScreen) {
        lastFullScreen = newFullScreen;
        callback();
      }
    }, 100);
  };

  var register = function(angular, appModule) {
    appModule.directive("filmView", function($window) {
      return function(scope, element) {
        var area = element[0];
        var win = angular.element($window);
        var ratio = 16.0 / 9.0;

        var updateStyle = function(newDimension) {
          scope.style = function() {
            var height = (newDimension.width / ratio).toFixed(0);
            var top = 0;

            if (newDimension.height > height) {
              top = ((newDimension.height - height) / 2).toFixed(0);
            }

            return {
              position: "relative",
              top: top + "px",
              width: newDimension.width + "px",
              height: height + "px"
            };
          };
        };

        scope.getAreaDimension = function() {
          return {
            width: area.clientWidth,
            height: area.clientHeight
          };
        };

        scope.goFullscreen = function() {
          if (!area.requestFullScreen) {
            area.requestFullScreen = browserHelper.findPrefixProperty(area, "RequestFullScreen", function() {})();
          }
          area.requestFullScreen();
        };

        scope.$watch(scope.getAreaDimension, function(newValue, oldValue) {
          updateStyle(newValue);
        }, true);

        win.bind("resize", function() {
          if (!scope.$$phase) {
            scope.$apply();
          }
        });

        watchFullScreen($window, function() {
          scope.$apply();
        });
      };
    });

  };

  var directive = {
    register: register
  };

  return directive;
});