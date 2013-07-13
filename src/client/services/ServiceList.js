/**
The Service list collects all services

@module Client
@class DirectiveList
*/
define(["services/FileReaderService"],
  function() {
    "use strict";

    var directives = [];
    var i;

    for (i = 0; i < arguments.length; i++) {
      directives.push(arguments[i]);
    }

    return directives;
  });