/**
The Directive list collects all directives

@module Client
@class DirectiveList
*/
define(["directives/FilmViewDirective", "directives/SaveAsDirective", "directives/FileInputDirective"],

function() {
  "use strict";

  var directives = [];
  var i;

  for (i = 0; i < arguments.length; i++) {
    directives.push(arguments[i]);
  }

  return directives;
});