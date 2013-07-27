/* global console */
/**
The data-color-input directive is for handling a color value

@module Client
@class ColorInputDirective
*/
define([], function() {
  "use strict";

  var partToHex = function(part) {
    var fixedNumberText = (part * 255.0).toFixed(0);
    var parsedNumber = parseInt(fixedNumberText, 10);

    return ("0" + parsedNumber.toString(16)).substr(-2);
  };

  var colorStringParser = {
    "^#([0-9A-Fa-f]){6}$": function(value) {
      var r = parseInt(value.substr(1, 2), 16);
      var g = parseInt(value.substr(3, 2), 16);
      var b = parseInt(value.substr(5, 2), 16);

      return [r / 255.0, g / 255.0, b / 255.0];
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
    var result = null;

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

  var register = function(angular, appModule) {
    appModule.directive("colorInput", function($parse) {
      return {
        restrict: "EA",
        template: "" + //
        "<div class='row-fluid'>" + //
        "<div class='span4 container'><input class='span12' type='text' ng-model='colorText' placeholder='#0044BB' ng-change='colorChanged()'></input></div>" + //
        "<div class='offset4 span4 container' ng-style='{ backgroundColor: colorText }'></div>" + //
        "</div>",
        replace: true,
        link: function(scope, element, attrs) {
          var modelGet = $parse(attrs.color || attrs.dataColor);
          var modelSet = modelGet.assign;
          var onChange = $parse(attrs.onChange);

          scope.$watch(attrs.color, function(value) {
            if (value) {
              scope.colorText = "#" + partToHex(value[0]) + partToHex(value[1]) + partToHex(value[2]);
            }
          });

          scope.colorChanged = function() {
            var color = parseColor(scope.colorText);

            modelSet(scope, color);

            onChange(scope);
          };
        }
      };
    });
  };

  var directive = {
    register: register
  };

  return directive;
});