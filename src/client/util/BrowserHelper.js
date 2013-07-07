/**
The helper is a static object providing some helper constants and functions
for browser access.

@module Client
@class BrowserHelper
*/
define([], function() {
  "use strict";

  /**
   * Tries to find a property with prefixes for the common browsers on a
   * specific target.
   *
   * @method findPrefixProperty
   * @param {Object} target in which target object to look for
   * @param {String} name the name of the property (without prefix)
   * @param {Object} [shim] optional shim to return if none found
   * @return {Object} the found property if existing or shim
   */
  var findPrefixProperty = function(target, name, shim) {
    var prefixes = ["webkit", "moz", "ms", "o"];
    var result = shim;

    prefixes.forEach(function(prefix) {
      var fullName = prefix + name;
      var temp = target[fullName];

      if (typeof(temp) !== "undefined") {
        result = temp;
      }
    });

    return result;
  };

  var helper = {
    findPrefixProperty: findPrefixProperty
  };

  return helper;
});