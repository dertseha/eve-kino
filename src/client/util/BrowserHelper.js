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
   * @param {Object} [overrides] optional overrides, keyed by the prefix
   * @return {Function} a getter function returning the found object or shim
   */
  var findPrefixProperty = function(target, name, shim, overrides) {
    var prefixes = ["webkit", "moz", "ms", "o"];
    var result = function() {
      return shim;
    };

    prefixes.forEach(function(prefix) {
      var fullName = (overrides && overrides[prefix]) || (prefix + name);

      if (fullName in target) {
        result = function() {
          return target[fullName];
        };
      }
    });

    return result;
  };

  var helper = {
    findPrefixProperty: findPrefixProperty
  };

  return helper;
});