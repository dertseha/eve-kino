/* global window */
/**
This is a time source that provides a relative second count based on the system.
It tries to use high performance time interface before falling back to Date().

@module Client
@class SystemTimeSource
*/
define(["util/BrowserHelper"], function(browserHelper) {
  "use strict";

  // http://www.w3.org/TR/hr-time/#sec-DOMHighResTimeStamp
  var performance = window.performance || {};

  if (!("now" in performance)) {
    performance.now = browserHelper.findPrefixProperty(performance, "Now", function() {
      return new Date().getTime();
    })();
  }

  var SystemTimeSource = function() {
    this.startTime = performance.now();
  };

  /**
   * @method now
   * @return {Number} Seconds (including fractions) since instantiation.
   */
  SystemTimeSource.prototype.now = function() {
    return (performance.now() - this.startTime) * 0.001;
  };

  return SystemTimeSource;
});