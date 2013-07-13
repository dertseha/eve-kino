/* global console */
/**
This validator handles session data

@module Client
@class SessionValidator
*/
define(["lib/jski"], function(jski) {
  "use strict";

  var setSpaceBackground = jski.object({
    space: jski.object({
      background: jski.string()
    }).required("background")
  }).required("space");
  var setChromaKeyBackground = jski.object({
    chromaKey: jski.object({
      color: jski.array(jski.number()).minItems(3).maxItems(3).additionalItems(false)
    }).required("color")
  }).required("chromaKey");

  var schema = jski.object({
    ver: jski.number().minimum(0),
    session: jski.object({
      set: jski.anyOf(setSpaceBackground, setChromaKeyBackground)
    })
  }).required("ver", "session");

  var Validator = function() {

  };

  Validator.prototype.isValid = function(object) {
    var errors = schema.validate(object);

    return errors.length === 0;
  };

  return Validator;
});