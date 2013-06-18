/**
The ResourceManager is a wrapper interface over the ccpwgl accessor functions
(which internally again delegate to the dedicated resource manager)

@module Client
@class ResourceManager
*/
define(["lib/ccpwgl"], function(ccpwgl) {
  "use strict";

  /**
    See ccpwgl.setResourcePath()

    @method setResourcePath
    @param {string} namespace Resource namespace.
    @param {string} url URL to resource root. Needs to have a trailing slash.
    @return {ResourceManager} this instance
  */
  var setResourcePath = function(namespace, url) {
    ccpwgl.setResourcePath(namespace, url);

    return this;
  };

  var manager = {
    setResourcePath: setResourcePath
  };

  return manager;
});